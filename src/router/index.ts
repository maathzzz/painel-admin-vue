import { createWebHistory, createRouter } from "vue-router";
import routes from "./routes";

const router = createRouter ({
	history: createWebHistory(),
	routes: [
		{
			path: "/",
			name: "login",
			component: () => import("../views/HomeView.vue"),
		},
		{
			path: "/dashboard",
			name: "dashboard",
			// component: () => import('../views/DashboardView.vue'),
			redirect: "/dashboard/products",
			meta: {
				auth: true
			}
		},
		{
			path: "/register",
			name: "register",
			component: () => import("../views/RegisterView.vue"),
		},
		{
			path: "/dashboard/products",
			name: "products",
			component: () => import("../views/ProductsView.vue"),
			meta: {
				auth: true
			}
		},
		{
			path: "/dashboard/categories",
			name: "categories",
			component: () => import("../views/CategoriesView.vue"),
			meta: {
				auth: true
			}
		}
	]
});

router.beforeEach(routes);

export default router;