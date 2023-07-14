import type { RouteRecordRaw } from "vue-router";
import HomeViewVue from "@/views/UserViews/Home/HomeView.vue";

export class UserPathConst {
  public static home: Route = {
    path: "/",
    name: "Home",
    component: HomeViewVue,
    meta: {
      title: "title.user.home",
    },
  };
}

import DashboardViewVue from "@/views/AdminViews/Dashboard/DashboardView.vue";

export class AdminPathConst {
  public static dashboard: Route = {
    path: "/admin",
    name: "Dasboard",
    component: DashboardViewVue,
    meta: {
      title: "title.admin.dashboard",
    },
  };
}

export type Route = RouteRecordRaw;
