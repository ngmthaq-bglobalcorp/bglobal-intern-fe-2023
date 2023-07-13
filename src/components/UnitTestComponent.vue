<template>
  <p>Unit {{ props.msg }}</p>
</template>

<script setup lang="ts">
import { BaseComponent, defineClassComponent } from "@/plugins/component.plugin";
import type { UnitTestComponentProps } from "./UnitTestComponent";

const props = defineProps<UnitTestComponentProps>();

const app = defineClassComponent(
  class Component extends BaseComponent {
    public constructor() {
      super();

      this.commonStore.eventBus.on("click", (data) => {
        console.log(data);
      });
    }
  },
);
</script>

<style scoped lang="scss">
@import "@/assets/scss/modules";
</style>
