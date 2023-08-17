import type { RouteRecordRaw } from "vue-router";
import SignupAdminViewVue from "@/views/AdminViews/Signup/SignupView.vue";
import SigninAdminViewVue from "@/views/AdminViews/Signin/SigninView.vue";
import ForgotPasswordAdminViewVue from "@/views/AdminViews/ForgotPassword/ForgotPasswordView.vue";
import DashboardAdminViewVue from "@/views/AdminViews/Dashboard/DashboardView.vue";
import SeekersAdminViewVue from "@/views/AdminViews/Seekers/SeekersView.vue";
import HiringOrganizationAdminViewVue from "@/views/AdminViews/HiringOrganization/HiringOrganizationView.vue";
import NewsAdminViewVue from "@/views/AdminViews/News/NewsView.vue";
import AddNewsAdminViewVue from "@/views/AdminViews/AddNews/AddNewsView.vue";
import JobsAdminViewVue from "@/views/AdminViews/Jobs/JobsView.vue";
import JobDetailAdminViewVue from "@/views/AdminViews/JobDetail/JobDetailView.vue";
import AddJobAdminViewVue from "@/views/AdminViews/AddJob/AddJobView.vue";
import UserProfileAdminViewVue from "@/views/AdminViews/UserProfile/UserProfileView.vue";
import UpdateProfileAdminViewVue from "@/views/AdminViews/UpdateProfile/UpdateProfileView.vue";
import SignupViewVue from "@/views/UserViews/Signup/SignupView.vue";
import SigninViewVue from "@/views/UserViews/Signin/SigninView.vue";
import ForgotPasswordViewVue from "@/views/UserViews/ForgotPassword/ForgotPasswordView.vue";
import HomeViewVue from "@/views/UserViews/Home/HomeView.vue";
import JobsListViewVue from "@/views/UserViews/JobsList/JobsListView.vue";
import JobDetailsViewVue from "@/views/UserViews/JobDetails/JobDetailsView.vue";
import HistoryViewVue from "@/views/UserViews/History/HistoryView.vue";
import UserProfileViewVue from "@/views/UserViews/UserProfile/UserProfileView.vue";
import NotFoundViewVue from "@/views/Errors/NotFoundView.vue";
import InternalErrorViewVue from "@/views/Errors/InternalErrorView.vue";
import { AppConst } from "./app.const";

export class PathConst {
  public static adminSignup: Route = {
    path: "/admin/signup",
    name: "adminSignup",
    component: SignupAdminViewVue,
    meta: {
      title: "title.admin.signup",
      auth: AppConst.ROLE.auth,
    },
  };

  public static adminSignin: Route = {
    path: "/admin/signin",
    name: "adminSignin",
    component: SigninAdminViewVue,
    meta: {
      title: "title.admin.signin",
      auth: AppConst.ROLE.auth,
    },
  };

  public static adminForgot: Route = {
    path: "/admin/password/forgot",
    name: "adminForgot",
    component: ForgotPasswordAdminViewVue,
    meta: {
      title: "title.admin.forgotPassword",
      auth: AppConst.ROLE.auth,
    },
  };

  public static adminDashboard: Route = {
    path: "/admin",
    name: "adminDashboard",
    component: DashboardAdminViewVue,
    meta: {
      title: "title.admin.dashboard",
      auth: AppConst.ROLE.all,
    },
  };

  public static adminSeekers: Route = {
    path: "/admin/seekers",
    name: "adminSeekers",
    component: SeekersAdminViewVue,
    meta: {
      title: "title.admin.seekers",
      auth: AppConst.ROLE.admin,
    },
  };

  public static adminOrganization: Route = {
    path: "/admin/organization",
    name: "adminOrganization",
    component: HiringOrganizationAdminViewVue,
    meta: {
      title: "title.admin.hiringOrganization",
      auth: AppConst.ROLE.admin,
    },
  };

  public static adminNews: Route = {
    path: "/admin/news",
    name: "adminNews",
    component: NewsAdminViewVue,
    meta: {
      title: "title.admin.news",
      auth: AppConst.ROLE.admin,
    },
  };

