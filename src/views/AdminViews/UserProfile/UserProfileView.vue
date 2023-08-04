<template>
  <AdminLayout>
    <div class="user-profile-container">
      <ProfileHeader :isUpdate="false" :editable="true" @on-toggle-update-profile="app.onToggleUpdateProfile" />
      <ProfileCard :profile="app.profile" />
    </div>
  </AdminLayout>
</template>

<script setup lang="ts">
import { BaseComponent, defineClassComponent } from "@/plugins/component.plugin";
import AdminLayout from "@/layouts/AdminLayout/AdminLayout.vue";
import ProfileHeader from "@/components/AdminComponents/ProfileHeader/ProfileHeaderComponent.vue";
import ProfileCard from "@/components/AdminComponents/ProfileCard/ProfileCardComponent.vue";
import { AppConst } from "@/const/app.const";
import { PathConst } from "@/const/path.const";
import type { OrganizationModel } from "@/models/organization.model";

const app = defineClassComponent(
  class Component extends BaseComponent {
    public profile: OrganizationModel = {
      id: 1,
      username: "minhduc",
      name: "Minh Duc",
      email: "minhduc.mll@gmail.com",
      phone_number: "0912345678",
      webside: "",
      adress: "Ha Noi",
      introduction:
        "............... ............... ............... ............... ............... ............... ............... ............... ............... ............... ............... ............... ............... ............... ............... ............... ............... ............... ............... ...............",
      organizationType: AppConst.ORGANIZATION_TYPE.typeB,
      status: AppConst.STATUS.active,
      createdAt: new Date("2023-07-01"),
      updatedAt: new Date("2023-07-01"),
      isSelected: false,
    };

    public constructor() {
      super();
    }

    public onToggleUpdateProfile = () => {
      this.router.push(PathConst.adminUpdateProfile.path);
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
