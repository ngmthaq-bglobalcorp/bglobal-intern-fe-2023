<template>
  <AdminLayout>
    <div class="seeker-contaier">
      <PageHeader :target="app.t(`app.seekers`)" button="" icon="" />
      <Datatable
        :columns="app.columns.value"
        :data="app.filetrsData.value"
        @on-delete-selected="app.onDeleteSelected"
        @on-lock-selected="app.onLockSelected"
        @on-unlock-selected="app.onUnlockSelected"
      />
    </div>
  </AdminLayout>
</template>

<script setup lang="ts">
import { BaseComponent, defineClassComponent } from "@/plugins/component.plugin";
import AdminLayout from "@/layouts/AdminLayout/AdminLayout.vue";
import PageHeader from "@/components/AdminComponents/PageHeader/PageHeaderComponent.vue";
import Datatable from "@/components/AdminComponents/Datatable/DatatableComponent.vue";
import { AppConst } from "@/const/app.const";
import { useAdminStore } from "@/stores/admin.store";
import type { Ref } from "vue";
import type { SeekerModel } from "@/models/seeker.model";

const app = defineClassComponent(
  class Component extends BaseComponent {
    public adminStore = useAdminStore();
    public columns: Ref<any> = this.ref([
      { field: "id", headerName: "id" },
      { field: "username", headerName: "username" },
      { field: "name", headerName: "name" },
      { field: "email", headerName: "email" },
      { field: "phone", headerName: "phone" },
      { field: "status", headerName: "status" },
    ]);
    public filetrsData: Ref<Array<SeekerModel>> = this.computed(() => this.adminStore.seekers);

    public constructor() {
      super();

      this.onBeforeMount(async () => {
        this.commonStore.setIsLoading(true);
        await this.adminStore.fetchAllSeekers();
        this.commonStore.setIsLoading(false);
      });
    }

    public onDeleteSelected = (selectedArray: Array<number>) => {
      this.commonStore.setIsLoading(true);
      selectedArray.forEach(async (value: number) => {
        const isSuccess = await this.adminStore.fetchDeleteSeekers(value.toString());
        if (isSuccess) {
          this.adminStore.seekers = this.adminStore.seekers.filter((seeker) => seeker.id != value);
        }
      });
      this.commonStore.setIsLoading(false);
    };

    public onLockSelected = async (id: number) => {
      this.commonStore.setIsLoading(true);
      const isSuccess = await this.adminStore.fetchChangeUserStatus(
        id.toString(),
        AppConst.STATUS.disabled.toLowerCase(),
      );
      if (isSuccess) {
        const seeker = this.adminStore.seekers.find((seeker) => seeker.userId === id);
        if (seeker) {
          seeker.status = AppConst.STATUS.disabled;
        }
      }
      this.commonStore.setIsLoading(false);
    };

    public onUnlockSelected = async (id: number) => {
      this.commonStore.setIsLoading(true);
      const isSuccess = await this.adminStore.fetchChangeUserStatus(
        id.toString(),
        AppConst.STATUS.active.toLowerCase(),
      );
      if (isSuccess) {
        const seeker = this.adminStore.seekers.find((seeker) => seeker.userId === id);
        if (seeker) {
          seeker.status = AppConst.STATUS.active;
        }
      }
      this.commonStore.setIsLoading(false);
    };
  },
);
</script>

<style scoped lang="scss">
@import "@/assets/scss/modules";
</style>
