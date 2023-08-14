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
    }
  },
);
</script>
<style scoped lang="scss">
#base-layout {
  background: linear-gradient(12.02deg, #dfd1c5, #fff6eb);
  width: 100%;
  height: 100vh;
  max-width: 500px;
  margin: auto;
  position: relative;
}
</style>
