<template>
  <AdminLayout>
    <div class="seeker-contaier">
      <PageHeader route="seekers" />
      <Datatable
        :columns="app.columns.value"
        :data="app.data.value"
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
import type { SeekerModel } from "@/models/seeker.model";
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
    public data: Ref<Array<SeekerModel>> = this.ref([]);

    public constructor() {
      super();
    }

    public onDeleteSelected = (selectedArray: Array<number>) => {
      selectedArray.forEach((selectedId) => {
        this.data.value = this.data.value.filter((value) => value.id !== selectedId);
      });
      console.log(this.data.value);
      console.log(selectedArray);
    };

    public onLockSelected = (id: number) => {
      const selectedData = this.data.value.find((value) => value.id === id);
      selectedData!.status = AppConst.STATUS.disabled;
      console.log(id);
    };

    public onUnlockSelected = (id: number) => {
      const selectedData = this.data.value.find((value) => value.id === id);
      selectedData!.status = AppConst.STATUS.active;
      console.log(id);
    };
  },
);
</script>

<style scoped lang="scss">
@import "@/assets/scss/modules";
</style>
