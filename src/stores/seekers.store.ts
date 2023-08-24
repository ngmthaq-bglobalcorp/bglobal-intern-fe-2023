import type { Ref } from "vue";
import { BaseStore, defineClassStore } from "@/plugins/store.plugin";
import { Api } from "@/plugins/api.plugin";
import { ApiConst } from "@/const/api.const";
import { AppConst } from "@/const/app.const";
import { ModelHelper } from "@/helpers/model.helper";
import { ValidateHelper } from "@/helpers/validate.helper";
import { SeekerModel } from "@/models/seeker.model";
import { JobModel } from "@/models/job.model";

export const api = new Api();

export const useSeekersStore = defineClassStore(
  class Store extends BaseStore {
    public name: string = "seekers";

    public profile: Ref<SeekerModel> = this.ref(new SeekerModel({}));
    public jobs: Ref<Array<JobModel>> = this.ref([]);
    public job: Ref<JobModel> = this.ref(new JobModel({}));
    public totalJobs: Ref<number> = this.ref(0);
    public totalJobsWithCondition: Ref<number> = this.ref(0);
    public listLikeJobs: Ref<Array<JobModel>> = this.ref([]);
    public listHistoryJobs: Ref<Array<JobModel>> = this.ref([]);

    public fetchProfile = async () => {
      try {
        const res = await api.get(ApiConst.seekersEndpoints.getSeekerProfile);
        if (res.status === ApiConst.status.ok) {
          const data: any = await res.json();
          this.profile.value = ModelHelper.getSeekerModel(data);
          return true;
        }
        return false;
      } catch (error) {
        console.log(error);
        return false;
      }
    };

    public fetchUpdateProfile = async (data: SeekerModel) => {
      try {
        const profile = {
          name: data.name ? data.name : this.profile.value.name,
          phone_number: data.phoneNumber ? data.phoneNumber : this.profile.value.phoneNumber,
          profileImageUrl: data.avatar ? data.avatar : this.profile.value.avatar,
          dob: data.birthday ? data.birthday : this.profile.value.birthday,
          address: data.address ? data.address : this.profile.value.address,
          website: data.website ? data.website : this.profile.value.website,
          education: data.education ? data.education : this.profile.value.education,
          experience: data.experience ? data.experience : this.profile.value.experience,
          skills: data.skills ? data.skills : this.profile.value.skills,
          achievements: data.achievements ? data.achievements : this.profile.value.achievements,
          other_details: data.otherDetails ? data.otherDetails : this.profile.value.otherDetails,
        };
        const res = await api.post(ApiConst.seekersEndpoints.updateSeekerProfile, profile);
        if (res.status === ApiConst.status.ok) {
          return true;
        }
        return false;
      } catch (error) {
        console.log(error);
        return false;
      }
    };

    public fetchTotalJobs = async () => {
      try {
        const res = await api.get(ApiConst.seekersEndpoints.getAllSeekerJobs, { only_meta: "true" });
        if (res.status === ApiConst.status.ok) {
          const data: any = await res.json();
          this.totalJobs.value = parseInt(data.allResult);
          return true;
        }
        return false;
      } catch (error) {
        console.log(error);
        return false;
      }
    };

    public fetchTotalJobsWithCondition = async (data: any) => {
      try {
        const params = [];
        params.push(["only_meta", "true"]);
        params.push(["advanceSearch", "true"]);
        if (data.startAtPagination >= 0) {
          params.push(["startAtPagination", data.startAtPagination]);
        }
        if (data.endAtPagination >= 0) {
          params.push(["endAtPagination", data.endAtPagination]);
        }
        if (data.startTime != AppConst.DEFAULT.time) {
          params.push(["startTime", data.startTime]);
        }
        if (data.endTime != AppConst.DEFAULT.time) {
          params.push(["endTime", data.endTime]);
        }
        if (data.firstLocation != AppConst.DEFAULT.location) {
          params.push(["location1", data.firstLocation]);
        }
        if (data.secondLocation != AppConst.DEFAULT.location) {
          params.push(["location2", data.secondLocation]);
        }
        if (data.thirdLocation != AppConst.DEFAULT.location) {
          params.push(["location3", data.thirdLocation]);
        }
        data.searchLabelsArray.map((value: any) => {
          params.push(["tagId", value]);
        });
        const res = await api.get(ApiConst.seekersEndpoints.getAllSeekerJobs, params);
        if (res.status === ApiConst.status.ok) {
          const data: any = await res.json();
          this.totalJobs.value = parseInt(data.allResult);
          this.totalJobsWithCondition.value = parseInt(data.searchResult);
          return true;
        }
        return false;
      } catch (error) {
        console.log(error);
        return false;
      }
    };

    public fetchAllJobs = async (data: any) => {
      try {
        const params = [];
        params.push(["only_meta", "false"]);
        params.push(["advanceSearch", "true"]);
        if (data.startAtPagination >= 0) {
          params.push(["startAtPagination", data.startAtPagination]);
        }
        if (data.endAtPagination >= 0) {
          params.push(["endAtPagination", data.endAtPagination]);
        }
        if (data.startTime != AppConst.DEFAULT.time) {
          params.push(["startTime", data.startTime]);
        }
        if (data.endTime != AppConst.DEFAULT.time) {
          params.push(["endTime", data.endTime]);
        }
        if (data.firstLocation != AppConst.DEFAULT.location) {
          params.push(["location1", data.firstLocation]);
        }
        if (data.secondLocation != AppConst.DEFAULT.location) {
          params.push(["location2", data.secondLocation]);
        }
        if (data.thirdLocation != AppConst.DEFAULT.location) {
          params.push(["location3", data.thirdLocation]);
        }
        data.searchLabelsArray.map((value: any) => {
          params.push(["tagId", value]);
        });
        const res = await api.get(ApiConst.seekersEndpoints.getAllSeekerJobs, params);
        if (res.status === ApiConst.status.ok) {
          const data: any[] = await res.json();
          this.jobs.value = data.map((data) => ModelHelper.getJobModel(data));
          // this.jobs.value = [];
          // data.forEach((data) => {
          //   if (!ValidateHelper.isExpired(new Date(data.opensAt), new Date(data.expiresAt))) {
          //     this.jobs.value.push(ModelHelper.getJobModel(data));
          //   }
          // });
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
        const res = await api.get(ApiConst.commonEndpoints.findJobById.replace(":id", id));
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

    public fetchInteractWithJob = async (id: string, interactionType: string) => {
      try {
        const res = await api.post(
          ApiConst.seekersEndpoints.seekerInteractWithJobs.replace(":id", id) + "?interactionType=" + interactionType,
        );
        if (res.status === ApiConst.status.ok) {
          return true;
        }
        return false;
      } catch (error) {
        console.log(error);
        return false;
      }
    };

    public fetchSeekerHistory = async () => {
      try {
        const res = await api.get(ApiConst.seekersEndpoints.getSeekerHistory);
        if (res.status === ApiConst.status.ok) {
          const data: any[] = await res.json();
          this.listLikeJobs.value = [];
          this.listHistoryJobs.value = [];
          data.forEach((value: any) => {
            if (value.interactionType === AppConst.INTERACTION_TYPE.like) {
              this.listLikeJobs.value.push(ModelHelper.getJobModel(value.job));
            }
            this.listHistoryJobs.value.push(ModelHelper.getJobModel(value.job));
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
