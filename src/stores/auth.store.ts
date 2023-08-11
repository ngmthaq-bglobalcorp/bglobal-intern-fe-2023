import type { Ref } from "vue";
import { BaseStore, defineClassStore } from "@/plugins/store.plugin";
import { Api } from "@/plugins/api.plugin";
import { ApiConst } from "@/const/api.const";
import { KeyConst } from "@/const/key.const";
import { PathConst } from "@/const/path.const";
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
        const res = await api.post(
          ApiConst.authEndpoints.login,
          JSON.stringify({ username: username, password: password }),
        );
        if (res.status === ApiConst.status.ok) {
          const data = await res.json();
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

    public fetchOrganizationSignUp = async (username: string, password: string) => {
      try {
        const res = await api.post(
          ApiConst.authEndpoints.organizationSignup,
          JSON.stringify({ username: username, password: password }),
        );
        if (res.status === ApiConst.status.ok) {
          const data = await res.json();
          StorageHelper.setLocalStorage(KeyConst.keys.currentUser, data);
          return true;
        } else {
          return false;
        }
      } catch (error) {
        console.log(error);
      }
    };

    public fetchSeekerSignUp = async (username: string, password: string) => {
      try {
        const res = await api.post(
          ApiConst.authEndpoints.seekerSignup,
          JSON.stringify({ username: username, password: password }),
        );
        if (res.status === ApiConst.status.ok) {
          const data = await res.json();
          StorageHelper.setLocalStorage(KeyConst.keys.currentUser, data);
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
