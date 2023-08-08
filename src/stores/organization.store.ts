import type { Ref } from "vue";
import { BaseStore, defineClassStore } from "@/plugins/store.plugin";
import { Api } from "@/plugins/api.plugin";
import { ApiConst } from "@/const/api.const";
import { OrganizationModel } from "@/models/organization.model";
import { JobModel } from "@/models/job.model";

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
          const data = await res.json();
          this.profile.value = data;
          console.log(this.profile.value);
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

    public fetchFindJobById = async (id: number) => {
      try {
        const res = await api.get(ApiConst.commonEndpoints.findJobById.replace("{id}", id.toString()));
        if (res.status === ApiConst.status.ok) {
          const data: any = await res.json();
          console.log(data);
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
            photoGallery: data.displayed && data.photoGallery.contents,
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
      } catch (error) {
        console.log(error);
      }
    };

    public fetchCreateJob = async (job: JobModel) => {
      try {
        const res = await api.post(ApiConst.organizationsEndpoints.createOrganizationJobs, JSON.stringify(job));
        if (res.status === ApiConst.status.ok) {
          const data = await res.json();
          this.job.value = data;
          console.log(this.job.value);
        }
      } catch (error) {
        console.log(error);
      }
    };

    public fetchUpdateJob = async (id: number, job: JobModel) => {
      try {
        const res = await api.put(
          ApiConst.organizationsEndpoints.createOrganizationJobs.replace("{id}", id.toString()),
          JSON.stringify(job),
        );
        if (res.status === ApiConst.status.ok) {
          const data = await res.json();
          this.job.value = data;
          console.log(this.job.value);
        }
      } catch (error) {
        console.log(error);
      }
    };

    public fetchDeleteJob = async (id: number) => {
      try {
        const res = await api.delete(
          ApiConst.organizationsEndpoints.deleteOrganizationJobs.replace("{id}", id.toString()),
        );
        if (res.status === ApiConst.status.ok) {
          const data = await res.json();
          console.log(data);
        }
      } catch (error) {
        console.log(error);
      }
    };
  },
);
