<template>
  <AdminLayout>
    <PageHeader route="hiringOrganization" />
    <Datatable :columns="app.columns" :data="app.data"></Datatable>
  </AdminLayout>
</template>

<script setup lang="ts">
import { BaseComponent, defineClassComponent } from "@/plugins/component.plugin";
import AdminLayout from "@/layouts/AdminLayout/AdminLayout.vue";
import PageHeader from "@/components/AdminComponents/PageHeader/PageHeaderComponent.vue";
import Datatable from "@/components/AdminComponents/Datatable/DatatableComponent.vue";
import type { OrganizationModel } from "@/models/organization.model";

const app = defineClassComponent(
  class Component extends BaseComponent {
    public columns = [
      { field: "id", headerName: "id" },
      { field: "name", headerName: "name" },
      { field: "email", headerName: "email" },
      { field: "phone", headerName: "phone" },
      { field: "status", headerName: "status" },
    ];
    public data: Array<OrganizationModel> = [
      { id: 1, name: "Minh Duc", email: "minhduc.mll@gmail.com", phone: "0912345678", status: "active" },
    ];

    public constructor() {
      super();
    }
  },
);
</script>

<style scoped lang="scss">
@import "@/assets/scss/modules";
</style>
