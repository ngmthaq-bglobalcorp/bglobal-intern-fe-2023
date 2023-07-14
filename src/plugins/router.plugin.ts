import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";
import { AdminPathConst } from "@/const/path.const";
import { UserPathConst } from "@/const/path.const";
import AdminNotFoundView from "@/views/AdminViews/NotFound/NotFoundView.vue";
import UserNotFoundView from "@/views/UserViews/NotFound/NotFoundView.vue";

export const adminRoutes = Object.values(AdminPathConst);
export const userRoutes = Object.values(UserPathConst);

export const adminPathNotFound: RouteRecordRaw = {
  path: "/admin/:pathMatch(.*)*",
  name: "AdminPathNotFound",
  component: AdminNotFoundView,
  meta: {
    title: "title.notFound",
  },
};

export const userPathNotFound: RouteRecordRaw = {
  path: "/:pathMatch(.*)*",
  name: "UserPathNotFound",
  component: UserNotFoundView,
  meta: {
    title: "title.notFound",
  },
};

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...adminRoutes, ...userRoutes, adminPathNotFound, userPathNotFound],
});
