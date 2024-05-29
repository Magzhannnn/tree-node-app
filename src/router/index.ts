import { createRouter, createWebHistory } from "vue-router";
import TreeView from "../views/TreeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: TreeView,
    },
  ],
});

export default router;
