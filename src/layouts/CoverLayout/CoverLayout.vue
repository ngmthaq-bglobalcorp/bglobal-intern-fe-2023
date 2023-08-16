<template>
  <div id="cover-layout" class="d-flex">
    <WaitingComponent :is-waiting="app.commonStore.isLoading" />
    <CoverComponent />
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { BaseComponent, defineClassComponent } from "@/plugins/component.plugin";
import CoverComponent from "@/components/AdminComponents/Cover/CoverComponent.vue";
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

#cover-layout {
  font-family: "Ubuntu", "Open Sans", sans-serif;
  color: $dark-variant;
  background-color: $white;

  & .content {
    width: 50%;
    min-height: 100vh;
  }
}
</style>
