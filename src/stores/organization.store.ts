import type { Ref } from "vue";
import { BaseStore, defineClassStore } from "@/plugins/store.plugin";
import { Api } from "@/plugins/api.plugin";
import { ApiConst } from "@/const/api.const";
import { OrganizationModel } from "@/models/organization.model";
import { JobModel } from "@/models/job.model";
import { DatetimeHelper } from "@/helpers/datetime.helper";

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
              email: data.email,
              phoneNumber: data.phoneNumber,
              avatar: data.photo,
              webside: data.webside,
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

    public fetchUpdateProfile = async (profile: any) => {
      try {
        const res = await api.put(ApiConst.organizationsEndpoints.updateOrganizationProfile, JSON.stringify(profile));
        if (res.status === ApiConst.status.ok) {
          const data: any = await res.json();
          console.log(data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    public fetchUpdateEmail = async (email: string) => {
      try {
        const res = await api.put(ApiConst.authEndpoints.changeEmail, JSON.stringify(email));
        if (res.status === ApiConst.status.ok) {
          const data: any = await res.json();
          console.log(data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    public fetchUpdatePassword = async (password: any) => {
      try {
        const res = await api.post(ApiConst.authEndpoints.changePassword, JSON.stringify(password));
        if (res.status === ApiConst.status.ok) {
          const data: any = await res.json();
          console.log(data);
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
              location: data.location.city,
              salary: data.salary.monthly,
              workingHours: data.workingHours,
              searchLabels: data.searchLabels.map((value: any) => value.name),
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
              opensAt: new Date(data.opensAt),
              expiresAt: new Date(data.expiresAt),
              updatedAt: new Date(data.updatedAt),
              createdAt: new Date(data.createdAt),
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
              location: data.location.city,
              salary: data.salary.monthly,
              workingHours: data.workingHours,
              searchLabels: data.searchLabels.map((value: any) => value.name),
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
              opensAt: new Date(data.opensAt),
              expiresAt: new Date(data.expiresAt),
              updatedAt: new Date(data.updatedAt),
              createdAt: new Date(data.createdAt),
            };
            this.job.value = new JobModel(job);
            console.log(this.job.value);
          }
        }
      } catch (error) {
        console.log(error);
      }
    };

    public fetchCreateJob = async (data: any) => {
      try {
        const job = {
          mainImageUrl: data.mainImage[0] || "",
          mainImageDescription: data.title || "Main image",
          title: data.title || "",
          jobTitleCatchPhrase: data.jobTitleCatchPhrase || "",
          location: data.location || 1,
          salary: {
            daily: 0,
            dailyText: "daily",
            hourly: 0,
            hourlyText: "hourly",
            monthly: data.salary || 0,
            monthlyText: "monthly",
            type: 0,
          },
          workingHours: data.workingHours,
          searchLabels: data.searchLabels || [],
          webApplicationUrl: data.webApplication || "",
          catchText: data.catchText || "",
          leadText: data.leadText || "",
          subImageUrl: data.subImages || [],
          subImageDescriptions: "",
          properties: data.properties || [],
          postScripts: data.postScripts || [],
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
          opensAt: DatetimeHelper.getDate(data.opensAt) || DatetimeHelper.getDate(new Date()),
          expiresAt: DatetimeHelper.getDate(data.expiresAt) || DatetimeHelper.getDate(new Date()),
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

    public fetchUpdateJob = async (id: string, job: JobModel) => {
      try {
        const res = await api.put(
          ApiConst.organizationsEndpoints.createOrganizationJobs.replace("{id}", id),
          JSON.stringify(job),
        );
        if (res.status === ApiConst.status.ok) {
          const data = await res.json();
          this.job.value = data;
          console.log(this.job.value);
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
