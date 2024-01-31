import { useAuth } from "../stores/auth.ts";

export default async function routes(to, from, next) {
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
    }
}
