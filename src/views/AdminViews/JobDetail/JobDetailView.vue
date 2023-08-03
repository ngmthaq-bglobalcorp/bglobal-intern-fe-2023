<template>
  <AdminLayout>
    <DetailPageHeader :data="app.job.value" />
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
import type { Ref } from "vue";
import type { JobModel } from "@/models/job.model";
import type { SeekerModel } from "@/models/seeker.model";

const app = defineClassComponent(
  class Component extends BaseComponent {
    public job: Ref<JobModel> = this.ref({
      id: 3,
      mainImageUrl:
        "http://res.cloudinary.com/dtmbetpzo/image/upload/v1690427976/3ff755c9-5472-4fa0-9adc-f69e008fdfb7.jpg",
      mainImageDesc: "Ảnh filter",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      jobTitleCatchPhrase: "Rất catchy",
      location: "Thừa Thiên Huế",
      salary: 10,
      workingHour: [
        {
          id: 17,
          hours: 8,
          start: "15:00:00",
          end: "07:00:00",
          isFullTime: true,
        },
        {
          id: 18,
          hours: 8,
          start: "08:00:00",
          end: "15:00:00",
          isFullTime: true,
        },
      ],
      searchLabels: [
        "facilisi",
        "sed",
        "viverra",
        "ipsum",
        "nunc",
        "aliquet",
        "bibendum",
        "enim",
        "facilisis",
        "gravida",
        "neque",
      ],
      webApplication: "www.google.com",
      postScripts: [
        {
          id: 15,
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          sortOrder: 0,
        },
        {
          id: 16,
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          sortOrder: 1,
        },
      ],
      catchText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas congue quisque egestas diam in arcu cursus euismod quis. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Ante metus dictum at tempor commodo ullamcorper a lacus vestibulum. In tellus integer feugiat scelerisque varius morbi enim nunc.",
      leadText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum nibh tellus molestie nunc non blandit massa enim nec. Facilisis volutpat est velit egestas dui id. Ac odio tempor orci dapibus ultrices in iaculis. Quis blandit turpis cursus in hac habitasse. Vitae proin sagittis nisl rhoncus mattis. Bibendum arcu vitae elementum curabitur vitae nunc sed velit. Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque viverra. Dui accumsan sit amet nulla facilisi morbi tempus. Ultricies mi quis hendrerit dolor magna eget. Tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse. Cursus turpis massa tincidunt dui ut ornare lectus sit.",
      subImages: [
        {
          id: 16,
          url: "http://res.cloudinary.com/dtmbetpzo/image/upload/v1690427976/3ff755c9-5472-4fa0-9adc-f69e008fdfb7.jpg",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          id: 16,
          url: "http://res.cloudinary.com/dtmbetpzo/image/upload/v1690427976/3ff755c9-5472-4fa0-9adc-f69e008fdfb7.jpg",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
      ],
      properties: [
        {
          id: 7,
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          title: "Purus",
          sortOrder: 0,
          isDisplayed: true,
        },
        {
          id: 8,
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          title: "Purus",
          sortOrder: 2,
          isDisplayed: true,
        },
      ],
      companySurvey: ["chạy thử 1", "chạy thử 2"],
      barometer: ["chạy thử 1", "chạy thử 2"],
      photoGallery: [
        {
          id: 16,
          url: "http://res.cloudinary.com/dtmbetpzo/image/upload/v1690427976/3ff755c9-5472-4fa0-9adc-f69e008fdfb7.jpg",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          id: 16,
          url: "http://res.cloudinary.com/dtmbetpzo/image/upload/v1690427976/3ff755c9-5472-4fa0-9adc-f69e008fdfb7.jpg",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          id: 16,
          url: "http://res.cloudinary.com/dtmbetpzo/image/upload/v1690427976/3ff755c9-5472-4fa0-9adc-f69e008fdfb7.jpg",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
      ],
      interview: ["phỏng vấn 1", "phỏng vấn 2"],
      productCode: "XNXX",
      opensAt: new Date("2023-08-24"),
      expiresAt: new Date("2023-12-24"),
      updatedAt: new Date("2023-08-01T10:25:38.569881"),
      createdAt: new Date("2023-08-01T10:25:38.569881"),
    });
    public columns: Ref<Array<any>> = this.ref([
      { field: "name", headerName: "name" },
      { field: "like", headerName: "like" },
    ]);
    public seekers: Ref<Array<SeekerModel>> = this.ref([
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
    ]);

    public constructor() {
      super();
    }
  },
);
</script>

<style scoped lang="scss">
@import "@/assets/scss/modules";
@import "@/assets/scss/admin";
</style>
