/* eslint-disable prettier/prettier */
import { createRouter, createWebHistory } from "vue-router";
import BaseComp from "./components/BaseComp.vue";
import Search from "./components/SearchComp.vue";
import Add from "./components/CreateComp.vue"

const routes = [{
        path: "/",
        component: BaseComp,
    },
    {
        path: "/search",
        component: Search,
    },
    {
        path: "/add",
        component: Add,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;