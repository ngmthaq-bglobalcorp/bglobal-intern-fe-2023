<template>
  <AdminLayout>
    <PageHeader :target="app.t(`app.news`)" />
    <TimelineList :target="app.t(`app.news`)" :data="app.news.value" :limit="5" />
  </AdminLayout>
</template>

<script setup lang="ts">
import { BaseComponent, defineClassComponent } from "@/plugins/component.plugin";
import AdminLayout from "@/layouts/AdminLayout/AdminLayout.vue";
import PageHeader from "@/components/AdminComponents/PageHeader/PageHeaderComponent.vue";
import TimelineList from "@/components/AdminComponents/TimelineList/TimelineListComponent.vue";
import type { NewsModel } from "@/models/news.model";
import type { Ref } from "vue";

const app = defineClassComponent(
  class Component extends BaseComponent {
    public news: Ref<Array<NewsModel>> = this.ref([]);

    public constructor() {
      super();
    }
  },
);
</script>

<style scoped lang="scss">
@import "@/assets/scss/modules";
</style>
