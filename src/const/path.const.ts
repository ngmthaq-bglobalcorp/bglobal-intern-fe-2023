import type { RouteRecordRaw } from "vue-router";
import DashboardViewVue from "@/views/AdminViews/Dashboard/DashboardView.vue";
import SignupViewVue from "@/views/AdminViews/Signup/SignupView.vue";
import HomeViewVue from "@/views/UserViews/Home/HomeView.vue";
import SignUp from "@/views/UserViews/Signup/SignUp.vue";
import JobList from "@/views/UserViews/JobList/JobList.vue";

export class PathConst {
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
    name: "adminDashboard",
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
  public static userSignup: Route = {
    path: "/signup",
    name: "Signup",
    component: SignUp,
    meta: {
      title: "title.user.signup",
    },
  };
  public static jobList: Route = {
    path: "/joblist",
    name: "JobList",
    component: JobList,
    meta: {
      title: "title.user.joblist",
    },
  };
}

export type Route = RouteRecordRaw;
