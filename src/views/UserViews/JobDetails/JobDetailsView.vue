<template>
  <BaseLayout>
    <JobDetails :data="app.job.value" />
  </BaseLayout>
</template>

<script setup lang="ts">
import { BaseComponent, defineClassComponent } from "@/plugins/component.plugin";
import BaseLayout from "@/layouts/BaseLayout.vue";
import JobDetails from "@/components/UserComponents/JobDetails/JobDetails.vue";
import type { JobModel } from "@/models/job.model";
import { useSeekersStore } from "@/stores/seekers.store";
import type { Ref } from "vue";

import type { JobDetailProps } from "./JobDetailsView";

const props = defineProps<JobDetailProps>();

const app = defineClassComponent(
  class Component extends BaseComponent {
    public seekersStore = useSeekersStore();
    public job: Ref<JobModel> = this.computed(() => this.seekersStore.job);

    public constructor() {
      super();

      this.onBeforeMount(async () => {
        await this.seekersStore.fetchShowJobById(props.jobId);
      });
    }
  },
);
</script>

<style scoped lang="scss">
@import "@/assets/scss/modules";
</style>
