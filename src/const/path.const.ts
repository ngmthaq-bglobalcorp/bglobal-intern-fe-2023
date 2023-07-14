import type { RouteRecordRaw } from "vue-router";
import DashboardViewVue from "@/views/AdminViews/Dashboard/DashboardView.vue";
import HomeViewVue from "@/views/UserViews/Home/HomeView.vue";

export class PathConst {
  public static dashboard: Route = {
    path: "/admin",
    name: "adminDasboard",
    component: DashboardViewVue,
    meta: {
      title: "title.admin.dashboard",
    },
  };

  public static home: Route = {
    path: "/",
    name: "home",
    component: HomeViewVue,
    meta: {
      title: "title.user.home",
    },
  };
}

export type Route = RouteRecordRaw;
