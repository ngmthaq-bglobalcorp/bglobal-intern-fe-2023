<template>
  <BaseLayout>
    <JobDetails />
  </BaseLayout>
</template>

<script setup lang="ts">
import { BaseComponent, defineClassComponent } from "@/plugins/component.plugin";
import BaseLayout from "@/layouts/BaseLayout.vue";
import JobDetails from "@/components/UserComponents/JobDetails/JobDetails.vue";
import type { JobModel } from "@/models/job.model";
import { useSeekersStore } from "@/stores/seekers.store";
import type { Ref } from "vue";
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
