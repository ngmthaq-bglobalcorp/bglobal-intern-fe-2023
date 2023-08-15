import type { Ref } from "vue";
import { BaseStore, defineClassStore } from "@/plugins/store.plugin";
import { Api } from "@/plugins/api.plugin";
import { ApiConst } from "@/const/api.const";
import { DatetimeHelper } from "@/helpers/datetime.helper";
import { SeekerModel } from "@/models/seeker.model";
import { JobModel } from "@/models/job.model";
import { LocationModel } from "@/models/location.model";
import { SearchLabelModel } from "@/models/searchLabel.model";

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
          const data: any = await res.json();
          console.log(data);
          const profile = {
            id: data.id,
            userId: data.user.id,
            username: data.user.username,
            name: data.name,
            email: data.user.email,
            phoneNumber: data.phoneNumber,
            avatar: data.photo,
            birthday: data.dob,
            address: data.address,
            website: data.website,
            education: data.education,
            experience: data.experience,
            skills: data.skills,
            achievements: data.achievements,
            otherDetails: data.other_details,
            status: data.user.status,
          };
          this.profile.value = new SeekerModel(profile);
          console.log(this.profile.value);
          return true;
        } else {
          return false;
        }
      } catch (error) {
        console.log(error);
      }
    };

    public fetchUpdateProfile = async (data: SeekerModel) => {
      try {
        const profile = {
          name: data.name || "",
          phone_number: data.phoneNumber || "",
          dob: data.birthday ? DatetimeHelper.getDate(data.birthday) : "",
          address: data.address || "",
          website: data.website || "",
          education: data.education || "",
          experience: data.experience || "",
          skills: data.skills || "",
          achievements: data.achievements || "",
          other_details: data.otherDetails || "",
        };
        console.log(profile);
        const res = await api.post(ApiConst.seekersEndpoints.updateSeekerProfile, profile);
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
        const res = await api.get(ApiConst.seekersEndpoints.getAllSeekerJobs);
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
