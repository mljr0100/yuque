import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import notFoundVue from "../views/404.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/About",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    component: notFoundVue,
  },
];

export default createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
