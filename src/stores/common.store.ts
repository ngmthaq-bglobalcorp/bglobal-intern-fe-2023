import type { Ref } from "vue";
import { BaseStore, defineClassStore } from "@/plugins/store.plugin";
import { Api } from "@/plugins/api.plugin";
import { EventBus } from "@/plugins/bus.plugin";
import { ApiConst } from "@/const/api.const";
import { LocationModel } from "@/models/location.model";
import { SearchLabelModel } from "@/models/searchLabel.model";
import { AppConst } from "@/const/app.const";
import { OrganizationModel } from "@/models/organization.model";
import { SeekerModel } from "@/models/seeker.model";

export const api = new Api();

export const eventBus = new EventBus({
  onError: (error: any) => {
    console.error("Event Bus got error", error);
  },
});

export const useCommonStore = defineClassStore(
  class Store extends BaseStore {
    public name: string = "common";

    public isLoading: Ref<boolean> = this.ref(false);
    public eventBus: Ref<EventBus> = this.ref(eventBus);

    public locations: Ref<Array<LocationModel>> = this.ref([]);
    public searchLabels: Ref<Array<SearchLabelModel>> = this.ref([]);
    public profile: Ref<SeekerModel | OrganizationModel> = this.ref(new OrganizationModel({}));

    public setIsLoading = (bool: boolean) => {
      this.isLoading.value = bool;
    };

    public fetchAllLocations = async () => {
      try {
        const res = await api.get(ApiConst.commonEndpoints.getAllLocations);
        if (res.status === ApiConst.status.ok) {
          const data: any[] = await res.json();
          const locations = data.map((data) => {
            const location = {
              id: data.id,
              name: data.city,
            };
            return new LocationModel(location);
          });
          this.locations.value = locations;
          return true;
        } else {
          return false;
        }
      } catch (error) {
        console.log(error);
      }
    };

    public getLocationById = (id: number) => {
      return this.locations.value.find((value) => value.id === id);
    };

    public fetchAllSearchLabels = async () => {
      try {
        const res = await api.get(ApiConst.commonEndpoints.getAllSearchLabel);
        if (res.status === ApiConst.status.ok) {
          const data: any[] = await res.json();
          const searchLabels = data.map((data) => {
            const label = {
              id: data.id,
              name: data.name,
              isEnabled: data.isEnabled,
            };
            return new SearchLabelModel(label);
          });
          this.searchLabels.value = searchLabels;
          return true;
        } else {
          return false;
        }
      } catch (error) {
        console.log(error);
      }
    };

    public getSearchLabelById = (id: number) => {
      return this.searchLabels.value.find((value) => value.id === id);
    };

    public fetchUploadImage = async (image: any) => {
      try {
        const formData = new FormData();
        formData.append("image", image);
        const res = await api.post(ApiConst.commonEndpoints.uploadImage, formData);
        if (res.status === ApiConst.status.ok) {
          const data: string = await res.text();
          console.log(data);
          return data;
        } else {
          return null;
        }
      } catch (error) {
        console.log(error);
      }
    };

    public fetchUploadMultipleImages = async (images: any) => {
      try {
        const res = await api.post(ApiConst.commonEndpoints.uploadMultipleImages, images);
        if (res.status === ApiConst.status.ok) {
          const data: any = await res.json();
          console.log(data);
          return true;
        } else {
          return false;
        }
      } catch (error) {
        console.log(error);
      }
    };

    public fetchUserProfileById = async (id: string) => {
      try {
        const res = await api.get(ApiConst.commonEndpoints.getUserProfileById.replace(":id", id));
        if (res.status === ApiConst.status.ok) {
          const data: any = await res.json();
          console.log(data);
          if (data.user.role === AppConst.ROLE.organization) {
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
          } else if (data.user.role === AppConst.ROLE.seeker) {
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
          } else {
            return false;
          }
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
