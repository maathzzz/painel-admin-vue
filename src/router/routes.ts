import { useAuth } from "../stores/auth.ts";
import { RouteLocationNormalized, NavigationGuardNext } from "vue-router";

export default async function routes(to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) {
	const auth = useAuth();
	
	if (to.meta?.auth) {
		if (auth.token) {
			const isAuthenticated = auth.isAuth;
			if (isAuthenticated) {
				next();
			} else {
				next({ name: "login" });
			}
		} else {
			next({ name: "login" });
		}
	} else {
		next();
		console.log(from);
	}
}
