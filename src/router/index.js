import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from "@/pages/HomePage";
import GetStarted from "@/pages/GetStarted";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage
    },
    {
        path: '/get-started',
        name: 'getStarted',
        component: GetStarted
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
