<template>
  <AdminLayout>
    <PageHeader route="jobs" path="/admin/jobs/add" :have-add-button="true" />
    <ul class="jobs-list list">
      <li class="jobs-item" v-for="item in app.jobs.value" :key="item.id">
        <JobCard :job="item" />
      </li>
    </ul>
  </AdminLayout>
</template>

<script setup lang="ts">
import { BaseComponent, defineClassComponent } from "@/plugins/component.plugin";
import AdminLayout from "@/layouts/AdminLayout/AdminLayout.vue";
import PageHeader from "@/components/AdminComponents/PageHeader/PageHeaderComponent.vue";
import JobCard from "@/components/AdminComponents/JobCard/JobCardComponent.vue";
import type { Ref } from "vue";
import type { JobModel } from "@/models/job.model";

const app = defineClassComponent(
  class Component extends BaseComponent {
    public jobs: Ref<Array<JobModel>> = this.ref([
      {
        id: 3,
        mainImageUrl:
          "http://res.cloudinary.com/dtmbetpzo/image/upload/v1690427976/3ff755c9-5472-4fa0-9adc-f69e008fdfb7.jpg",
        mainImageDesc: "Ảnh filter",
        title: "Lao Động hăng say",
        jobTitleCatchPhrase: "Rất catchy",
        location: "Thừa Thiên Huế",
        salary: 10,
        workingHour: [
          {
            id: 17,
            hours: 8,
            start: "15:00:00",
            end: "07:00:00",
            is_full_time: true,
          },
          {
            id: 18,
            hours: 8,
            start: "08:00:00",
            end: "15:00:00",
            is_full_time: true,
          },
        ],
        searchLabels: ["test1", "test2"],
        webApplication: "www.google.com",
        postScripts: [
          {
            id: 15,
            body: "post số 1",
            sort_order: 0,
          },
          {
            id: 16,
            body: "post số 2",
            sort_order: 1,
          },
        ],
        catchText: "Dọn nhà",
        leadText: "Công việc cọ nhà",
        subImages: [],
        properties: [
          {
            id: 7,
            body: "Nội dung 1",
            title: "đặc tính 1",
            sort_order: 0,
            is_displayed: true,
          },
          {
            id: 8,
            body: "Nội dung 2",
            title: "đặc tính 2",
            sort_order: 2,
            is_displayed: true,
          },
        ],
        companySurvey: ["chạy thử 1", "chạy thử 2"],
        barometer: ["chạy thử 1", "chạy thử 2"],
        photoGallery: [],
        interview: ["phỏng vấn 1", "phỏng vấn 2"],
        productCode: "XNXX",
        opensAt: new Date("2023-08-24"),
        expiresAt: new Date("2023-12-24"),
        updatedAt: new Date("2023-08-01T10:25:38.569881"),
        createdAt: new Date("2023-08-01T10:25:38.569881"),
      },
      {
        id: 4,
        mainImageUrl:
          "http://res.cloudinary.com/dtmbetpzo/image/upload/v1690427976/3ff755c9-5472-4fa0-9adc-f69e008fdfb7.jpg",
        mainImageDesc: "Ảnh filter",
        title: "Lao Động hăng say",
        jobTitleCatchPhrase: "Rất catchy",
        location: "Thừa Thiên Huế",
        salary: 10,
        workingHour: [
          {
            id: 17,
            hours: 8,
            start: "15:00:00",
            end: "07:00:00",
            is_full_time: true,
          },
          {
            id: 18,
            hours: 8,
            start: "08:00:00",
            end: "15:00:00",
            is_full_time: true,
          },
        ],
        searchLabels: ["label1", "label2"],
        webApplication: "www.google.com",
        postScripts: [
          {
            id: 15,
            body: "post số 1",
            sort_order: 0,
          },
          {
            id: 16,
            body: "post số 2",
            sort_order: 1,
          },
        ],
        catchText: "Dọn nhà",
        leadText: "Công việc cọ nhà",
        subImages: [],
        properties: [
          {
            id: 7,
            body: "Nội dung 1",
            title: "đặc tính 1",
            sort_order: 0,
            is_displayed: true,
          },
          {
            id: 8,
            body: "Nội dung 2",
            title: "đặc tính 2",
            sort_order: 2,
            is_displayed: true,
          },
        ],
        companySurvey: ["chạy thử 1", "chạy thử 2"],
        barometer: ["chạy thử 1", "chạy thử 2"],
        photoGallery: [],
        interview: ["phỏng vấn 1", "phỏng vấn 2"],
        productCode: "XNXX",
        opensAt: new Date("2023-08-24"),
        expiresAt: new Date("2023-12-24"),
        updatedAt: new Date("2023-08-01T10:25:38.569881"),
        createdAt: new Date("2023-08-01T10:25:38.569881"),
      },
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

.jobs-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  width: 80%;
  margin: auto;

  & .jobs-item {
    padding: 0 0.75rem;
    margin-bottom: 2rem;
  }
}
</style>
