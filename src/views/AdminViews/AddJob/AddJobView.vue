<template>
  <AdminLayout>
    <PageHeader
      :target="app.t(`app.add`, { value: app.t(`app.jobs`) })"
      :button="app.t(`app.back`)"
      icon="bi-caret-left-fill"
      @on-toggle-button="app.onToggleButton"
    />
    <div class="add-job-form">
      <FormData
        :target="app.t(`app.add`, { value: app.t(`app.job`) })"
        :input="app.jobInputs.value"
        @on-submit-form="app.onSubmitForm"
      />
    </div>
  </AdminLayout>
</template>

<script setup lang="ts">
import { BaseComponent, defineClassComponent } from "@/plugins/component.plugin";
import AdminLayout from "@/layouts/AdminLayout/AdminLayout.vue";
import PageHeader from "@/components/AdminComponents/PageHeader/PageHeaderComponent.vue";
import FormData from "@/components/AdminComponents/FormData/FormDataComponent.vue";
import { PathConst } from "@/const/path.const";
import type { Ref } from "vue";
import { AppConst } from "@/const/app.const";

const getLocation = () => {
  return AppConst.CITY.map((value, index) => {
    return {
      id: index,
      value: value,
      text: value,
    };
  });
};

const getSearchLabel = () => {
  return AppConst.SEARCH_LABEL.map((value, index) => {
    return {
      id: index,
      value: value,
      text: value,
    };
  });
};

const app = defineClassComponent(
  class Component extends BaseComponent {
    public jobInputs: Ref<any> = this.ref([
      {
        id: 1,
        type: "group",
        children: [
          {
            id: 1,
            name: "mainImage",
            type: "image",
            label: this.t(`app.mainImage`),
            placeholder: this.t(`app.mainImage`),
            required: false,
            multiple: false,
            model: [],
            error: "",
          },
        ],
      },
      {
        id: 2,
        type: "group",
        children: [
          {
            id: 1,
            name: "title",
            type: "text",
            label: this.t(`app.title`),
            placeholder: this.t(`app.title`),
            required: true,
            multiple: false,
            model: "",
            error: "",
          },
        ],
      },
      {
        id: 3,
        type: "group",
        children: [
          {
            id: 1,
            name: "jobTitleCatchPhrase",
            type: "text",
            label: this.t(`app.jobTitleCatchPhrase`),
            placeholder: this.t(`app.jobTitleCatchPhrase`),
            required: false,
            multiple: false,
            model: "",
            error: "",
          },
        ],
      },
      {
        id: 4,
        type: "group",
        children: [
          {
            id: 1,
            name: "location",
            type: "select",
            label: this.t(`app.location`),
            placeholder: this.t(`app.location`),
            required: true,
            multiple: false,
            model: AppConst.CITY[0],
            error: "",
            children: getLocation(),
          },
        ],
      },
      {
        id: 5,
        type: "group",
        children: [
          {
            id: 1,
            name: "salary",
            type: "number",
            label: this.t(`app.salary`),
            placeholder: this.t(`app.salary`),
            required: true,
            multiple: false,
            model: "",
            error: "",
          },
        ],
      },
      {
        id: 6,
        type: "group",
        children: [
          {
            id: 1,
            name: "workingHour",
            type: "text",
            label: this.t(`app.workingHour`),
            placeholder: this.t(`app.workingHour`),
            required: true,
            multiple: false,
            model: "",
            error: "",
          },
        ],
      },
      {
        id: 7,
        type: "group",
        children: [
          {
            id: 1,
            name: "searchLabels",
            type: "selectMultiple",
            label: this.t(`app.searchLabels`),
            placeholder: this.t(`app.searchLabels`),
            required: false,
            multiple: false,
            model: [],
            error: "",
            children: getSearchLabel(),
          },
        ],
      },
      {
        id: 8,
        type: "group",
        children: [
          {
            id: 1,
            name: "webApplication",
            type: "text",
            label: this.t(`app.webApplication`),
            placeholder: this.t(`app.webApplication`),
            required: false,
            multiple: false,
            model: "",
            error: "",
          },
        ],
      },
      {
        id: 9,
        type: "group",
        children: [
          {
            id: 1,
            name: "catchText",
            type: "textarea",
            label: this.t(`app.catchText`),
            placeholder: this.t(`app.catchText`),
            required: true,
            multiple: false,
            model: "",
            error: "",
          },
        ],
      },
      {
        id: 10,
        type: "group",
        children: [
          {
            id: 1,
            name: "leadText",
            type: "textarea",
            label: this.t(`app.leadText`),
            placeholder: this.t(`app.leadText`),
            required: true,
            multiple: false,
            model: "",
            error: "",
          },
        ],
      },
      {
        id: 11,
        type: "group",
        children: [
          {
            id: 1,
            name: "subImages",
            type: "image",
            label: this.t(`app.subImages`),
            placeholder: this.t(`app.subImages`),
            required: false,
            multiple: true,
            model: [],
            error: "",
          },
        ],
      },
      {
        id: 12,
        type: "group",
        children: [
          {
            id: 1,
            name: "properties",
            type: "inputMultiple",
            label: this.t(`app.properties`),
            placeholder: this.t(`app.properties`),
            required: false,
            multiple: false,
            model: [],
            error: "",
            children: [
              {
                id: 1,
                name: "title",
                type: "text",
                label: this.t(`app.propertyTitle`),
                placeholder: this.t(`app.propertyTitle`),
                required: true,
                multiple: false,
                model: "",
                error: "",
              },
              {
                id: 2,
                name: "body",
                type: "textarea",
                label: this.t(`app.propertyBody`),
                placeholder: this.t(`app.propertyBody`),
                required: true,
                multiple: false,
                model: "",
                error: "",
              },
            ],
          },
        ],
      },
      {
        id: 13,
        type: "group",
        children: [
          {
            id: 1,
            name: "postScripts",
            type: "inputMultiple",
            label: this.t(`app.postScripts`),
            placeholder: this.t(`app.postScripts`),
            required: false,
            multiple: false,
            model: [],
            error: "",
            children: [
              {
                id: 1,
                name: "body",
                type: "text",
                label: this.t(`app.postScripts`),
                placeholder: this.t(`app.postScripts`),
                required: true,
                multiple: false,
                model: "",
                error: "",
              },
            ],
          },
        ],
      },
      {
        id: 14,
        type: "group",
        children: [
          {
            id: 1,
            name: "photoGallery",
            type: "image",
            label: this.t(`app.photoGallery`),
            placeholder: this.t(`app.photoGallery`),
            required: false,
            multiple: true,
            model: [],
            error: "",
          },
        ],
      },
      {
        id: 15,
        type: "group",
        children: [
          {
            id: 1,
            name: "opensAt",
            type: "date",
            label: this.t(`app.opensAt`),
            placeholder: this.t(`app.opensAt`),
            required: false,
            multiple: false,
            model: "",
            error: "",
          },
          {
            id: 2,
            name: "expiresAt",
            type: "date",
            label: this.t(`app.expiresAt`),
            placeholder: this.t(`app.expiresAt`),
            required: false,
            multiple: false,
            model: "",
            error: "",
          },
        ],
      },
    ]);

    public constructor() {
      super();
    }

    public onToggleButton = () => {
      this.router.push(PathConst.adminJobsList);
    };

    public onSubmitForm = (job: any) => {
      console.log(job);
    };
  },
);
</script>

<style scoped lang="scss">
@import "@/assets/scss/modules";

.add-job-form {
  width: 75%;
  margin: auto;
}
</style>
