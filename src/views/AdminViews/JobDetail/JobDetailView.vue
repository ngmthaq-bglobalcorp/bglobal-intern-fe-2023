<template>
  <AdminLayout>
    <DetailPageHeader :data="app.job.value" />
    <JobDetailCard :data="app.job.value">
      <UserList :columns="app.columns.value" :data="app.seekers.value" />
    </JobDetailCard>
  </AdminLayout>
</template>

<script setup lang="ts">
import { BaseComponent, defineClassComponent } from "@/plugins/component.plugin";
import AdminLayout from "@/layouts/AdminLayout/AdminLayout.vue";
import DetailPageHeader from "@/components/AdminComponents/DetailPageHeader/DetailPageHeaderComponent.vue";
import JobDetailCard from "@/components/AdminComponents/JobDetailCard/JobDetailCardComponent.vue";
import UserList from "@/components/AdminComponents/UserList/UserListComponent.vue";
import { useOrganizationStore } from "@/stores/organization.store";
import type { JobDetailProps } from "./JobDetailView";
import type { Ref } from "vue";
import type { JobModel } from "@/models/job.model";
import type { SeekerModel } from "@/models/seeker.model";

const props = defineProps<JobDetailProps>();

const app = defineClassComponent(
  class Component extends BaseComponent {
    public organizationStore = useOrganizationStore();
    public columns: Ref<Array<any>> = this.ref([
      { field: "name", headerName: "name" },
      { field: "like", headerName: "like" },
    ]);
    public seekers: Ref<Array<SeekerModel>> = this.ref([]);
    public job: Ref<JobModel> = this.computed(() => this.organizationStore.job);

    public constructor() {
      super();

      this.onBeforeMount(() => {
        this.organizationStore.fetchFindJobById(props.jobId);
      });
    }
  },
);
</script>

<style scoped lang="scss">
@import "@/assets/scss/modules";
@import "@/assets/scss/admin";
</style>
