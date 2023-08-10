import type { Ref } from "vue";
import { BaseStore, defineClassStore } from "@/plugins/store.plugin";
import { Api } from "@/plugins/api.plugin";
import { ApiConst } from "@/const/api.const";
import { LocationModel } from "@/models/location.model";
import { SearchLabelModel } from "@/models/searchLabel.model";

export const api = new Api();

export const useCommonStore = defineClassStore(
  class Store extends BaseStore {
    public name: string = "common";

    public locations: Ref<Array<LocationModel>> = this.ref([]);
    public searchLabels: Ref<Array<SearchLabelModel>> = this.ref([]);

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
          console.log(this.locations.value);
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
          console.log(this.searchLabels.value);
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
        const res = await api.post(ApiConst.commonEndpoints.uploadImage, image);
        if (res.status === ApiConst.status.ok) {
          const data: any = await res.json();
          console.log(data);
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
        }
      } catch (error) {
        console.log(error);
      }
    };
  },
);
