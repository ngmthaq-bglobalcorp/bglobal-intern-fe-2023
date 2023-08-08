<template>
  <AdminLayout>
    <PageHeader
      :target="app.t(`app.news`)"
      :button="app.t(`app.add`, { value: app.t(`app.news`) })"
      icon="bi-person-plus-fill"
      @on-toggle-button="app.onToggleButton"
    />
    <TimelineList
      :target="app.t(`app.news`)"
      :data="app.news.value"
      :limit="5"
      @on-toggle-edit-button="app.onToggleEditButton"
      @on-toggle-delete-button="app.onToggleDeleteButton"
    />
  </AdminLayout>
</template>

<script setup lang="ts">
import { BaseComponent, defineClassComponent } from "@/plugins/component.plugin";
import AdminLayout from "@/layouts/AdminLayout/AdminLayout.vue";
import PageHeader from "@/components/AdminComponents/PageHeader/PageHeaderComponent.vue";
import TimelineList from "@/components/AdminComponents/TimelineList/TimelineListComponent.vue";
import { PathConst } from "@/const/path.const";
import { useAdminStore } from "@/stores/admin.store";
import type { Ref } from "vue";
import type { NewsModel } from "@/models/news.model";

const app = defineClassComponent(
  class Component extends BaseComponent {
    public adminStore = useAdminStore();
    public news: Ref<Array<NewsModel>> = this.computed(() => this.adminStore.news);

    public constructor() {
      super();

      this.onBeforeMount(() => {
        this.adminStore.fetchAllNews();
      });
    }

    public onToggleButton = () => {
      this.router.push(PathConst.adminAddNews);
    };

    public onToggleEditButton = (id: number) => {
      this.router.push({ ...PathConst.adminUpdateNews, params: { newsId: id } });
    };

    public onToggleDeleteButton = (id: number) => {
      this.adminStore.fetchDeleteNews(id.toString());
    };
  },
);
</script>

<style scoped lang="scss">
@import "@/assets/scss/modules";
</style>
