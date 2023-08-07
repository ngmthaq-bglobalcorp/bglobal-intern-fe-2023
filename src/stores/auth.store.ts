import type { Ref } from "vue";
import { BaseStore, defineClassStore } from "@/plugins/store.plugin";
import { Api } from "@/plugins/api.plugin";
import { ApiConst } from "@/const/api.const";
import { KeyConst } from "@/const/key.const";
import { StorageHelper } from "@/helpers/storage.helper";

export const api = new Api();

export const useAuthStore = defineClassStore(
  class Store extends BaseStore {
    public name: string = "auth";

    public auth: Ref<string> = this.ref("");

    public fetchSignIn = async (username: string, password: string) => {
      try {
        const res = await api.post(
          ApiConst.authEndpoints.login,
          JSON.stringify({ username: username, password: password }),
        );
        if (res.status === ApiConst.status.ok) {
          const data = await res.json();
          StorageHelper.setLocalStorage(KeyConst.localKeys.currentUser, data);
          console.log(data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    public fetchSignOut = async () => {
      try {
        const res = await api.post(ApiConst.authEndpoints.logout);
        if (res.status === ApiConst.status.ok) {
          const data = await res.json();
          StorageHelper.removeLocalStorage("currentUser");
          console.log(data);
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
          StorageHelper.setLocalStorage("currentUser", data);
          window.location.assign("/admin");
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
          StorageHelper.setLocalStorage("currentUser", data);
          window.location.assign("/");
        }
      } catch (error) {
        console.log(error);
      }
    };
  },
);
