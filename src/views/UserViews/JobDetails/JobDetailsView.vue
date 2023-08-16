<template>
  <UserLayout>
    <JobDetails :data="app.job.value" />
  </UserLayout>
</template>

<script setup lang="ts">
import { BaseComponent, defineClassComponent } from "@/plugins/component.plugin";
import UserLayout from "@/layouts/UserLayout/UserLayout.vue";
import JobDetails from "@/components/UserComponents/JobDetails/JobDetails.vue";
import { useSeekersStore } from "@/stores/seekers.store";
import type { JobDetailProps } from "./JobDetailsView";
import type { Ref } from "vue";
import type { JobModel } from "@/models/job.model";

const props = defineProps<JobDetailProps>();

const app = defineClassComponent(
  class Component extends BaseComponent {
    public seekersStore = useSeekersStore();

    public job: Ref<JobModel> = this.computed(() => this.seekersStore.job);

    public constructor() {
      super();

      this.onBeforeMount(async () => {
        this.commonStore.setIsLoading(true);
        await this.seekersStore.fetchFindJobById(props.jobId);
        this.commonStore.setIsLoading(false);
      });
    }
  },
);
</script>

<style scoped lang="scss">
@import "@/assets/scss/modules";
</style>
