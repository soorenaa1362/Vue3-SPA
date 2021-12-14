import {createRouter, createWebHistory} from 'vue-router';
import Home from './pages/Home.vue';
import IndexUser from './pages/users/Index.vue'

const routes = [
    { path: "/", name: "home", component: Home },
    { path: "/users", name: "users", component: IndexUser }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
