<template>
  <div id="user-layout">
    <HeaderComponent></HeaderComponent>

    <slot></slot>
  </div>
</template>
<script setup lang="ts">
import { BaseComponent, defineClassComponent } from "@/plugins/component.plugin";
import HeaderComponent from "@/components/UserComponents/Header/HeaderComponent.vue";
const app = defineClassComponent(
  class Component extends BaseComponent {
    public constructor() {
      super();
    }
  },
);
</script>

<style scoped lang="scss">
#user-layout {
  background: linear-gradient(12.02deg, #dfd1c5, #fff6eb);
  width: 100%;
  height: 100%;
  max-width: 500px;
  margin: auto;
  position: relative;
}
</style>
