import type { Ref } from "vue";
import { BaseStore, defineClassStore } from "@/plugins/store.plugin";
import { Api } from "@/plugins/api.plugin";
import { ApiConst } from "@/const/api.const";
import { AppConst } from "@/const/app.const";
import { KeyConst } from "@/const/key.const";
import { PathConst } from "@/const/path.const";
import { ModelHelper } from "@/helpers/model.helper";
import { StorageHelper } from "@/helpers/storage.helper";
import { UserModel } from "@/models/user.model";
import type { SeekerModel } from "@/models/seeker.model";
import type { OrganizationModel } from "@/models/organization.model";

export const api = new Api();

export const useAuthStore = defineClassStore(
  class Store extends BaseStore {
    public name: string = "auth";

    public token: Ref<string> = this.ref("");
    public user: Ref<UserModel> = this.ref(new UserModel({}));
    public profile: Ref<UserModel | SeekerModel | OrganizationModel> = this.ref(new UserModel({}));

    public getAdminUser = async () => {
      if (this.user.value.id < 0) {
        const data: any = StorageHelper.getLocalStorage(KeyConst.keys.currentUser);
        if (data) {
          this.user.value = new UserModel(data.user);
          this.profile.value = await this.fetchUserProfileById(this.user.value.id.toString());
        }
      } else {
        this.profile.value = await this.fetchUserProfileById(this.user.value.id.toString());
      }
    };

    public fetchUserProfileById = async (id: string) => {
      try {
        const res = await api.get(ApiConst.commonEndpoints.getUserProfileById.replace(":id", id));
        if (res.status === ApiConst.status.ok) {
          const data: any = await res.json();
          if (data.role === AppConst.ROLE.admin) {
            const user = {
              id: data.id,
              name: data.name || data.username,
              username: data.username,
              avatar: data.avatar,
              email: data.email,
              role: data.role,
            };
            return new UserModel(user);
          } else if (data.user.role === AppConst.ROLE.organization) {
            return ModelHelper.getOrganizationModel(data);
          } else if (data.user.role === AppConst.ROLE.seeker) {
            return ModelHelper.getSeekerModel(data);
          }
        }
        return new UserModel({});
      } catch (error) {
        console.log(error);
        return new UserModel({});
      }
    };

    public fetchAdminSignIn = async (username: string, password: string, remember: boolean = true) => {
      try {
        const res = await api.post(ApiConst.authEndpoints.login, { username: username, password: password });
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
          this.token.value = data.token;
          this.user.value = new UserModel(user);
          const currentUser = {
            token: this.token.value,
            user: this.user.value,
          };
          if (remember) {
            // StorageHelper.setLocalStorage(KeyConst.keys.token, token);
            StorageHelper.setLocalStorage(KeyConst.keys.currentUser, currentUser);
          } else {
            // StorageHelper.setSessionStorage(KeyConst.keys.token, token);
            StorageHelper.setSessionStorage(KeyConst.keys.currentUser, currentUser);
          }
          return true;
        }
        return false;
      } catch (error) {
        console.log(error);
        return false;
      }
    };

    public fetchAdminSignOut = async () => {
      try {
        StorageHelper.removeLocalStorage(KeyConst.keys.token);
        StorageHelper.removeLocalStorage(KeyConst.keys.currentUser);
        if (window.location.href.includes("/admin")) {
          window.location.href = PathConst.adminSignin.path;
        } else {
          window.location.href = PathConst.userSignin.path;
        }
        const res = await api.post(ApiConst.authEndpoints.logout);
        if (res.status === ApiConst.status.ok) {
          this.user.value = new UserModel({});
          return true;
        }
        return false;
      } catch (error) {
        console.log(error);
        return false;
      }
    };

    public fetchOrganizationSignUp = async (data: any) => {
      try {
        const organization = {
          username: data.username,
          password: data.password,
          name: data.name,
          email: data.email,
          phone_number: data.phoneNumber,
          address: data.address,
          website: data.website,
          introduction: data.introduction,
          organizationType: data.organizationType || AppConst.ORGANIZATION_TYPE.typeB,
        };
        const res = await api.post(ApiConst.authEndpoints.organizationSignup, organization);
        if (res.status === ApiConst.status.ok) {
          const isSuccess = await this.fetchAdminSignIn(organization.username, organization.password);
          if (isSuccess) {
            return "login success";
          } else {
            return "login fail";
          }
        } else if (res.status === ApiConst.status.badRequest) {
          const data = await res.text();
          return data;
        } else {
          return "register fail";
        }
      } catch (error) {
        console.log(error);
        return "fail";
      }
    };

    public fetchSeekerSignUp = async (data: any) => {
      try {
        const seeker = {
          username: data.username,
          password: data.password,
        };
        const res = await api.post(ApiConst.authEndpoints.seekerSignup, seeker);
        if (res.status === ApiConst.status.ok) {
          const data = await res.json();
          console.log(data);
          const isSuccess = await this.fetchAdminSignIn(seeker.username, seeker.password);
          if (isSuccess) {
            return "login success";
          } else {
            return "login fail";
          }
        } else if (res.status === ApiConst.status.badRequest) {
          const data = await res.text();
          return data;
        } else {
          return "register fail";
        }
      } catch (error) {
        console.log(error);
        return "fail";
      }
    };

    public fetchUpdateEmail = async (email: string) => {
      try {
        const res = await api.put(ApiConst.authEndpoints.changeEmail, email);
        if (res.status === ApiConst.status.ok) {
          return true;
        }
        res.text();
        return false;
      } catch (error) {
        console.log(error);
        return false;
      }
    };

    public fetchUpdatePassword = async (data: any) => {
      try {
        const passwordObj = {
          oldPassword: data.currentPassword,
          newPassword: data.newPassword,
        };
        const res = await api.post(ApiConst.authEndpoints.changePassword, passwordObj);
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
