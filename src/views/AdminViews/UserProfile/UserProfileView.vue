<template>
  <AdminLayout>
    <div class="user-profile-container">
      <ProfileHeader></ProfileHeader>
      <ProfileCard></ProfileCard>
    </div>
  </AdminLayout>
</template>

<script setup lang="ts">
import { BaseComponent, defineClassComponent } from "@/plugins/component.plugin";
import AdminLayout from "@/layouts/AdminLayout/AdminLayout.vue";
import ProfileHeader from "@/components/AdminComponents/ProfileHeader/ProfileHeaderComponent.vue";
import ProfileCard from "@/components/AdminComponents/ProfileCard/ProfileCardComponent.vue";

const app = defineClassComponent(
  class Component extends BaseComponent {
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
