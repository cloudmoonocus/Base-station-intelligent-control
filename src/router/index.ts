import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import TecOffer from "@/views/TecOffer.vue";
import DownLoad from "@/views/DownLoad.vue";
import About from "@/views/About.vue";
import Contact from "@/views/Contact.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            meta: { ifShowFooter: true },
            component: Home,
        },
        {
            path: "/",
            redirect: "/home",
        },
        {
            path: "/main",
            name: "main",
            meta: { ifShowFooter: false },
            component: () => import("@/views/main.vue"),
        },
        {
            path: "/login",
            name: "login",
            meta: { ifShowFooter: false },
            component: Login,
        },
        {
            path: "/home",
            name: "home",
            meta: { ifShowFooter: true },
            component: Home,
        },
        {
            path: "/tecOffer",
            name: "tecOffer",
            meta: { ifShowFooter: true },
            component: TecOffer,
        },
        {
            path: "/download",
            name: "download",
            meta: { ifShowFooter: true },
            component: DownLoad,
        },
        {
            path: "/about",
            name: "about",
            meta: { ifShowFooter: true },
            component: About,
        },
        {
            path: "/contact",
            name: "contact",
            meta: { ifShowFooter: true },
            component: Contact,
        },
        {
            path: "/:catchAll(.*)",
            component: () => import("@/views/Error.vue"),
        },
    ],
});

export default router;
