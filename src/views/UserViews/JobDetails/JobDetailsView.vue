<template>
  <BaseLayout></BaseLayout>
</template>

<script setup lang="ts">
import { BaseComponent, defineClassComponent } from "@/plugins/component.plugin";
import type { Ref } from "vue";
import BaseLayout from "@/layouts/BaseLayout.vue";

const app = defineClassComponent(
  class Component extends BaseComponent {
    public isChangeButton: Ref<boolean> = this.ref(true);
    public constructor() {
      super();
    }
  },
);
</script>

<style scoped lang="scss">
@import "@/assets/scss/modules";
</style>
