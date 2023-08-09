<template>
  <AdminLayout>
    <PageHeader :target="app.t(`app.hiringOrganization`)" button="" icon="" />
    <Datatable
      :columns="app.columns.value"
      :data="app.filetrsData.value"
      @on-delete-selected="app.onDeleteSelected"
      @on-lock-selected="app.onLockSelected"
      @on-unlock-selected="app.onUnlockSelected"
    ></Datatable>
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
import type { OrganizationModel } from "@/models/organization.model";

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
    public filetrsData: Ref<Array<OrganizationModel>> = this.computed(() => this.adminStore.organizations);

    public constructor() {
      super();

      this.onBeforeMount(async () => {
        await this.adminStore.fetchAllOrganizations();
      });
    }

    public onDeleteSelected = (selectedArray: Array<number>) => {
      selectedArray.forEach(async (value: number) => {
        const isSuccess = await this.adminStore.fetchDeleteOrganizations(value.toString());
        if (isSuccess) {
          this.adminStore.organizations = this.adminStore.organizations.filter(
            (organization) => organization.id != value,
          );
        }
      });
    };

    public onLockSelected = async (id: number) => {
      const isSuccess = await this.adminStore.fetchChangeUserStatus(
        id.toString(),
        AppConst.STATUS.disabled.toLowerCase(),
      );
      if (isSuccess) {
        const organization = this.adminStore.organizations.find((organization) => organization.userId === id);
        if (organization) {
          organization.status = AppConst.STATUS.disabled;
        }
      }
    };

    public onUnlockSelected = async (id: number) => {
      const isSuccess = await this.adminStore.fetchChangeUserStatus(
        id.toString(),
        AppConst.STATUS.active.toLowerCase(),
      );
      if (isSuccess) {
        const organization = this.adminStore.organizations.find((organization) => organization.userId === id);
        if (organization) {
          organization.status = AppConst.STATUS.active;
        }
      }
    };
  },
);
</script>

<style scoped lang="scss">
@import "@/assets/scss/modules";
</style>
