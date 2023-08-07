import type { Ref } from "vue";
import { BaseStore, defineClassStore } from "@/plugins/store.plugin";
import { Api } from "@/plugins/api.plugin";
import { ApiConst } from "@/const/api.const";
import { KeyConst } from "@/const/key.const";
import { PathConst } from "@/const/path.const";
import { StorageHelper } from "@/helpers/storage.helper";

export const api = new Api();

export const useAuthStore = defineClassStore(
  class Store extends BaseStore {
    public name: string = "auth";

    public user: Ref<any> = this.ref();

    public fetchAdminUser = () => {
      const data: any = StorageHelper.getLocalStorage(KeyConst.keys.currentUser);
      if (data) {
        this.user.value = data;
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
          this.user.value = data;
          if (remember) {
            StorageHelper.setLocalStorage(KeyConst.keys.currentUser, data);
          } else {
            StorageHelper.setSessionStorage(KeyConst.keys.currentUser, data);
          }
          window.location.assign(PathConst.adminDashboard.path);
          return true;
        } else {
          return false;
        }
      } catch (error) {
        console.log(error);
      }
    };

    public fetchSignOut = async () => {
      try {
        const res = await api.post(ApiConst.authEndpoints.logout);
        if (res.status === ApiConst.status.ok) {
          this.user.value = null;
          StorageHelper.removeLocalStorage(KeyConst.keys.currentUser);
          window.location.replace(PathConst.adminSignin.path);
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
          window.location.assign(PathConst.adminDashboard.path);
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
          window.location.assign("/");
        }
      } catch (error) {
        console.log(error);
      }
    };
  },
);
