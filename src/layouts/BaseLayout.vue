<template>
  <div id="base-layout">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { BaseComponent, defineClassComponent } from "@/plugins/component.plugin";

const app = defineClassComponent(
  class Components extends BaseComponent {
    public constructor() {
      super();
    }
  },
);
</script>

<style scoped lang="scss"></style>
