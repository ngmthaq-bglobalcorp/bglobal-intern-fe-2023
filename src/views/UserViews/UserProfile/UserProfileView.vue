<template>
  <UserLayout>
    <div class="update-profile-container">
      <!-- Content -->
      <div class="profile-content">
        <ProfileHeader
          :profile="app.profile.value"
          :is-update="true"
          :editable="true"
          @on-update-avatar="app.onUpdateAvatar"
        />
        <Profile
          :profile="app.profile.value"
          :message-info-update-success="app.messageInfoUpdateSuccess.value"
          :message-info-update-failed="app.messageInfoUpdateFailed.value"
          :message-email-update-success="app.messageEmailUpdateSuccess.value"
          :message-email-update-failed="app.messageEmailUpdateFailed.value"
          :message-password-update-success="app.messagePasswordUpdateSuccess.value"
          :message-password-update-failed="app.messagePasswordUpdateFailed.value"
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
import { SeekerModel } from "@/models/seeker.model";
import { useAuthStore } from "@/stores/auth.store";
import { useSeekersStore } from "@/stores/seekers.store";
import type { Ref } from "vue";

const app = defineClassComponent(
  class Component extends BaseComponent {
    public authStore = useAuthStore();
    public seekersStore = useSeekersStore();

    public messageInfoUpdateSuccess: Ref<string> = this.ref("");
    public messageInfoUpdateFailed: Ref<string> = this.ref("");
    public messageEmailUpdateSuccess: Ref<string> = this.ref("");
    public messageEmailUpdateFailed: Ref<string> = this.ref("");
    public messagePasswordUpdateSuccess: Ref<string> = this.ref("");
    public messagePasswordUpdateFailed: Ref<string> = this.ref("");

    public profile: Ref<SeekerModel> = this.computed(() => this.seekersStore.profile);

    public constructor() {
      super();

      this.onBeforeMount(async () => {
        this.commonStore.setIsLoading(true);
        await this.seekersStore.fetchProfile();
        this.commonStore.setIsLoading(false);
      });
    }

    public onUpdateAvatar = async (avatarUrl: string) => {
      const seeker = new SeekerModel(this.profile.value);
      seeker.avatar = avatarUrl;
      const isSuccess = await this.seekersStore.fetchUpdateProfile(seeker);
      if (isSuccess) {
        this.profile.value.avatar = avatarUrl;
      }
    };

    public onUpdateInfomation = async (data: any) => {
      this.messageInfoUpdateSuccess.value = "";
      this.messageInfoUpdateFailed.value = "";
      this.commonStore.setIsLoading(true);
      const seeker = new SeekerModel(data);
      const isSuccess = await this.seekersStore.fetchUpdateProfile(seeker);
      if (isSuccess) {
        await this.seekersStore.fetchProfile();
        this.messageInfoUpdateSuccess.value = this.t(`message.updateSuccess`);
      } else {
        this.messageInfoUpdateFailed.value = this.t(`message.updateFailed`);
      }
      this.commonStore.setIsLoading(false);
    };

    public onUpdateEmail = async (email: string) => {
      this.messageEmailUpdateSuccess.value = "";
      this.messageEmailUpdateFailed.value = "";
      this.commonStore.setIsLoading(true);
      const isSuccess = await this.authStore.fetchUpdateEmail(email);
      if (isSuccess) {
        this.seekersStore.profile.email = email;
        this.messageEmailUpdateSuccess.value = this.t(`message.updateSuccess`);
      } else {
        this.messageEmailUpdateFailed.value = this.t(`message.updateFailed`);
      }
      this.commonStore.setIsLoading(false);
    };

    public onUpdatePassword = async (data: any) => {
      this.messagePasswordUpdateSuccess.value = "";
      this.messagePasswordUpdateFailed.value = "";
      this.commonStore.setIsLoading(true);
      const isSuccess = await this.authStore.fetchUpdatePassword(data);
      if (isSuccess) {
        this.messagePasswordUpdateSuccess.value = this.t(`message.updateSuccess`);
      } else {
        this.messagePasswordUpdateFailed.value = this.t(`message.errorPassword`);
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
    padding: 1.5rem 0.75rem;
  }
}
</style>
