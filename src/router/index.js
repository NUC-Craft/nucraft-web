import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from "@/pages/HomePage";
import GetStarted from "@/pages/GetStarted";
import AboutPage from "@/pages/AboutPage";
import RailwayPage from "@/pages/RailwayPage";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage
    },
    {
        path: '/railway',
        name: 'railwayPage',
        component: RailwayPage
    },
    {
        path: '/get-started',
        name: 'getStarted',
        component: GetStarted
    },
    {
        path: '/about',
        name: 'aboutPage',
        component: AboutPage
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
