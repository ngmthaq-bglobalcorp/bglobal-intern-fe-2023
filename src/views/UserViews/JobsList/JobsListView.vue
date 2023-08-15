<template>
  <BaseLayout>
    <JobCard :newsArray="app.newsArray.value" />
  </BaseLayout>
</template>

<script setup lang="ts">
import { BaseComponent, defineClassComponent } from "@/plugins/component.plugin";
import JobCard from "@/components/UserComponents/JobCard/JobCard.vue";
import BaseLayout from "@/layouts/BaseLayout.vue";
import type { Ref } from "vue";
import type { JobModel } from "@/models/job.model";
import { useSeekersStore } from "@/stores/seekers.store";

const app = defineClassComponent(
  class Component extends BaseComponent {
    public seekersStore = useSeekersStore();

    public newsArray: Ref<Array<JobModel>> = this.computed(() => this.seekersStore.jobs);

    public constructor() {
      super();

      this.onBeforeMount(() => {
        this.seekersStore.fetchAllJobs();
      });
    }
  },
);
</script>

<style scoped lang="scss">
@import "@/assets/scss/modules";
</style>
