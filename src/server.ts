import { t } from "./trpc";

export const appRouter = t.router({
	greeting: t.procedure.query(() => "hello tRPC v10!"),
});

export type AppRouter = typeof appRouter;
