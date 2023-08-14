import type { Ref } from "vue";
import { BaseStore, defineClassStore } from "@/plugins/store.plugin";
import { Api } from "@/plugins/api.plugin";
import { ApiConst } from "@/const/api.const";
import { AppConst } from "@/const/app.const";
import { KeyConst } from "@/const/key.const";
import { StorageHelper } from "@/helpers/storage.helper";
import { UserModel } from "@/models/user.model";

export const api = new Api();

export const useAuthStore = defineClassStore(
  class Store extends BaseStore {
    public name: string = "auth";

    public user: Ref<UserModel> = this.ref(new UserModel({}));

    public getAdminUser = () => {
      if (this.user.value.id < 0) {
        const data: any = StorageHelper.getLocalStorage(KeyConst.keys.currentUser);
        if (data) {
          this.user.value = new UserModel(data.user);
        }
      }
    };

    public fetchAdminSignIn = async (username: string, password: string, remember: boolean = true) => {
      try {
        // const headers = new Headers();
        // headers.append("Content-Type", " application/json");
        // const res = await api.post(
        //   ApiConst.authEndpoints.login,
        //   JSON.stringify({ username: username, password: password }),
        //   { headers: headers },
        // );
        const res = await api.post(
          ApiConst.authEndpoints.login,
          JSON.stringify({ username: username, password: password }),
        );
        if (res.status === ApiConst.status.ok) {
          const data = await res.json();
          console.log(data);
          const user = {
            id: data.id,
            name: data.name || data.username,
            username: data.username,
            avatar: data.avatar,
            email: data.email,
            role: data.role[0],
          };
          this.user.value = new UserModel(user);
          const currentUser = {
            token: data.token,
            user: this.user.value,
          };
          if (remember) {
            StorageHelper.setLocalStorage(KeyConst.keys.currentUser, currentUser);
          } else {
            StorageHelper.setSessionStorage(KeyConst.keys.currentUser, currentUser);
          }
          return true;
        } else {
          return false;
        }
      } catch (error) {
        console.log(error);
      }
    };

    public fetchAdminSignOut = async () => {
      try {
        const res = await api.post(ApiConst.authEndpoints.logout);
        if (res.status === ApiConst.status.ok) {
          this.user.value = new UserModel({});
          StorageHelper.removeLocalStorage(KeyConst.keys.currentUser);
          return true;
        } else {
          return false;
        }
      } catch (error) {
        console.log(error);
      }
    };

    public fetchOrganizationSignUp = async (data: any) => {
      try {
        const organization = {
          username: data.username || "",
          password: data.password || "",
          name: data.name || "",
          email: data.email || "",
          phone_number: data.phoneNumber || "",
          address: data.address || "",
          website: data.website || "",
          introduction: data.introduction || "",
          organizationType: data.organizationType || AppConst.ORGANIZATION_TYPE.typeB,
        };
        const res = await api.post(ApiConst.authEndpoints.organizationSignup, JSON.stringify(organization));
        if (res.status === ApiConst.status.ok) {
          const data = await res.json();
          console.log(data);
          const isSuccess = await this.fetchAdminSignIn(organization.username, organization.password);
          if (isSuccess) {
            return "success";
          } else {
            return "fail";
          }
        } else if (res.status === ApiConst.status.badRequest) {
          const data = await res.text();
          return data;
        } else {
          return "fail";
        }
      } catch (error) {
        console.log(error);
      }
    };

    public fetchSeekerSignUp = async (data: any) => {
      try {
        const seeker = {
          username: data.username || "",
          password: data.password || "",
        };
        const res = await api.post(ApiConst.authEndpoints.seekerSignup, JSON.stringify(seeker));
        if (res.status === ApiConst.status.ok) {
          const data = await res.json();
          console.log(data);
          const isSuccess = await this.fetchAdminSignIn(seeker.username, seeker.password);
          if (isSuccess) {
            return "success";
          } else {
            return "fail";
          }
        } else if (res.status === ApiConst.status.badRequest) {
          const data = await res.text();
          return data;
        } else {
          return "fail";
        }
      } catch (error) {
        console.log(error);
      }
    };
  },
);
