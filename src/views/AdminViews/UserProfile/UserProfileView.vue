<template>
  <AdminLayout>
    <div class="user-profile-container">
      <ProfileHeader
        :profile="app.profile.value"
        :is-update="false"
        :editable="app.editable.value"
        @on-update-avatar="app.onUpdateAvatar"
        @on-toggle-update-profile="app.onToggleUpdateProfile"
      />
      <ProfileCard :profile="app.profile.value" :editable="app.editable.value" />
    </div>
  </AdminLayout>
</template>

<script setup lang="ts">
import { BaseComponent, defineClassComponent } from "@/plugins/component.plugin";
import AdminLayout from "@/layouts/AdminLayout/AdminLayout.vue";
import ProfileHeader from "@/components/AdminComponents/ProfileHeader/ProfileHeaderComponent.vue";
import ProfileCard from "@/components/AdminComponents/ProfileCard/ProfileCardComponent.vue";
import { PathConst } from "@/const/path.const";
import { OrganizationModel } from "@/models/organization.model";
import { useAuthStore } from "@/stores/auth.store";
import { useOrganizationStore } from "@/stores/organization.store";
import type { UserProfileProps } from "./UserProfileView";
import type { Ref } from "vue";
import type { UserModel } from "@/models/user.model";

const props = defineProps<UserProfileProps>();

const app = defineClassComponent(
  class Component extends BaseComponent {
    public authStore = useAuthStore();
    public organizationStore = useOrganizationStore();

    public user: Ref<UserModel> = this.computed(() => this.authStore.user);
    public profile: Ref<any> = this.computed(() => this.commonStore.profile);
    public editable: Ref<boolean> = this.computed(() => this.profile.value.username === props.username);

    public constructor() {
      super();

      this.onBeforeMount(async () => {
        this.commonStore.setIsLoading(true);
        if (props.username === this.user.value.username) {
          await this.commonStore.fetchUserProfileById(this.user.value.id.toString());
        } else {
          await this.commonStore.fetchUserProfileById(props.username);
        }
        this.commonStore.setIsLoading(false);
      });

      this.watch(
        () => props.username,
        async (id) => {
          this.commonStore.setIsLoading(true);
          if (id === this.user.value.username) {
            await this.commonStore.fetchUserProfileById(this.user.value.id.toString());
          } else {
            await this.commonStore.fetchUserProfileById(id);
          }
          this.commonStore.setIsLoading(false);
        },
      );
    }

    public onUpdateAvatar = async (avatarUrl: string) => {
      this.commonStore.setIsLoading(true);
      const organization = new OrganizationModel(this.profile.value);
      organization.avatar = avatarUrl;
      const isSuccess = await this.organizationStore.fetchUpdateProfile(organization);
      if (isSuccess) {
        this.profile.value.avatar = avatarUrl;
      }
      this.commonStore.setIsLoading(false);
    };

    public onToggleUpdateProfile = () => {
      this.router.push(PathConst.adminUpdateProfile);
    };
  },
);
</script>

<style scoped lang="scss">
@import "@/assets/scss/modules";

.user-profile-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  width: 75%;
  margin: auto;
}
</style>
