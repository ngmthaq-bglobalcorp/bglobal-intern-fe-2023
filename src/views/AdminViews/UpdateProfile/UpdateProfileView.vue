<template>
  <AdminLayout>
    <PageHeader
      :target="app.t(`app.settings`)"
      :button="app.t(`app.myProfile`)"
      icon="bi-person-fill"
      @on-toggle-button="app.onToggleButton"
    />
    <div class="update-profile-container">
      <!-- Navbar -->
      <div class="profile-nav">
        <!-- Navbar Nav -->
        <ul class="nav-list list custom-card">
          <li class="nav-item">
            <a class="nav-link active" href="#content" scroll="smooth">
              <i class="bi bi-person icon"></i>
              {{ app.t(`app.basicInformation`) }}
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#emailSection" scroll="smooth">
              <i class="bi bi-envelope icon"></i>
              {{ app.t(`app.email`) }}
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#passwordSection" scroll="smooth">
              <i class="bi bi-key icon"></i>
              {{ app.t(`app.password`) }}
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#preferencesSection" scroll="smooth">
              <i class="bi bi-gear icon"></i>
              {{ app.t(`app.preferences`) }}
            </a>
          </li>
          <li class="nav-item" v-if="app.isDisplayed.value">
            <a class="nav-link" href="#deleteAccountSection" scroll="smooth">
              <i class="bi bi-trash icon"></i>
              {{ app.t(`app.deleteAccount`) }}
            </a>
          </li>
        </ul>
        <!-- End Navbar Nav -->
      </div>
      <!-- End Navbar -->

      <!-- Content -->
      <div class="profile-content">
        <ProfileHeader
          :profile="app.profile.value"
          :is-update="true"
          :editable="true"
          @on-update-avatar="app.onUpdateAvatar"
        />
        <ProfileUpdate
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
  </AdminLayout>
</template>

<script setup lang="ts">
import { BaseComponent, defineClassComponent } from "@/plugins/component.plugin";
import AdminLayout from "@/layouts/AdminLayout/AdminLayout.vue";
import PageHeader from "@/components/AdminComponents/PageHeader/PageHeaderComponent.vue";
import ProfileHeader from "@/components/AdminComponents/ProfileHeader/ProfileHeaderComponent.vue";
import ProfileUpdate from "@/components/AdminComponents/ProfileUpdate/ProfileUpdateComponent.vue";
import { PathConst } from "@/const/path.const";
import { OrganizationModel } from "@/models/organization.model";
import { useAuthStore } from "@/stores/auth.store";
import { useOrganizationStore } from "@/stores/organization.store";
import type { UpdateProfileProps } from "./UpdateProfileView";
import type { Ref } from "vue";

const props = defineProps<UpdateProfileProps>();

const app = defineClassComponent(
  class Component extends BaseComponent {
    public organizationStore = useOrganizationStore();
    public authStore = useAuthStore();

    public isDisplayed: Ref<boolean> = this.ref(false);
    public messageInfoUpdateSuccess: Ref<string> = this.ref("");
    public messageInfoUpdateFailed: Ref<string> = this.ref("");
    public messageEmailUpdateSuccess: Ref<string> = this.ref("");
    public messageEmailUpdateFailed: Ref<string> = this.ref("");
    public messagePasswordUpdateSuccess: Ref<string> = this.ref("");
    public messagePasswordUpdateFailed: Ref<string> = this.ref("");

    public profile: Ref<OrganizationModel> = this.computed(() => this.organizationStore.profile);

    public constructor() {
      super();

      this.onBeforeMount(async () => {
        this.commonStore.setIsLoading(true);
        await this.organizationStore.fetchProfile();
        this.commonStore.setIsLoading(false);
      });
    }

    public onToggleButton = () => {
      this.router.push({ ...PathConst.adminProfile, params: { username: this.profile.value.username } });
    };

    public onUpdateAvatar = async (avatarUrl: string) => {
      const organization = new OrganizationModel(this.profile.value);
      organization.avatar = avatarUrl;
      const isSuccess = await this.organizationStore.fetchUpdateProfile(organization);
      if (isSuccess) {
        this.profile.value.avatar = avatarUrl;
      }
    };

    public onUpdateInfomation = async (data: any) => {
      this.messageInfoUpdateSuccess.value = "";
      this.messageInfoUpdateFailed.value = "";
      this.commonStore.setIsLoading(true);
      const organization = new OrganizationModel(data);
      const isSuccess = await this.organizationStore.fetchUpdateProfile(organization);
      if (isSuccess) {
        console.log("Update profile");
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
        this.organizationStore.profile.email = email;
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
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;

  & .profile-nav {
    flex: 3;
    margin-bottom: 1.5rem;

    & .nav-list {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding: 1rem;

      &.nav-fixed {
        position: fixed;
      }

      & .nav-link {
        padding: 0.5rem 1.5rem;
        margin-top: 1rem;
        margin-bottom: 1rem;
        margin-left: -1rem;
        border-left: 0.1875rem solid transparent;

        & .icon {
          font-size: 1rem;
          margin-right: 0.5rem;
          opacity: 0.7;
        }

        &.active {
          color: $blue;
          border-color: $blue;
        }

        &:hover {
          color: $blue;
        }
      }
    }
  }

  & .profile-content {
    flex: 9;
  }
}
</style>
