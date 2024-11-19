import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { defineEventHandler, toWebRequest } from "vinxi/http";
import { appRouter } from "./server";

export default defineEventHandler((event) => {
	const request = toWebRequest(event);

	return fetchRequestHandler({
		endpoint: "/trpc",
		req: request,
		router: appRouter,
		createContext() {
			console.log("context accessed");
			return {
				a: "test",
			};
		},
	});
});
