export class ApiConst {
  public static authEndpoints = {
    login: "/auth/login",
    logout: "/auth/logout",
    organizationSignup: "/auth/organization/signup",
    seekerSignup: "/auth/seeker/signup",
    changeEmail: "/auth/users",
    changePassword: "/auth/change-password",
    forgotPassword: "/auth/forgot-password",
    resetPassword: "/auth/reset-password",
  };

  public static commonEndpoints = {
    getAllNews: "/news",
    findJobById: "/jobs/:id",
    uploadImage: "/image/upload",
    uploadMultipleImages: "/image/uploads",
    getAllSearchLabel: "/tag-search",
    getAllLocations: "/Locations",
  };

  public static adminEndpoints = {
    findNewsById: "/admin/news/:id",
    createNews: "/admin/news/add",
    changeNews: "/admin/news/:id",
    deleteNews: "/admin/news/:id",
    getAllUsers: "/admin/users",
    findUserById: "/admin/users/:id",
    deleteUser: "/admin/users/:id",
    changeUserStatus: "/admin/users/:id/status",
    searchUsers: "/admin/users/q",
    getAllOrganizations: "/admin/organizations",
    findOrganizationById: "/admin/organizations/:id",
    deleteOrganization: "/admin/organizations/:id",
    searchOrganizations: "/admin/organizations/q",
    getAllSeekers: "/admin/seekers",
    findSeekerById: "/admin/seekers/:id",
    deleteSeeker: "/admin/seekers/:id",
    searchSeekers: "/admin/seekers/q",
    findSearchLabelById: "/admin/tag-search/:id",
    createSearchLabel: "/admin/tag-search/add",
    updateSearchLabel: "/admin/tag-search/:id",
    deleteSearchLabel: "/admin/tag-search/:id",
  };

  public static seekersEndpoints = {
    getAllSeekerJobs: "/seeker/jobs",
    updateSeekerJobs: "/seeker/jobs/:id",
    getSeekerProfile: "/seeker/profile",
    updateSeekerProfile: "/seeker/profile/update",
  };

  public static organizationsEndpoints = {
    getAllOrganizationJobs: "/organizations/jobs",
    findOrganizationJobsById: "/organizations/jobs/:id",
    updateOrganizationJobs: "/organizations/jobs/:id/update",
    deleteOrganizationJobs: "/organizations/jobs/:id/delete",
    createOrganizationJobs: "/organizations/jobs/create",
    getAllSeekerLikeJob: "/organizations/jobs/:id/seeker",
    getOrganizationProfile: "/organizations/profile",
    updateOrganizationProfile: "/organizations/profile/update",
  };

  public static status = {
    ok: 200,
    created: 201,
    noContent: 204,
    badRequest: 400,
    unauthorized: 401,
    forbidden: 403,
    notFound: 404,
    internalError: 500,
    serviceUnavailable: 503,
  };
}

export type GetApi = { uri: string };
