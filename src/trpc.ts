import { initTRPC } from "@trpc/server";
import superjson from "superjson";

export const t = initTRPC
	.context<{
		a: string;
	}>()
	.create({
		transformer: superjson,
	});
