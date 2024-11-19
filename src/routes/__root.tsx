import {
	Outlet,
	createRootRouteWithContext,
	useRouterState,
} from "@tanstack/react-router";

import type { trpcQueryUtils } from "../router";

export interface RouterAppContext {
	trpcQueryUtils: typeof trpcQueryUtils;
}

export const Route =
	createRootRouteWithContext<RouterAppContext>()({
		component: RootComponent,
	});

function RootComponent() {
	const isFetching = useRouterState({
		select: (s) => s.isLoading,
	});

	return (
		<>
			<pre>{JSON.stringify({ isFetching })}</pre>
			<div>hi</div>
			<Outlet />
		</>
	);
}