  public static adminAddNews: Route = {
    path: "/admin/news/add",
    name: "adminAddNews",
    component: AddNewsAdminViewVue,
    meta: {
      title: "title.admin.addNews",
      auth: AppConst.ROLE.admin,
    },
  };

  public static adminUpdateNews: Route = {
    path: "/admin/news/:newsId/update",
    name: "adminUpdateNews",
    component: AddNewsAdminViewVue,
    props: true,
    meta: {
      title: "title.admin.updateNews",
      auth: AppConst.ROLE.admin,
    },
  };

  public static adminJobsList: Route = {
    path: "/admin/jobs",
    name: "adminJobsList",
    component: JobsAdminViewVue,
    meta: {
      title: "title.admin.jobs",
      auth: AppConst.ROLE.organization,
    },
  };

  public static adminJobDetail: Route = {
    path: "/admin/jobs/:jobId",
    name: "adminJobDetail",
    component: JobDetailAdminViewVue,
    props: true,
    meta: {
      title: "title.admin.jobs",
      auth: AppConst.ROLE.organization,
    },
  };

  public static adminAddJob: Route = {
    path: "/admin/jobs/add",
    name: "adminAddJob",
    component: AddJobAdminViewVue,
    meta: {
      title: "title.admin.addJob",
      auth: AppConst.ROLE.organization,
    },
  };

  public static adminUpdateJob: Route = {
    path: "/admin/jobs/:jobId/update",
    name: "adminUpdateJob",
    component: AddJobAdminViewVue,
    props: true,
    meta: {
      title: "title.admin.updateJob",
      auth: AppConst.ROLE.organization,
    },
  };

  public static adminUserProfile: Route = {
    path: "/admin/:username",
    name: "adminUserProfile",
    component: UserProfileAdminViewVue,
    props: true,
    meta: {
      title: "title.admin.userProfile",
      auth: AppConst.ROLE.all,
    },
  };

  public static adminUpdateProfile: Route = {
    path: "/admin/user/profile/update",
    name: "adminUpdateProfile",
    component: UpdateProfileAdminViewVue,
    meta: {
      title: "title.admin.updateProfile",
      auth: AppConst.ROLE.all,
    },
  };

  public static userSignup: Route = {
    path: "/signup",
    name: "userSignup",
    component: SignupViewVue,
    meta: {
      title: "title.user.signup",
      auth: AppConst.ROLE.auth,
    },
  };

  public static userSignin: Route = {
    path: "/signin",
    name: "userSignin",
    component: SigninViewVue,
    meta: {
      title: "title.user.signin",
      auth: AppConst.ROLE.auth,
    },
  };

  public static userForgot: Route = {
    path: "/password/forgot",
    name: "userForgot",
    component: ForgotPasswordViewVue,
    meta: {
      title: "title.user.forgotPassword",
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

  public static userJobsList: Route = {
    path: "/jobs",
    name: "userJobsList",
    component: JobsListViewVue,
    meta: {
      title: "title.user.jobslist",
      auth: AppConst.ROLE.seeker,
    },
  };

  public static userJobDetails: Route = {
    path: "/jobs/:jobId",
    name: "userJobDetails",
    component: JobDetailsViewVue,
    props: true,
    meta: {
      title: "title.user.jobDetails",
      auth: AppConst.ROLE.seeker,
    },
  };

  public static userHistory: Route = {
    path: "/user/history",
    name: "userHistory",
    component: HistoryViewVue,
    meta: {
      title: "title.user.history",
      auth: AppConst.ROLE.seeker,
    },
  };

  public static userProfile: Route = {
    path: "/profile",
    name: "userProfile",
    component: UserProfileViewVue,
    meta: {
      title: "title.user.profile",
      auth: AppConst.ROLE.seeker,
    },
  };

  public static notFound: Route = {
    path: "/404",
    name: "notFound",
    component: NotFoundViewVue,
    meta: {
      title: "title.notFound",
      auth: AppConst.ROLE.guest,
    },
  };

  public static internalError: Route = {
    path: "/500",
    name: "internalError",
    component: InternalErrorViewVue,
    meta: {
      title: "title.internalError",
      auth: AppConst.ROLE.guest,
    },
  };
}

export type Route = RouteRecordRaw;
