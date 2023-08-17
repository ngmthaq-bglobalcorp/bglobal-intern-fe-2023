<template>
  <div id="user-layout">
    <LoadingComponent :is-loading="app.commonStore.isLoading" />
    <HeaderComponent :is-auth="props.isAuth" />
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { BaseComponent, defineClassComponent } from "@/plugins/component.plugin";
import HeaderComponent from "@/components/UserComponents/Header/HeaderComponent.vue";
import LoadingComponent from "@/components/AppComponents/LoadingComponent/LoadingComponent.vue";
import type { UserLayoutProps } from "./UserLayout";

const props = defineProps<UserLayoutProps>();

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

::-webkit-scrollbar {
  display: none;
}

#user-layout {
  background: linear-gradient(12.02deg, #dfd1c5, #fff6eb);
  width: 100%;
  height: 100vh;
  max-width: 500px;
  margin: auto;
  position: relative;

  & .content {
    height: calc(100vh - 52px);
    overflow-y: scroll;
  }
}
</style>
