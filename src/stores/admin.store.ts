import type { Ref } from "vue";
import type { OrganizationModel } from "@/models/organization.model";
import type { SeekerModel } from "@/models/seeker.model";
import { BaseStore, defineClassStore } from "@/plugins/store.plugin";
import { Api } from "@/plugins/api.plugin";
import { ApiConst } from "@/const/api.const";
import { DatetimeHelper } from "@/helpers/datetime.helper";
import { ModelHelper } from "@/helpers/model.helper";
import { NewsModel } from "@/models/news.model";

export const api = new Api();

export const useAdminStore = defineClassStore(
  class Store extends BaseStore {
    public name: string = "admin";

    public newsList: Ref<Array<NewsModel>> = this.ref([]);
    public news: Ref<NewsModel> = this.ref(new NewsModel({}));
    public seekers: Ref<Array<SeekerModel>> = this.ref([]);
    public organizations: Ref<Array<OrganizationModel>> = this.ref([]);

    public fetchAllSeekers = async () => {
      try {
        const res = await api.get(ApiConst.adminEndpoints.getAllSeekers);
        if (res.status === ApiConst.status.ok) {
          const data: any[] = await res.json();
          const seekers = data.map((data) => {
            return ModelHelper.getSeekerModel(data);
          });
          this.seekers.value = seekers;
          return true;
        }
        return false;
      } catch (error) {
        console.log(error);
        return false;
      }
    };

    public fetchDeleteSeekers = async (id: string) => {
      try {
        const res = await api.delete(ApiConst.adminEndpoints.deleteSeeker.replace(":id", id));
        if (res.status === ApiConst.status.ok) {
          return true;
        }
        return false;
      } catch (error) {
        console.log(error);
        return false;
      }
    };

    public fetchAllOrganizations = async () => {
      try {
        const res = await api.get(ApiConst.adminEndpoints.getAllOrganizations);
        if (res.status === ApiConst.status.ok) {
          const data: any[] = await res.json();
          this.organizations.value = data.map((data) => {
            return ModelHelper.getOrganizationModel(data);
          });
          return true;
        }
        return false;
      } catch (error) {
        console.log(error);
        return false;
      }
    };

    public fetchDeleteOrganizations = async (id: string) => {
      try {
        const res = await api.delete(ApiConst.adminEndpoints.deleteOrganization.replace(":id", id));
        if (res.status === ApiConst.status.ok) {
          return true;
        }
        return false;
      } catch (error) {
        console.log(error);
        return false;
      }
    };

    public fetchChangeUserStatus = async (id: string, status: string) => {
      try {
        const res = await api.post(ApiConst.adminEndpoints.changeUserStatus.replace(":id", id), status);
        if (res.status === ApiConst.status.ok) {
          return true;
        }
        return false;
      } catch (error) {
        console.log(error);
        return false;
      }
    };

    public fetchAllNews = async () => {
      try {
        const res = await api.get(ApiConst.commonEndpoints.getAllNews);
        if (res.status === ApiConst.status.ok) {
          const data: any[] = await res.json();
          const news = data.map((data) => {
            const news = {
              id: data.id,
              title: data.title,
              subtitle: data.subTitle,
              category: data.category,
              body: data.body,
              eventPageUrl: data.eventPageUrl,
              eventStartAt: data.eventStartAt,
              eventEndAt: data.eventEndAt,
              opensAt: data.opensAt,
              expiresAt: data.expiresAt,
              updatedAt: data.updatedAt,
              createdAt: data.createdAt,
            };
            return new NewsModel(news);
          });
          this.newsList.value = news;
          return true;
        }
        return false;
      } catch (error) {
        console.log(error);
        return false;
      }
    };

    public fetchFindNewsById = async (id: string) => {
      try {
        const res = await api.get(ApiConst.adminEndpoints.findNewsById.replace(":id", id));
        if (res.status === ApiConst.status.ok) {
          const data: any = await res.json();
          const news = {
            id: data.id,
            title: data.title,
            subtitle: data.subTitle,
            category: data.category,
            body: data.body,
            eventPageUrl: data.eventPageUrl,
            eventStartAt: data.eventStartAt,
            eventEndAt: data.eventEndAt,
            opensAt: data.opensAt,
            expiresAt: data.expiresAt,
            updatedAt: data.updatedAt,
            createdAt: data.createdAt,
          };
          this.news.value = new NewsModel(news);
          return true;
        }
        return false;
      } catch (error) {
        console.log(error);
        return false;
      }
    };

    public fetchCreateNews = async (data: NewsModel) => {
      try {
        const news = {
          title: data.title,
          subTitle: data.subtitle,
          category: data.category,
          body: data.body,
          eventPageUrl: data.eventPageUrl,
          eventStartAt: DatetimeHelper.getDateTime(data.eventStartAt),
          eventEndAt: DatetimeHelper.getDateTime(data.eventEndAt),
          opensAt: DatetimeHelper.getDateTime(data.opensAt),
          expiresAt: DatetimeHelper.getDateTime(data.expiresAt),
        };
        const res = await api.post(ApiConst.adminEndpoints.createNews, news);
        if (res.status === ApiConst.status.ok) {
          return true;
        }
        return false;
      } catch (error) {
        console.log(error);
        return false;
      }
    };

    public fetchUpdateNews = async (id: string, data: NewsModel) => {
      try {
        const news = {
          title: data.title,
          subTitle: data.subtitle,
          category: data.category,
          body: data.body,
          eventPageUrl: data.eventPageUrl,
          eventStartAt: DatetimeHelper.getDateTime(data.eventStartAt),
          eventEndAt: DatetimeHelper.getDateTime(data.eventEndAt),
          opensAt: DatetimeHelper.getDateTime(data.opensAt),
          expiresAt: DatetimeHelper.getDateTime(data.expiresAt),
        };
        const res = await api.put(ApiConst.adminEndpoints.deleteNews.replace(":id", id), news);
        if (res.status === ApiConst.status.ok) {
          return true;
        }
        return false;
      } catch (error) {
        console.log(error);
        return false;
      }
    };

    public fetchDeleteNews = async (id: string) => {
      try {
        const res = await api.delete(ApiConst.adminEndpoints.deleteNews.replace(":id", id));
        if (res.status === ApiConst.status.ok) {
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
