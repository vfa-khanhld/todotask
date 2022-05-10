/* eslint-disable prettier/prettier */
import { createRouter, createWebHistory } from "vue-router";
import BaseComp from "./components/BaseComp.vue";
import Search from "./components/SearchComp.vue";
import Add from "./components/AddComp.vue"
import Edit from "./components/EditComp.vue"

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
    {
        path: "/edit/:id",
        name: "edit-by-id",
        component: Edit,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;