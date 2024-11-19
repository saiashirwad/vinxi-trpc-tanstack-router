import { trpcServer } from "@hono/trpc-server";
import { Hono } from "hono";
import { logger } from "hono/logger";
import { fromWebHandler } from "vinxi/http";
import { appRouter } from "./src/server";

const app = new Hono().use(logger());

app.get("/api/", (c) => c.json({ hi: "there" }));

app.use(
	"/trpc/*",
	trpcServer({
		createContext: (_, ctx) => ({
			auth: ctx.get("user"),
			ctx,
		}),
		router: appRouter,
	}),
);
app.get("/lol/", (c) => c.json({ hi: "lol" }));
app.get("/api/hi", (c) => c.text("hi"));

// @ts-ignore
export default fromWebHandler(app.fetch);
