import type { Ref } from "vue";
import type { NewsModel } from "@/models/news.model";
import { BaseStore, defineClassStore } from "@/plugins/store.plugin";
import { Api } from "@/plugins/api.plugin";
import { ApiConst } from "@/const/api.const";

export const api = new Api();

export const useAdminStore = defineClassStore(
  class Store extends BaseStore {
    public name: string = "admin";

    public news: Ref<Array<NewsModel>> = this.ref([]);

    public fetchAllNews = async () => {
      try {
        const res = await api.get(ApiConst.commonEndpoints.getAllNews);
        if (res.status === ApiConst.status.ok) {
          const data = await res.json();
          this.news.value = data;
          console.log(this.news.value);
        }
      } catch (error) {
        console.log(error);
      }
    };
  },
);
