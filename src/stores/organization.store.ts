import type { Ref } from "vue";
import type { SearchLabelModel } from "@/models/searchLabel.model";
import type { SeekerModel } from "@/models/seeker.model";
import { BaseStore, defineClassStore } from "@/plugins/store.plugin";
import { Api } from "@/plugins/api.plugin";
import { ApiConst } from "@/const/api.const";
import { AppConst } from "@/const/app.const";
import { DatetimeHelper } from "@/helpers/datetime.helper";
import { ModelHelper } from "@/helpers/model.helper";
import { OrganizationModel } from "@/models/organization.model";
import { JobModel } from "@/models/job.model";

export const api = new Api();

export const useOrganizationStore = defineClassStore(
  class Store extends BaseStore {
    public name: string = "organizations";

    public profile: Ref<OrganizationModel> = this.ref(new OrganizationModel({}));
    public jobs: Ref<Array<JobModel>> = this.ref([]);
    public job: Ref<JobModel> = this.ref(new JobModel({}));
    public actionSeekers: Ref<Array<SeekerModel>> = this.ref([]);

    public fetchProfile = async () => {
      try {
        const res = await api.get(ApiConst.organizationsEndpoints.getOrganizationProfile);
        if (res.status === ApiConst.status.ok) {
          const data: any = await res.json();
          this.profile.value = ModelHelper.getOrganizationModel(data);
          return true;
        }
        return false;
      } catch (error) {
        console.log(error);
        return false;
      }
    };

    public fetchUpdateProfile = async (data: OrganizationModel) => {
      try {
        const profile = {
          name: data.name,
          phone_number: data.phoneNumber,
          website: data.website,
          address: data.address,
          introduction: data.introduction,
          organizationType: data.organizationType || AppConst.ORGANIZATION_TYPE.typeB,
        };
        const res = await api.put(ApiConst.organizationsEndpoints.updateOrganizationProfile, profile);
        if (res.status === ApiConst.status.ok) {
          return true;
        }
        return false;
      } catch (error) {
        console.log(error);
        return false;
      }
    };

    public fetchAllJobs = async () => {
      try {
        const res = await api.get(ApiConst.organizationsEndpoints.getAllOrganizationJobs);
        if (res.status === ApiConst.status.ok) {
          const data: any[] = await res.json();
          this.jobs.value = data.map((data) => {
            return ModelHelper.getJobModel(data);
          });
          return true;
        }
        return false;
      } catch (error) {
        console.log(error);
        return false;
      }
    };

    public fetchFindJobById = async (id: string) => {
      try {
        const res = await api.get(ApiConst.organizationsEndpoints.findOrganizationJobsById.replace(":id", id));
        if (res.status === ApiConst.status.ok) {
          const data: any = await res.json();
          this.job.value = ModelHelper.getJobModel(data);
          return true;
        }
        return false;
      } catch (error) {
        console.log(error);
        return false;
      }
    };

    public fetchCreateJob = async (data: JobModel) => {
      try {
        const job = {
          mainImageUrl: data.mainImageUrl,
          mainImageDescription: data.mainImageDesc,
          title: data.title,
          jobTitleCatchPhrase: data.jobTitleCatchPhrase,
          locationId: data.location.id > 0 ? data.location.id : 1,
          salary: {
            daily: 0,
            dailyText: "daily",
            hourly: 0,
            hourlyText: "hourly",
            monthly: data.salary,
            monthlyText: "monthly",
            type: 0,
          },
          workingHours: data.workingHours.map((value: any) => {
            return {
              start_time: value.startTime,
              end_time: value.endTime,
              hours: value.countHours,
              is_full_time: value.isFullTime,
            };
          }),
          searchLabelIds: data.searchLabels.map((value: SearchLabelModel) => {
            return value.id;
          }),
          webApplicationUrl: data.webApplication,
          catchText: data.catchText,
          leadText: data.leadText,
          subImageUrl: data.subImages,
          subImageDescriptions: [],
          properties: data.properties.map((value: any) => {
            return {
              title: value.title,
              body: value.body,
              is_displayed: true,
              sort_order: 0,
            };
          }),
          postScripts: data.postScripts.map((value: any) => {
            return value.body;
          }),
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
          opensAt: DatetimeHelper.getDate(data.opensAt),
          expiresAt: DatetimeHelper.getDate(data.expiresAt),
          productCode: "",
        };
        const res = await api.post(ApiConst.organizationsEndpoints.createOrganizationJobs, job);
        if (res.status === ApiConst.status.ok) {
          return true;
        }
        return false;
      } catch (error) {
        console.log(error);
        return false;
      }
    };

    public fetchUpdateJob = async (id: string, data: JobModel) => {
      try {
        const job = {
          mainImageUrl: data.mainImageUrl,
          mainImageDescription: data.mainImageDesc,
          title: data.title,
          jobTitleCatchPhrase: data.jobTitleCatchPhrase,
          locationId: data.location.id > 0 ? data.location.id : 1,
          salary: {
            daily: 0,
            dailyText: "daily",
            hourly: 0,
            hourlyText: "hourly",
            monthly: data.salary,
            monthlyText: "monthly",
            type: 0,
          },
          workingHours: data.workingHours.map((value: any) => {
            return {
              start_time: value.startTime,
              end_time: value.endTime,
              hours: value.countHours,
              is_full_time: value.isFullTime,
            };
          }),
          searchLabelIds: data.searchLabels.map((value: SearchLabelModel) => {
            return value.id;
          }),
          webApplicationUrl: data.webApplication,
          catchText: data.catchText,
          leadText: data.leadText,
          subImageUrl: data.subImages,
          subImageDescriptions: [],
          properties: data.properties.map((value: any) => {
            return {
              title: value.title,
              body: value.body,
              is_displayed: true,
              sort_order: 0,
            };
          }),
          postScripts: data.postScripts.map((value: any) => {
            return value.body;
          }),
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
          opensAt: DatetimeHelper.getDate(data.opensAt),
          expiresAt: DatetimeHelper.getDate(data.expiresAt),
          productCode: "",
        };
        const res = await api.put(ApiConst.organizationsEndpoints.updateOrganizationJobs.replace(":id", id), job);
        if (res.status === ApiConst.status.ok) {
          return true;
        }
        return false;
      } catch (error) {
        console.log(error);
        return false;
      }
    };

    public fetchDeleteJob = async (id: string) => {
      try {
        const res = await api.delete(ApiConst.organizationsEndpoints.deleteOrganizationJobs.replace(":id", id));
        if (res.status === ApiConst.status.ok) {
          return true;
        }
        return false;
      } catch (error) {
        console.log(error);
        return false;
      }
    };

    public fetchAllSeekerLikeJob = async (id: string) => {
      try {
        const res = await api.get(ApiConst.organizationsEndpoints.getAllSeekerLikeJob.replace(":id", id));
        if (res.status === ApiConst.status.ok) {
          const data: any[] = await res.json();
          this.actionSeekers.value = data.map((data) => {
            return ModelHelper.getSeekerModel(data);
          });
          return true;
        }
        return false;
      } catch (error) {
        console.log(error);
        return false;
      }
    };
  },
);
