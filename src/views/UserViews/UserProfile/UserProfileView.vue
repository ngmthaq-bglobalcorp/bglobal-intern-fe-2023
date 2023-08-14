<template>
  <UserLayout>
    <div class="update-profile-container">
      <!-- Content -->
      <div class="profile-content">
        <ProfileHeader :profile="app.profile.value" :isUpdate="true" :editable="true" />
        <Profile
          :profile="app.profile.value"
          @on-update-infomation="app.onUpdateInfomation"
          @on-update-email="app.onUpdateEmail"
          @on-update-password="app.onUpdatePassword"
          @on-update-language="app.onUpdateLanguage"
          @on-toggle-delete-account="app.onToggleDeleteAccount"
        />
      </div>
      <!-- End Content -->
    </div>
  </UserLayout>
</template>

<script setup lang="ts">
import { BaseComponent, defineClassComponent } from "@/plugins/component.plugin";
import UserLayout from "@/layouts/UserLayout/UserLayout.vue";
import ProfileHeader from "@/components/AdminComponents/ProfileHeader/ProfileHeaderComponent.vue";
import Profile from "@/components/UserComponents/Profile/ProfileComponent.vue";
import { PathConst } from "@/const/path.const";
import { SeekerModel } from "@/models/seeker.model";
import { useAuthStore } from "@/stores/auth.store";
import { useSeekersStore } from "@/stores/seekers.store";
import type { Ref } from "vue";

const app = defineClassComponent(
  class Component extends BaseComponent {
    public authStore = useAuthStore();
    public seekersStore = useSeekersStore();
    public profile: Ref<SeekerModel> = this.computed(() => this.seekersStore.profile);

    public constructor() {
      super();

      this.onBeforeMount(async () => {
        this.commonStore.setIsLoading(true);
        await this.seekersStore.fetchProfile();
        this.commonStore.setIsLoading(false);
      });
    }

    public onToggleButton = () => {
      this.router.push(PathConst.userProfile);
    };

    public onUpdateInfomation = async (data: any) => {
      const seeker = new SeekerModel(data);
      this.commonStore.setIsLoading(true);
      const isSuccess = await this.seekersStore.fetchUpdateProfile(seeker);
      this.commonStore.setIsLoading(false);
      if (isSuccess) {
        console.log("Update profile");
      }
    };

    public onUpdateEmail = async (email: string) => {
      this.commonStore.setIsLoading(true);
      const isSuccess = await this.authStore.fetchUpdateEmail(email);
      if (isSuccess) {
        this.seekersStore.profile.email = email;
      }
      this.commonStore.setIsLoading(false);
    };

    public onUpdatePassword = async (data: any) => {
      this.commonStore.setIsLoading(true);
      const isSuccess = await this.authStore.fetchUpdatePassword(data);
      if (isSuccess) {
        console.log("Update password");
      }
      this.commonStore.setIsLoading(false);
    };

    public onUpdateLanguage = (language: string) => {
      this.i18n.locale.value = language;
    };

    public onToggleDeleteAccount = () => {
      console.log("delete");
    };
  },
);
</script>

<style scoped lang="scss">
@import "@/assets/scss/modules";
@import "@/assets/scss/admin";

.update-profile-container {
  & .profile-content {
    padding: 1.5rem 1.5rem 0;
  }
}
</style>
