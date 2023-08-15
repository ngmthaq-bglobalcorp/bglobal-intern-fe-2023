<template>
  <AdminLayout>
    <div class="user-profile-container">
      <ProfileHeader
        :profile="app.profile.value"
        :is-update="false"
        :editable="app.editable.value"
        @on-toggle-update-profile="app.onToggleUpdateProfile"
      />
      <ProfileCard :profile="app.profile.value" />
    </div>
  </AdminLayout>
</template>

<script setup lang="ts">
import { BaseComponent, defineClassComponent } from "@/plugins/component.plugin";
import AdminLayout from "@/layouts/AdminLayout/AdminLayout.vue";
import ProfileHeader from "@/components/AdminComponents/ProfileHeader/ProfileHeaderComponent.vue";
import ProfileCard from "@/components/AdminComponents/ProfileCard/ProfileCardComponent.vue";
import { PathConst } from "@/const/path.const";
import { useOrganizationStore } from "@/stores/organization.store";
import type { UserProfileProps } from "./UserProfileView";
import type { Ref } from "vue";
import type { OrganizationModel } from "@/models/organization.model";

const props = defineProps<UserProfileProps>();

const app = defineClassComponent(
  class Component extends BaseComponent {
    public organizationStore = useOrganizationStore();

    public profile: Ref<OrganizationModel> = this.computed(() => this.organizationStore.profile);
    public editable: Ref<boolean> = this.computed(() => this.profile.value.username === props.username);

    public constructor() {
      super();

      this.onBeforeMount(async () => {
        this.commonStore.setIsLoading(true);
        await this.organizationStore.fetchProfile();
        this.commonStore.setIsLoading(false);
      });
    }

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
