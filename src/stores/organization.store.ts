import type { Ref } from "vue";
import { BaseStore, defineClassStore } from "@/plugins/store.plugin";
import { Api } from "@/plugins/api.plugin";
import { ApiConst } from "@/const/api.const";
import { AppConst } from "@/const/app.const";
import { DatetimeHelper } from "@/helpers/datetime.helper";
import { OrganizationModel } from "@/models/organization.model";
import { JobModel } from "@/models/job.model";
import { LocationModel } from "@/models/location.model";
import { SearchLabelModel } from "@/models/searchLabel.model";

export const api = new Api();

export const useOrganizationStore = defineClassStore(
  class Store extends BaseStore {
    public name: string = "organizations";

    public profile: Ref<OrganizationModel> = this.ref(new OrganizationModel({}));
    public jobs: Ref<Array<JobModel>> = this.ref([]);
    public job: Ref<JobModel> = this.ref(new JobModel({}));

    public fetchProfile = async () => {
      try {
        const res = await api.get(ApiConst.organizationsEndpoints.getOrganizationProfile);
        if (res.status === ApiConst.status.ok) {
          const data: any = await res.json();
          console.log(data);
          if (data) {
            const profile = {
              id: data.id,
              userId: data.user.id,
              username: data.user.username,
              name: data.name,
              email: data.user.email,
              phoneNumber: data.phoneNumber,
              avatar: data.photo,
              website: data.website,
              address: data.address,
              introduction: data.introduction,
              organizationType: data.organizationType,
              status: data.user.status,
            };
            this.profile.value = new OrganizationModel(profile);
            console.log(this.profile.value);
          }
        }
      } catch (error) {
        console.log(error);
      }
    };

    public fetchUpdateProfile = async (data: OrganizationModel) => {
      try {
        const profile = {
          name: data.name || "",
          phone_number: data.phoneNumber || "",
          website: data.website || "",
          address: data.address || 1,
          introduction: data.introduction || "",
          organizationType: data.organizationType || AppConst.ORGANIZATION_TYPE.typeB,
        };
        console.log(profile);
        const res = await api.put(ApiConst.organizationsEndpoints.updateOrganizationProfile, JSON.stringify(profile));
        if (res.status === ApiConst.status.ok) {
          return true;
        } else {
          return false;
        }
      } catch (error) {
        console.log(error);
      }
    };

    public fetchUpdateEmail = async (email: string) => {
      try {
        const res = await api.put(ApiConst.authEndpoints.changeEmail, email);
        if (res.status === ApiConst.status.ok) {
          return true;
        } else {
          return false;
        }
      } catch (error) {
        console.log(error);
      }
    };

    public fetchUpdatePassword = async (password: any) => {
      try {
        const res = await api.post(ApiConst.authEndpoints.changePassword, JSON.stringify(password));
        if (res.status === ApiConst.status.ok) {
          return true;
        } else {
          return false;
        }
      } catch (error) {
        console.log(error);
      }
    };

    public fetchAllJobs = async () => {
      try {
        const res = await api.get(ApiConst.organizationsEndpoints.getAllOrganizationJobs);
        if (res.status === ApiConst.status.ok) {
          const data: any[] = await res.json();
          console.log(data);
          const jobs = data.map((data) => {
            const job = {
              id: data.id,
              mainImageUrl: data.mainImage.url,
              mainImageDesc: data.mainImage.description,
              title: data.title,
              jobTitleCatchPhrase: data.jobTitleCatchPhrase,
              location: new LocationModel({
                id: data.location.id,
                name: data.location.city,
              }),
              salary: data.salary.monthly,
              workingHours: data.workingHours,
              searchLabels: data.searchLabels
                ? data.searchLabels.map((value: any) => {
                    return new SearchLabelModel({
                      id: value.id,
                      name: value.name,
                      isEnabled: value.isEnabled,
                    });
                  })
                : [],
              webApplication: data.webApplication.url,
              catchText: data.catchText,
              leadText: data.leadText,
              subImages: data.subImages,
              properties: data.properties,
              postScripts: data.postScripts,
              companySurvey: data.companySurvey.displayed && data.companySurvey.contents,
              barometer: data.barometer.displayed && data.barometer.contents,
              photoGallery: data.photoGallery.contents,
              interview: data.interview.displayed && data.interview.contents,
              productCode: data.productCode,
              opensAt: data.opensAt,
              expiresAt: data.expiresAt,
              updatedAt: data.updatedAt,
              createdAt: data.createdAt,
            };
            return new JobModel(job);
          });
          this.jobs.value = jobs;
          console.log(this.jobs.value);
        }
      } catch (error) {
        console.log(error);
      }
    };

    public fetchFindJobById = async (id: string) => {
      try {
        const res = await api.get(ApiConst.commonEndpoints.findJobById.replace("{id}", id));
        if (res.status === ApiConst.status.ok) {
          const data: any = await res.json();
          console.log(data);
          if (data) {
            const job = {
              id: data.id,
              mainImageUrl: data.mainImage.url,
              mainImageDesc: data.mainImage.description,
              title: data.title,
              jobTitleCatchPhrase: data.jobTitleCatchPhrase,
              location: new LocationModel({
                id: data.location.id,
                name: data.location.city,
              }),
              salary: data.salary.monthly,
              workingHours: data.workingHours,
              searchLabels: data.searchLabels
                ? data.searchLabels.map((value: any) => {
                    return new SearchLabelModel({
                      id: value.id,
                      name: value.name,
                      isEnabled: value.isEnabled,
                    });
                  })
                : [],
              webApplication: data.webApplication.url,
              catchText: data.catchText,
              leadText: data.leadText,
              subImages: data.subImages,
              properties: data.properties,
              postScripts: data.postScripts,
              companySurvey: data.displayed && data.companySurvey.contents,
              barometer: data.displayed && data.barometer.contents,
              photoGallery: data.photoGallery.contents,
              interview: data.displayed && data.interview.contents,
              productCode: data.productCode,
              opensAt: data.opensAt,
              expiresAt: data.expiresAt,
              updatedAt: data.updatedAt,
              createdAt: data.createdAt,
            };
            this.job.value = new JobModel(job);
            console.log(this.job.value);
          }
        }
      } catch (error) {
        console.log(error);
      }
    };

    public fetchCreateJob = async (data: JobModel) => {
      try {
        const job = {
          mainImageUrl: data.mainImageUrl || "",
          mainImageDescription: data.title || "Main image",
          title: data.title || "",
          jobTitleCatchPhrase: data.jobTitleCatchPhrase || "",
          locationId: data.location.id || 1,
          salary: {
            daily: 0,
            dailyText: "daily",
            hourly: 0,
            hourlyText: "hourly",
            monthly: data.salary || 0,
            monthlyText: "monthly",
            type: 0,
          },
          workingHours: data.workingHours
            ? data.workingHours.map((value: any) => {
                return {
                  start_time: value.startTime,
                  end_time: value.endTime,
                  hours: value.countHours,
                  is_full_time: value.isFullTime,
                };
              })
            : [],
          searchLabelIds: data.searchLabels
            ? data.searchLabels.map((value: SearchLabelModel) => {
                return value.id;
              })
            : [],
          webApplicationUrl: data.webApplication || "",
          catchText: data.catchText || "",
          leadText: data.leadText || "",
          subImageUrl: data.subImages || [],
          subImageDescriptions: [],
          properties: data.properties
            ? data.properties.map((value: any) => {
                return {
                  title: value.title,
                  body: value.body,
                  is_displayed: true,
                  sort_order: 0,
                };
              })
            : [],
          postScripts: data.postScripts
            ? data.postScripts.map((value: any) => {
                return value.body;
              })
            : [],
          companySurvey: {
            contents: [],
            displayed: true,
          },
          barometer: {
            contents: [],
            displayed: true,
            stats: [],
          },
          galleryUrl: [],
          galleryDescription: [],
          interview: {
            contents: [],
            displayed: true,
          },
          opensAt: data.opensAt ? DatetimeHelper.getDate(data.opensAt) : DatetimeHelper.getDate(new Date()),
          expiresAt: data.expiresAt
            ? DatetimeHelper.getDate(data.expiresAt)
            : DatetimeHelper.getDate(new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000)),
          productCode: "",
        };
        console.log(job);
        const res = await api.post(ApiConst.organizationsEndpoints.createOrganizationJobs, JSON.stringify(job));
        if (res.status === ApiConst.status.ok) {
          return true;
        } else {
          return false;
        }
      } catch (error) {
        console.log(error);
      }
    };

    public fetchUpdateJob = async (id: string, data: JobModel) => {
      try {
        const job = {
          mainImageUrl: data.mainImageUrl || "",
          mainImageDescription: data.title || "Main image",
          title: data.title || "",
          jobTitleCatchPhrase: data.jobTitleCatchPhrase || "",
          locationId: data.location.id || 1,
          salary: {
            daily: 0,
            dailyText: "daily",
            hourly: 0,
            hourlyText: "hourly",
            monthly: data.salary || 0,
            monthlyText: "monthly",
            type: 0,
          },
          workingHours: data.workingHours
            ? data.workingHours.map((value: any) => {
                return {
                  start_time: value.startTime,
                  end_time: value.endTime,
                  hours: value.countHours,
                  is_full_time: value.isFullTime,
                };
              })
            : [],
          searchLabelIds: data.searchLabels
            ? data.searchLabels.map((value: SearchLabelModel) => {
                return value.id;
              })
            : [],
          webApplicationUrl: data.webApplication || "",
          catchText: data.catchText || "",
          leadText: data.leadText || "",
          subImageUrl: data.subImages || [],
          subImageDescriptions: [],
          properties: data.properties
            ? data.properties.map((value: any) => {
                return {
                  title: value.title,
                  body: value.body,
                  is_displayed: true,
                  sort_order: 0,
                };
              })
            : [],
          postScripts: data.postScripts
            ? data.postScripts.map((value: any) => {
                return value.body;
              })
            : [],
          companySurvey: {
            contents: [],
            displayed: true,
          },
          barometer: {
            contents: [],
            displayed: true,
            stats: [],
          },
          galleryUrl: [],
          galleryDescription: [],
          interview: {
            contents: [],
            displayed: true,
          },
          opensAt: data.opensAt ? DatetimeHelper.getDate(data.opensAt) : DatetimeHelper.getDate(new Date()),
          expiresAt: data.expiresAt
            ? DatetimeHelper.getDate(data.expiresAt)
            : DatetimeHelper.getDate(new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000)),
          productCode: "",
        };
        console.log(job);
        const res = await api.put(
          ApiConst.organizationsEndpoints.updateOrganizationJobs.replace("{id}", id),
          JSON.stringify(job),
        );
        if (res.status === ApiConst.status.ok) {
          return true;
        } else {
          return false;
        }
      } catch (error) {
        console.log(error);
      }
    };

    public fetchDeleteJob = async (id: string) => {
      try {
        const res = await api.delete(ApiConst.organizationsEndpoints.deleteOrganizationJobs.replace("{id}", id));
        if (res.status === ApiConst.status.ok) {
          return true;
        } else {
          return false;
        }
      } catch (error) {
        console.log(error);
      }
    };
  },
);
