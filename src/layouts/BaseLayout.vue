<template>
  <div id="base-layout">
    <HeaderComponent></HeaderComponent>
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
import HeaderComponent from "@/components/UserComponents/Header/HeaderComponent.vue";
import { BaseComponent, defineClassComponent } from "@/plugins/component.plugin";

const app = defineClassComponent(
  class Components extends BaseComponent {
    public constructor() {
      super();

      document.body.classList.add("user-view");
    }
  },
);
</script>
<style scoped lang="scss">
#base-layout {
  background: linear-gradient(12.02deg, #dfd1c5, #fff6eb);
  width: 500px;
  height: 100vh;
  margin: auto;
}
</style>

<style>
.user-view {
  background-color: aqua;
}
</style>
