<template>
  <AdminLayout>
    <PageHeader route="news" />
    <TimelineList :data="app.news" :limit="5" />
  </AdminLayout>
</template>

<script setup lang="ts">
import { BaseComponent, defineClassComponent } from "@/plugins/component.plugin";
import AdminLayout from "@/layouts/AdminLayout/AdminLayout.vue";
import PageHeader from "@/components/AdminComponents/PageHeader/PageHeaderComponent.vue";
import TimelineList from "@/components/AdminComponents/TimelineList/TimelineListComponent.vue";
import type { NewsModel } from "@/models/news.model";

const app = defineClassComponent(
  class Component extends BaseComponent {
    public news: Array<NewsModel> = [
      {
        id: 1,
        title: "This is a title",
        subTitle: "",
        category: "string",
        body: "This is a body",
        eventPageUrl: "",
        eventStartAt: new Date(),
        eventEndAt: new Date(),
        opensAt: new Date(),
        expiresAt: new Date(),
        updatedAt: new Date(),
        createdAt: new Date(),
      },
      {
        id: 2,
        title: "This is a title",
        subTitle: "Have a sub title",
        category: "string",
        body: "This is a body",
        eventPageUrl: "https://minhduc.mll",
        eventStartAt: new Date(),
        eventEndAt: new Date(),
        opensAt: new Date(),
        expiresAt: new Date(),
        updatedAt: new Date(),
        createdAt: new Date(),
      },
      {
        id: 3,
        title: "This is a title",
        subTitle: "",
        category: "string",
        body: "This is a body",
        eventPageUrl: "",
        eventStartAt: new Date(),
        eventEndAt: new Date(),
        opensAt: new Date(),
        expiresAt: new Date(),
        updatedAt: new Date(),
        createdAt: new Date(),
      },
      {
        id: 4,
        title: "This is a title",
        subTitle: "",
        category: "string",
        body: "This is a body",
        eventPageUrl: "",
        eventStartAt: new Date(),
        eventEndAt: new Date(),
        opensAt: new Date(),
        expiresAt: new Date(),
        updatedAt: new Date(),
        createdAt: new Date(),
      },
      {
        id: 5,
        title: "This is a title",
        subTitle: "",
        category: "string",
        body: "This is a body",
        eventPageUrl: "",
        eventStartAt: new Date(),
        eventEndAt: new Date(),
        opensAt: new Date(),
        expiresAt: new Date(),
        updatedAt: new Date(),
        createdAt: new Date(),
      },
      {
        id: 6,
        title: "This is a title",
        subTitle: "",
        category: "string",
        body: "This is a body",
        eventPageUrl: "",
        eventStartAt: new Date(),
        eventEndAt: new Date(),
        opensAt: new Date(),
        expiresAt: new Date(),
        updatedAt: new Date(),
        createdAt: new Date(),
      },
      {
        id: 7,
        title: "This is a title",
        subTitle: "",
        category: "string",
        body: "This is a body",
        eventPageUrl: "",
        eventStartAt: new Date(),
        eventEndAt: new Date(),
        opensAt: new Date(),
        expiresAt: new Date(),
        updatedAt: new Date(),
        createdAt: new Date(),
      },
      {
        id: 7,
        title: "This is a title",
        subTitle: "",
        category: "string",
        body: "This is a body",
        eventPageUrl: "",
        eventStartAt: new Date(),
        eventEndAt: new Date(),
        opensAt: new Date(),
        expiresAt: new Date(),
        updatedAt: new Date(),
        createdAt: new Date(),
      },
      {
        id: 8,
        title: "This is a title",
        subTitle: "",
        category: "string",
        body: "This is a body",
        eventPageUrl: "",
        eventStartAt: new Date(),
        eventEndAt: new Date(),
        opensAt: new Date(),
        expiresAt: new Date(),
        updatedAt: new Date(),
        createdAt: new Date(),
      },
      {
        id: 10,
        title: "This is a title",
        subTitle: "",
        category: "string",
        body: "This is a body",
        eventPageUrl: "",
        eventStartAt: new Date(),
        eventEndAt: new Date(),
        opensAt: new Date(),
        expiresAt: new Date(),
        updatedAt: new Date(),
        createdAt: new Date(),
      },
      {
        id: 11,
        title: "This is a title",
        subTitle: "",
        category: "string",
        body: "This is a body",
        eventPageUrl: "",
        eventStartAt: new Date(),
        eventEndAt: new Date(),
        opensAt: new Date(),
        expiresAt: new Date(),
        updatedAt: new Date(),
        createdAt: new Date(),
      },
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
