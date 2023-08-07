import type { Ref } from "vue";
import type { JobModel } from "@/models/job.model";
import { BaseStore, defineClassStore } from "@/plugins/store.plugin";
import { Api } from "@/plugins/api.plugin";
import { ApiConst } from "@/const/api.const";
import { OrganizationModel } from "@/models/organization.model";

export const api = new Api();

export const useOrganizationStore = defineClassStore(
  class Store extends BaseStore {
    public name: string = "organizations";

    public profile: Ref<OrganizationModel> = this.ref(new OrganizationModel({}));
    public jobs: Ref<Array<JobModel>> = this.ref([]);

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

    public fetchAllNews = async () => {
      try {
        const res = await api.get(ApiConst.organizationsEndpoints.getAllOrganizationJobs);
        if (res.status === ApiConst.status.ok) {
          const data = await res.json();
          this.jobs.value = data;
          console.log(this.jobs.value);
        }
      } catch (error) {
        console.log(error);
      }
    };
  },
);
