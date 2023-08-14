<template>
  <BaseLayout>
    <JobCard />
  </BaseLayout>
</template>

<script setup lang="ts">
import { BaseComponent, defineClassComponent } from "@/plugins/component.plugin";
import JobCard from "@/components/UserComponents/JobCard/JobCard.vue";
import BaseLayout from "@/layouts/BaseLayout.vue";

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
</style>
