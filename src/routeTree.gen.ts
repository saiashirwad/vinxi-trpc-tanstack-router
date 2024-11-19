/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from "./routes/__root";
import { Route as SomethingImport } from "./routes/something";
import { Route as IndexImport } from "./routes/index";

// Create/Update Routes

const SomethingRoute = SomethingImport.update({
	id: "/something",
	path: "/something",
	getParentRoute: () => rootRoute,
} as any);

const IndexRoute = IndexImport.update({
	id: "/",
	path: "/",
	getParentRoute: () => rootRoute,
} as any);

// Populate the FileRoutesByPath interface

declare module "@tanstack/react-router" {
	interface FileRoutesByPath {
		"/": {
			id: "/";
			path: "/";
			fullPath: "/";
			preLoaderRoute: typeof IndexImport;
			parentRoute: typeof rootRoute;
		};
		"/something": {
			id: "/something";
			path: "/something";
			fullPath: "/something";
			preLoaderRoute: typeof SomethingImport;
			parentRoute: typeof rootRoute;
		};
	}
}

// Create and export the route tree

export interface FileRoutesByFullPath {
	"/": typeof IndexRoute;
	"/something": typeof SomethingRoute;
}

export interface FileRoutesByTo {
	"/": typeof IndexRoute;
	"/something": typeof SomethingRoute;
}

export interface FileRoutesById {
	__root__: typeof rootRoute;
	"/": typeof IndexRoute;
	"/something": typeof SomethingRoute;
}

export interface FileRouteTypes {
	fileRoutesByFullPath: FileRoutesByFullPath;
	fullPaths: "/" | "/something";
	fileRoutesByTo: FileRoutesByTo;
	to: "/" | "/something";
	id: "__root__" | "/" | "/something";
	fileRoutesById: FileRoutesById;
}

export interface RootRouteChildren {
	IndexRoute: typeof IndexRoute;
	SomethingRoute: typeof SomethingRoute;
}

const rootRouteChildren: RootRouteChildren = {
	IndexRoute: IndexRoute,
	SomethingRoute: SomethingRoute,
};

export const routeTree = rootRoute
	._addFileChildren(rootRouteChildren)
	._addFileTypes<FileRouteTypes>();

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/something"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/something": {
      "filePath": "something.tsx"
    }
  }
}
ROUTE_MANIFEST_END */