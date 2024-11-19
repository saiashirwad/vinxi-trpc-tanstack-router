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
			name: "api",
			type: "http",
			base: "/api",
			root: "./src",
			handler: "hono.ts",
			plugins: () => [],
		},
		{
			name: "lol",
			type: "http",
			base: "/lol",
			handler: "hono.ts",
			root: "./src",
			plugins: () => [],
		},
		{
			name: "trpc",
			type: "http",
			base: "/trpc",
			root: "./src",
			handler: "hono.ts",
		},
		{
			name: "client",
			type: "spa",
			handler: "./index.html",
			plugins: () => [
				TanStackRouterVite({
					routesDirectory: "./src/routes",
					generatedRouteTree: "./src/routeTree.gen.ts",
					autoCodeSplitting: true,
				}),
				viteReact(),
			],
			target: "browser",
		},
	],
});
