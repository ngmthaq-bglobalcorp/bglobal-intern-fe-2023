import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";
import { PathConst } from "@/const/path.const";
import NotFoundView from "@/views/Errors/NotFoundView.vue";

export const routes = Object.values(PathConst);

export const pathNotFound: RouteRecordRaw = {
  path: "/:pathMatch(.*)*",
  name: "pathNotFound",
  component: NotFoundView,
  meta: {
    title: "title.notFound",
  },
};

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...routes, pathNotFound],
});
