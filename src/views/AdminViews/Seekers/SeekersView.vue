<template>
  <AdminLayout>
    <div class="seeker-contaier">
      <PageHeader route="seekers" path="" :have-add-button="false" />
      <Datatable :columns="app.columns" :data="app.data" />
    </div>
  </AdminLayout>
</template>

<script setup lang="ts">
import { BaseComponent, defineClassComponent } from "@/plugins/component.plugin";
import AdminLayout from "@/layouts/AdminLayout/AdminLayout.vue";
import PageHeader from "@/components/AdminComponents/PageHeader/PageHeaderComponent.vue";
import Datatable from "@/components/AdminComponents/Datatable/DatatableComponent.vue";
import type { SeekerModel } from "@/models/seeker.model";

const app = defineClassComponent(
  class Component extends BaseComponent {
    public columns = [
      { field: "id", headerName: "id" },
      { field: "name", headerName: "name" },
      { field: "email", headerName: "email" },
      { field: "phone", headerName: "phone" },
      { field: "status", headerName: "status" },
    ];
    public data: Array<SeekerModel> = [
      { id: 1, name: "Minh Duc", email: "minhduc.mll@gmail.com", phone: "0912345678", status: "active" },
      { id: 2, name: "Minh Duc", email: "minhduc.mll@gmail.com", phone: "0912345678", status: "active" },
      { id: 3, name: "Minh Duc", email: "minhduc.mll@gmail.com", phone: "0912345678", status: "active" },
      { id: 4, name: "Minh Duc", email: "minhduc.mll@gmail.com", phone: "0912345678", status: "active" },
      { id: 5, name: "Minh Duc", email: "minhduc.mll@gmail.com", phone: "0912345678", status: "active" },
      { id: 6, name: "Minh Duc", email: "minhduc.mll@gmail.com", phone: "0912345678", status: "active" },
      { id: 7, name: "Minh Duc", email: "minhduc.mll@gmail.com", phone: "0912345678", status: "active" },
      { id: 8, name: "Minh Duc", email: "minhduc.mll@gmail.com", phone: "0912345678", status: "lock" },
      { id: 9, name: "Minh Duc", email: "minhduc.mll@gmail.com", phone: "0912345678", status: "active" },
      { id: 10, name: "Minh Duc", email: "minhduc.mll@gmail.com", phone: "0912345678", status: "active" },
      { id: 11, name: "Minh Duc", email: "minhduc.mll@gmail.com", phone: "0912345678", status: "active" },
      { id: 12, name: "Minh Duc", email: "minhduc.mll@gmail.com", phone: "0912345678", status: "active" },
      { id: 13, name: "Minh Duc", email: "minhduc.mll@gmail.com", phone: "0912345678", status: "active" },
      { id: 14, name: "Minh Duc", email: "minhduc.mll@gmail.com", phone: "0912345678", status: "active" },
      { id: 15, name: "Minh Duc", email: "minhduc.mll@gmail.com", phone: "0912345678", status: "active" },
      { id: 16, name: "Minh Duc", email: "minhduc.mll@gmail.com", phone: "0912345678", status: "active" },
      { id: 17, name: "Minh Duc", email: "minhduc.mll@gmail.com", phone: "0912345678", status: "active" },
      { id: 18, name: "Minh Duc", email: "minhduc.mll@gmail.com", phone: "0912345678", status: "lock" },
      { id: 19, name: "Minh Duc", email: "minhduc.mll@gmail.com", phone: "0912345678", status: "active" },
      { id: 20, name: "Minh Duc", email: "minhduc.mll@gmail.com", phone: "0912345678", status: "active" },
      { id: 21, name: "Minh Duc", email: "minhduc.mll@gmail.com", phone: "0912345678", status: "active" },
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
