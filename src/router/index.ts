import HomePage from "@/pages/HomePage.vue";
import ContactsPage from "@/pages/ContactsPage.vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/contacts",
    name: "contacts",
    component: ContactsPage,
  },
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
