<template>
  <AdminLayout>
    <PageHeader route="hiringOrganization" />
    <Datatable
      :columns="app.columns.value"
      :data="app.data.value"
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
import type { OrganizationModel } from "@/models/organization.model";
import type { Ref } from "vue";

const app = defineClassComponent(
  class Component extends BaseComponent {
    public columns: Ref<any> = this.ref([
      { field: "id", headerName: "id" },
      { field: "name", headerName: "name" },
      { field: "email", headerName: "email" },
      { field: "phone", headerName: "phone" },
      { field: "status", headerName: "status" },
    ]);
    public data: Ref<Array<OrganizationModel>> = this.ref([]);

    public constructor() {
      super();
    }

    public onDeleteSelected = (selectedArray: Array<number>) => {
      console.log(selectedArray);
    };

    public onLockSelected = (id: number) => {
      console.log(id);
    };

    public onUnlockSelected = (id: number) => {
      console.log(id);
    };
  },
);
</script>

<style scoped lang="scss">
@import "@/assets/scss/modules";
</style>
