import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import EditUser from "@/components/EditUser.vue";
import List from "@/components/List.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/view",
    name: "view",
    component: List,
  },
  {
    path: "/edit/:id",
    name: "edit",
    component: EditUser,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
