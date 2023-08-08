import type { RouteRecordRaw } from "vue-router";
import SignupViewVue from "@/views/AdminViews/Signup/SignupView.vue";
import SigninViewVue from "@/views/AdminViews/Signin/SigninView.vue";
import ForgotPasswordViewVue from "@/views/AdminViews/ForgotPassword/ForgotPasswordView.vue";
import DashboardViewVue from "@/views/AdminViews/Dashboard/DashboardView.vue";
import SeekersViewVue from "@/views/AdminViews/Seekers/SeekersView.vue";
import HiringOrganizationViewVue from "@/views/AdminViews/HiringOrganization/HiringOrganizationView.vue";
import NewsViewVue from "@/views/AdminViews/News/NewsView.vue";
import AddNewsViewVue from "@/views/AdminViews/AddNews/AddNewsView.vue";
import JobsViewVue from "@/views/AdminViews/Jobs/JobsView.vue";
import JobDetailViewVue from "@/views/AdminViews/JobDetail/JobDetailView.vue";
import AddJobViewVue from "@/views/AdminViews/AddJob/AddJobView.vue";
import UserProfileViewVue from "@/views/AdminViews/UserProfile/UserProfileView.vue";
import UpdateProfileViewVue from "@/views/AdminViews/UpdateProfile/UpdateProfileView.vue";
import HomeViewVue from "@/views/UserViews/Home/HomeView.vue";
import { AppConst } from "./app.const";

export class PathConst {
  public static adminSignup: Route = {
    path: "/admin/signup",
    name: "adminSignup",
    component: SignupViewVue,
    meta: {
      title: "title.admin.signup",
      auth: AppConst.ROLE.auth,
    },
  };

  public static adminSignin: Route = {
    path: "/admin/signin",
    name: "adminSignin",
    component: SigninViewVue,
    meta: {
      title: "title.admin.signin",
      auth: AppConst.ROLE.auth,
    },
  };

  public static adminForgot: Route = {
    path: "/admin/password/forgot",
    name: "adminForgot",
    component: ForgotPasswordViewVue,
    meta: {
      title: "title.admin.forgotPassword",
      auth: AppConst.ROLE.auth,
    },
  };

  public static adminDashboard: Route = {
    path: "/admin",
    name: "adminDashboard",
    component: DashboardViewVue,
    meta: {
      title: "title.admin.dashboard",
      auth: AppConst.ROLE.all,
    },
  };

  public static adminSeekers: Route = {
    path: "/admin/seekers",
    name: "adminSeekers",
    component: SeekersViewVue,
    meta: {
      title: "title.admin.seekers",
      auth: AppConst.ROLE.admin,
    },
  };

  public static adminOrganization: Route = {
    path: "/admin/organization",
    name: "adminOrganization",
    component: HiringOrganizationViewVue,
    meta: {
      title: "title.admin.hiringOrganization",
      auth: AppConst.ROLE.admin,
    },
  };

  public static adminNews: Route = {
    path: "/admin/news",
    name: "adminNews",
    component: NewsViewVue,
    meta: {
      title: "title.admin.news",
      auth: AppConst.ROLE.admin,
    },
  };

  public static adminAddNews: Route = {
    path: "/admin/news/add",
    name: "adminAddNews",
    component: AddNewsViewVue,
    meta: {
      title: "title.admin.addNews",
      auth: AppConst.ROLE.admin,
    },
  };

  public static adminUpdateNews: Route = {
    path: "/admin/news/:newsId",
    name: "adminUpdateNews",
    component: AddNewsViewVue,
    props: true,
    meta: {
      title: "title.admin.updateNews",
      auth: AppConst.ROLE.admin,
    },
  };

  public static adminJobsList: Route = {
    path: "/admin/jobs",
    name: "adminJobsList",
    component: JobsViewVue,
    meta: {
      title: "title.admin.jobs",
      auth: AppConst.ROLE.organization,
    },
  };

  public static adminJobDetail: Route = {
    path: "/admin/jobs/:jobId",
    name: "adminJobDetail",
    component: JobDetailViewVue,
    meta: {
      title: "title.admin.jobs",
      auth: AppConst.ROLE.organization,
    },
  };

  public static adminAddJob: Route = {
    path: "/admin/jobs/add",
    name: "adminAddJob",
    component: AddJobViewVue,
    meta: {
      title: "title.admin.addJob",
      auth: AppConst.ROLE.organization,
    },
  };

  public static adminUserProfile: Route = {
    path: "/admin/user/profile",
    name: "adminUserProfile",
    component: UserProfileViewVue,
    meta: {
      title: "title.admin.userProfile",
      auth: AppConst.ROLE.all,
    },
  };

  public static adminUpdateProfile: Route = {
    path: "/admin/user/profile/update",
    name: "adminUpdateProfile",
    component: UpdateProfileViewVue,
    meta: {
      title: "title.admin.updateProfile",
      auth: AppConst.ROLE.all,
    },
  };

  public static signup: Route = {
    path: "/signup",
    name: "signup",
    component: SignupViewVue,
    meta: {
      title: "title.admin.signup",
      auth: AppConst.ROLE.auth,
    },
  };

  public static signin: Route = {
    path: "/signin",
    name: "signin",
    component: SigninViewVue,
    meta: {
      title: "title.admin.signin",
      auth: AppConst.ROLE.auth,
    },
  };

  public static forgotPassword: Route = {
    path: "/password/forgot",
    name: "forgotPassword",
    component: ForgotPasswordViewVue,
    meta: {
      title: "title.admin.forgotPassword",
      auth: AppConst.ROLE.auth,
    },
  };

  public static home: Route = {
    path: "/",
    name: "home",
    component: HomeViewVue,
    meta: {
      title: "title.user.home",
      auth: AppConst.ROLE.seeker,
    },
  };
}

export type Route = RouteRecordRaw;
