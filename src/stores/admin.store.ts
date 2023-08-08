import type { Ref } from "vue";
import { BaseStore, defineClassStore } from "@/plugins/store.plugin";
import { Api } from "@/plugins/api.plugin";
import { ApiConst } from "@/const/api.const";
import { SeekerModel } from "@/models/seeker.model";
import { OrganizationModel } from "@/models/organization.model";
import { NewsModel } from "@/models/news.model";

export const api = new Api();

export const useAdminStore = defineClassStore(
  class Store extends BaseStore {
    public name: string = "admin";

    public news: Ref<Array<NewsModel>> = this.ref([]);
    public seekers: Ref<Array<SeekerModel>> = this.ref([]);
    public organizations: Ref<Array<OrganizationModel>> = this.ref([]);

    public fetchAllSeekers = async () => {
      try {
        const res = await api.get(ApiConst.adminEndpoints.getAllSeekers);
        if (res.status === ApiConst.status.ok) {
          const data: any[] = await res.json();
          console.log(data);
          const seekers = data.map((data) => {
            const seeker = {
              id: data.id,
              userId: data.user.id,
              username: data.user.username,
              name: data.name,
              email: data.email,
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
            return new SeekerModel(seeker);
          });
          this.seekers.value = seekers;
          console.log(this.seekers.value);
        }
      } catch (error) {
        console.log(error);
      }
    };

    public fetchDeleteSeekers = async (id: string) => {
      try {
        const res = await api.delete(ApiConst.adminEndpoints.deleteSeeker.replace("{id}", id));
        if (res.status === ApiConst.status.ok) {
          const data = await res.json();
          console.log(data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    public fetchAllOrganizations = async () => {
      try {
        const res = await api.get(ApiConst.adminEndpoints.getAllOrganizations);
        if (res.status === ApiConst.status.ok) {
          const data: any[] = await res.json();
          console.log(data);
          const organizations = data.map((data) => {
            const organization = {
              id: data.id,
              userId: data.user.id,
              username: data.user.username,
              name: data.name,
              email: data.email,
              phoneNumber: data.phoneNumber,
              avatar: data.photo,
              website: data.website,
              address: data.address,
              introduction: data.introduction,
              organizationType: data.organizationType,
              status: data.user.status,
            };
            return new OrganizationModel(organization);
          });
          this.organizations.value = organizations;
          console.log(this.organizations.value);
        }
      } catch (error) {
        console.log(error);
      }
    };

    public fetchDeleteOrganizations = async (id: string) => {
      try {
        const res = await api.delete(ApiConst.adminEndpoints.deleteOrganization.replace("{id}", id));
        if (res.status === ApiConst.status.ok) {
          const data = await res.json();
          console.log(data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    public fetchChangeUserStatus = async (id: string, status: string) => {
      try {
        const res = await api.post(
          ApiConst.adminEndpoints.changeUserStatus.replace("{id}", id),
          JSON.stringify({ status: status }),
        );
        if (res.status === ApiConst.status.ok) {
          const data = await res.json();
          console.log(data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    public fetchAllNews = async () => {
      try {
        const res = await api.get(ApiConst.commonEndpoints.getAllNews);
        if (res.status === ApiConst.status.ok) {
          const data: any[] = await res.json();
          console.log(data);
          const news = data.map((data) => {
            const news = {
              id: data.id,
              title: data.title,
              subTitle: data.user.subTitle,
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
          this.news.value = news;
          console.log(this.news.value);
        }
      } catch (error) {
        console.log(error);
      }
    };

    public fetchFindNewsById = async (id: string) => {
      try {
        const res = await api.get(ApiConst.adminEndpoints.findNewsById.replace("{id}", id));
        if (res.status === ApiConst.status.ok) {
          const data: any[] = await res.json();
          console.log(data);
          const news = data.map((data) => {
            const news = {
              id: data.id,
              title: data.title,
              subTitle: data.user.subTitle,
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
          this.news.value = news;
          console.log(this.news.value);
        }
      } catch (error) {
        console.log(error);
      }
    };

    public fetchCreateNews = async (news: NewsModel) => {
      try {
        const res = await api.post(ApiConst.adminEndpoints.createNews, JSON.stringify(news));
        if (res.status === ApiConst.status.ok) {
          const data = await res.json();
          console.log(data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    public fetchUpdateNews = async (id: string, news: NewsModel) => {
      try {
        const res = await api.put(ApiConst.adminEndpoints.deleteNews.replace("{id}", id), JSON.stringify(news));
        if (res.status === ApiConst.status.ok) {
          const data = await res.json();
          console.log(data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    public fetchDeleteNews = async (id: string) => {
      try {
        const res = await api.delete(ApiConst.adminEndpoints.deleteNews.replace("{id}", id));
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
