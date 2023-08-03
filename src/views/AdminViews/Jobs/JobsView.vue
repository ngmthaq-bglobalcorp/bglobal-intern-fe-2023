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
