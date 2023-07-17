import type { RouteRecordRaw } from "vue-router";
import DashboardViewVue from "@/views/AdminViews/Dashboard/DashboardView.vue";
import SignupViewVue from "@/views/AdminViews/Signup/SignupView.vue";
import TestViewVue from "@/views/AdminViews/Signup/SignupView.vue";
import HomeViewVue from "@/views/UserViews/Home/HomeView.vue";

export class PathConst {
  public static test: Route = {
    path: "/admin/test",
    name: "adminTest",
    component: TestViewVue,
    meta: {
      title: "Test",
    },
  };

  public static adminSignup: Route = {
    path: "/admin/signup",
    name: "adminSignup",
    component: SignupViewVue,
    meta: {
      title: "title.admin.signup",
    },
  };

  public static adminDashboard: Route = {
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
