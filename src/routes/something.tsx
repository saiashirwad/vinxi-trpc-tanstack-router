import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/something")({
	component: RouteComponent,
});

function RouteComponent() {
	return "Hello /something!";
}
