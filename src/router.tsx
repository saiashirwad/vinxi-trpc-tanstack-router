import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRouter as createTanStackRouter } from "@tanstack/react-router";
import { httpBatchLink } from "@trpc/client";
import { createTRPCQueryUtils, createTRPCReact } from "@trpc/react-query";
import superjson from "superjson";

import { routeTree } from "./routeTree.gen";
import type { AppRouter } from "./server";

export const queryClient = new QueryClient();

export const trpc = createTRPCReact<AppRouter>({});

export const trpcClient = trpc.createClient({
	links: [
		httpBatchLink({
			url: "/trpc",
			transformer: superjson,
		}),
	],
});

export const trpcQueryUtils = createTRPCQueryUtils({
	queryClient,
	client: trpcClient,
});

export function createRouter() {
	const router = createTanStackRouter({
		routeTree,
		defaultPreload: "intent",
		context: {
			// @ts-ignore
			trpcQueryUtils,
		},
		defaultPendingComponent: () => <div className={`p-2 text-2xl`}>spin</div>,
		Wrap: (props: { children: any }) => (
			<trpc.Provider client={trpcClient} queryClient={queryClient}>
				<QueryClientProvider client={queryClient}>
					{props.children}
				</QueryClientProvider>
			</trpc.Provider>
		),
	});

	return router;
}

// Register the router instance for type safety
declare module "@tanstack/react-router" {
	interface Register {
		router: ReturnType<typeof createRouter>;
	}
}
