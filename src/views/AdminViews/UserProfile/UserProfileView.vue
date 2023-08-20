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
import type { SeekerModel } from "@/models/seeker.model";

const props = defineProps<UserProfileProps>();

const app = defineClassComponent(
  class Component extends BaseComponent {
    public authStore = useAuthStore();
    public organizationStore = useOrganizationStore();

    public profile: Ref<UserModel | SeekerModel | OrganizationModel> = this.ref(new OrganizationModel({}));

    public editable: Ref<boolean> = this.computed(() => this.profile.value.username === props.username);
    public user: Ref<UserModel> = this.computed(() => this.authStore.user);
    public userId: Ref<string> = this.computed(() => {
      if (props.username && props.username === this.user.value.username) {
        return this.user.value.id.toString();
      } else if (props.userId) {
        return props.userId;
      } else {
        return "0";
      }
    });

    public constructor() {
      super();

      this.onBeforeMount(async () => {
        this.commonStore.setIsLoading(true);
        if (this.userId.value) {
          this.profile.value = await this.authStore.fetchUserProfileById(this.userId.value);
          if (this.profile.value.id < 0) {
            this.router.push(PathConst.notFound);
          }
        }
        this.commonStore.setIsLoading(false);
      });

      this.watch(
        () => this.userId.value,
        async (id) => {
          this.commonStore.setIsLoading(true);
          if (this.userId.value) {
            this.profile.value = await this.authStore.fetchUserProfileById(this.userId.value);
            if (this.profile.value.id < 0) {
              this.router.push(PathConst.notFound);
            }
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
      this.router.push({ ...PathConst.adminUpdateProfile, params: { username: app.profile.value.username } });
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
