<template>
  <AdminLayout>
    <DetailPageHeader
      :data="app.job.value"
      :editable="true"
      @on-toggle-update-button="app.onToggleUpdateButton"
      @on-toggle-delete-button="app.onToggleDeleteButton"
    />
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
import { PathConst } from "@/const/path.const";
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

    public job: Ref<JobModel> = this.computed(() => this.organizationStore.job);
    public seekers: Ref<Array<SeekerModel>> = this.computed(() => this.organizationStore.actionSeekers);

    public constructor() {
      super();

      this.onBeforeMount(async () => {
        this.commonStore.setIsLoading(true);
        let isSuccess = true;
        isSuccess = await this.organizationStore.fetchFindJobById(props.jobId);
        if (isSuccess) {
          await this.organizationStore.fetchAllSeekerLikeJob(props.jobId);
        } else {
          this.router.push(PathConst.notFound);
        }
        this.commonStore.setIsLoading(false);
      });
    }

    public onToggleUpdateButton = () => {
      this.router.push({ ...PathConst.adminUpdateJob, params: { jobId: props.jobId } });
    };

    public onToggleDeleteButton = async () => {
      this.commonStore.setIsLoading(true);
      const isSuccess = await this.organizationStore.fetchDeleteJob(props.jobId);
      if (isSuccess) {
        this.organizationStore.jobs = this.organizationStore.jobs.filter((job) => job.id != parseInt(props.jobId));
        this.router.push(PathConst.adminJobsList);
      }
      this.commonStore.setIsLoading(true);
    };
  },
);
</script>

<style scoped lang="scss">
@import "@/assets/scss/modules";
@import "@/assets/scss/admin";
</style>
