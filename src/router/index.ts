import { createWebHistory, createRouter, RouteRecordRaw } from "vue-router"

import LoggedLayout from '../layouts/LoggedLayout.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/Home.vue'),
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('../views/Dashboard.vue'),
        meta: {
            layout: LoggedLayout
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
    },
    {
        path: '/dashboard/categories',
        name: 'categories',
        component: () => import('../views/Categories.vue'),
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router