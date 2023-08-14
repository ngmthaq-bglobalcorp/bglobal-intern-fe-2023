<template>
  <div id="admin-layout">
    <WaitingComponent :isWaiting="app.commonStore.isLoading" />
    <SidebarComponent />
    <div class="layout-content">
      <NavbarComponent />
      <div class="content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { BaseComponent, defineClassComponent } from "@/plugins/component.plugin";
import SidebarComponent from "@/components/AdminComponents/Sidebar/SidebarComponent.vue";
import NavbarComponent from "@/components/AdminComponents/Navbar/NavbarComponent.vue";
import WaitingComponent from "@/components/AppComponents/WaitingComponent/WaitingComponent.vue";

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

#admin-layout {
  font-family: "Ubuntu", "Open Sans", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: $dark-variant;
  background-color: $white;
  display: flex;

  & .layout-content {
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;

    & .content {
      padding: 1.75rem 1.5rem;
      height: calc(100vh - 3.75rem);
      overflow: auto;
    }
  }
}
</style>
