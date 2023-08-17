import type { Ref } from "vue";
import type { SeekerModel } from "@/models/seeker.model";
import { BaseStore, defineClassStore } from "@/plugins/store.plugin";
import { Api } from "@/plugins/api.plugin";
import { EventBus } from "@/plugins/bus.plugin";
import { ApiConst } from "@/const/api.const";
import { AppConst } from "@/const/app.const";
import { ModelHelper } from "@/helpers/model.helper";
import { LocationModel } from "@/models/location.model";
import { SearchLabelModel } from "@/models/searchLabel.model";
import { OrganizationModel } from "@/models/organization.model";

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
          this.locations.value = data.map((data) => {
            const location = {
              id: data.id,
              name: data.city,
            };
            return new LocationModel(location);
          });
          return true;
        }
        return false;
      } catch (error) {
        console.log(error);
        return false;
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
          this.searchLabels.value = data.map((data) => {
            const label = {
              id: data.id,
              name: data.name,
              isEnabled: data.isEnabled,
            };
            return new SearchLabelModel(label);
          });
          return true;
        }
        return false;
      } catch (error) {
        console.log(error);
        return false;
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
        }
        return "";
      } catch (error) {
        console.log(error);
        return "";
      }
    };

    public fetchUploadMultipleImages = async (images: any) => {
      try {
        const res = await api.post(ApiConst.commonEndpoints.uploadMultipleImages, images);
        if (res.status === ApiConst.status.ok) {
          const data: any[] = await res.json();
          console.log(data);
          return data;
        }
        return "";
      } catch (error) {
        console.log(error);
        return "";
      }
    };

    public fetchUserProfileById = async (id: string) => {
      try {
        const res = await api.get(ApiConst.commonEndpoints.getUserProfileById.replace(":id", id));
        if (res.status === ApiConst.status.ok) {
          const data: any = await res.json();
          if (data.user.role === AppConst.ROLE.organization) {
            this.profile.value = ModelHelper.getOrganizationModel(data);
            return true;
          } else if (data.user.role === AppConst.ROLE.seeker) {
            this.profile.value = ModelHelper.getSeekerModel(data);
            return true;
          }
        }
        return false;
      } catch (error) {
        console.log(error);
        return false;
      }
    };
  },
);
