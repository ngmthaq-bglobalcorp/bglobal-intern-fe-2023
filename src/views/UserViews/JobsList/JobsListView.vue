<template>
  <UserLayout>
    <JobCard />
  </UserLayout>
</template>

<script setup lang="ts">
import { BaseComponent, defineClassComponent } from "@/plugins/component.plugin";
import UserLayout from "@/layouts/UserLayout/UserLayout.vue";
import JobCard from "@/components/UserComponents/JobCard/JobCard.vue";
import { KeyConst } from "@/const/key.const";
import { StorageHelper } from "@/helpers/storage.helper";
import { useSeekersStore } from "@/stores/seekers.store";
import type { Ref } from "vue";
import type { JobModel } from "@/models/job.model";

const app = defineClassComponent(
  class Component extends BaseComponent {
    public seekersStore = useSeekersStore();

    public filtersJobs: Ref<Array<JobModel>> = this.computed(() => this.seekersStore.jobs);

    public constructor() {
      super();

      this.onBeforeMount(async () => {
        this.commonStore.setIsLoading(true);
        const data: any = StorageHelper.getLocalStorage(KeyConst.keys.searchCondition);
        await this.seekersStore.fetchAllJobs(data);
        this.commonStore.setIsLoading(false);
      });
    }
  },
);
</script>

<style scoped lang="scss">
@import "@/assets/scss/modules";
</style>
