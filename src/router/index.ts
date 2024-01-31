import { createWebHistory, createRouter } from "vue-router"
import routes from './routes'
import LoggedLayout from '../layouts/LoggedLayout.vue'

const router = createRouter ({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'login',
            component: () => import('../views/Home.vue'),
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: () => import('../views/Dashboard.vue'),
            meta: {
                auth: true
            }
        },
        {
            path: '/register',
            name: 'register',
            component: () => import('../views/Register.vue'),
        },
        {
            path: '/dashboard/products',
            name: 'products',
            component: () => import('../views/Products.vue'),
            meta: {
                auth: true
            }
        },
        {
            path: '/dashboard/categories',
            name: 'categories',
            component: () => import('../views/Categories.vue'),
            meta: {
                auth: true
            }
        }
    ]
})

router.beforeEach(routes);

export default router