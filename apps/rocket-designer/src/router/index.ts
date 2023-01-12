import { createRouter, createWebHistory } from "vue-router";

import Designer from "@/views/Designer/index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Designer",
      component: Designer,
    },
  ],
});

export default router;
