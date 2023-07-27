<template>
  <AdminLayout>
    <div class="user-profile-container">
      <ProfileHeader :isUpdate="false" />
      <ProfileCard :profile="app.profile" />
    </div>
  </AdminLayout>
</template>

<script setup lang="ts">
import { BaseComponent, defineClassComponent } from "@/plugins/component.plugin";
import AdminLayout from "@/layouts/AdminLayout/AdminLayout.vue";
import ProfileHeader from "@/components/AdminComponents/ProfileHeader/ProfileHeaderComponent.vue";
import ProfileCard from "@/components/AdminComponents/ProfileCard/ProfileCardComponent.vue";
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
      organizationType: 0,
      status: 0,
      createdAt: new Date("2023-07-01"),
      updatedAt: new Date("2023-07-01"),
    };

    public constructor() {
      super();
    }
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
