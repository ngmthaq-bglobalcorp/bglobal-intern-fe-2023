<template>
  <AdminLayout>
    <div class="dashboard-container">
      <div class="dashboard-wrapper">
        <img src="@/assets/img/oc-collaboration.svg" alt="Hi" class="image" />
        <h1 class="title">{{ app.t(`app.hello`) }}</h1>
        <span class="desc">{{ app.t(`app.enjoy`) }}</span>
      </div>
    </div>
  </AdminLayout>
</template>

<script setup lang="ts">
import { BaseComponent, defineClassComponent } from "@/plugins/component.plugin";
import AdminLayout from "@/layouts/AdminLayout/AdminLayout.vue";

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
@import "@/assets/scss/admin";

.dashboard-container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4.5rem 0;

  & .dashboard-wrapper {
    text-align: center;

    & .image {
      width: 100%;
      max-width: 25rem;
      height: auto;
      vertical-align: middle;
      margin-bottom: 2rem;
    }

    & .title {
      color: $black;
      font-size: 1.4109375rem;
      font-weight: 600;
      line-height: 1.2;
      margin-top: 0;
      margin-bottom: 0.5rem;
    }

    & .desc {
      margin-top: 0;
      margin-bottom: 1rem;
    }
  }
}
</style>
