import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { createApp } from "vinxi";

export default createApp({
	routers: [
		{
			name: "public",
			type: "static",
			dir: "./public",
		},
		{
			name: "client",
			type: "spa",
			handler: "./index.html",
			plugins: () => [
				//TanStackRouterVite({
				//	routesDirectory: "./src/routes",
				//	generatedRouteTree: "./src/routeTree.gen.ts",
				//	autoCodeSplitting: true,
				//}),
				viteReact(),
			],
			target: "browser",
		},
		{
			name: "trpc",
			type: "http",
			base: "/trpc",
			handler: "./src/trpc-handler.ts",
			target: "server",
		},
	],
});
