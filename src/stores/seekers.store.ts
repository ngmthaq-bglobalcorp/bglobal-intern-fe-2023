import type { Ref } from "vue";
import type { JobModel } from "@/models/job.model";
import { BaseStore, defineClassStore } from "@/plugins/store.plugin";
import { Api } from "@/plugins/api.plugin";
import { ApiConst } from "@/const/api.const";
import { SeekerModel } from "@/models/seeker.model";

export const api = new Api();

export const useSeekersStore = defineClassStore(
  class Store extends BaseStore {
    public name: string = "seekers";

    public profile: Ref<SeekerModel> = this.ref(new SeekerModel({}));
    public jobs: Ref<Array<JobModel>> = this.ref([]);

    public fetchProfile = async () => {
      try {
        const res = await api.get(ApiConst.seekersEndpoints.getSeekerProfile);
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
        const res = await api.get(ApiConst.seekersEndpoints.getAllSeekerJobs);
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
