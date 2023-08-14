<template>
  <AdminLayout>
    <PageHeader
      :target="app.t(`app.${app.isUpdate.value ? 'update' : 'add'}`, { value: app.t(`app.job`) })"
      :button="app.t(`app.back`)"
      icon="bi-caret-left-fill"
      @on-toggle-button="app.onToggleBackButton"
    />
    <div class="add-job-form">
      <FormData
        :target="app.t(`app.${app.isUpdate.value ? 'update' : 'add'}`, { value: app.t(`app.job`) })"
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
import { DatetimeHelper } from "@/helpers/datetime.helper";
import { PrimitiveHelper } from "@/helpers/primitive.helper";
import { JobModel } from "@/models/job.model";
import { useOrganizationStore } from "@/stores/organization.store";
import type { AddJobProps } from "./AddJobView";
import type { Ref } from "vue";

const props = defineProps<AddJobProps>();

const app = defineClassComponent(
  class Component extends BaseComponent {
    public organizationStore = useOrganizationStore();
    public isUpdate: Ref<boolean> = this.computed(() => (props.jobId ? true : false));
    public job: Ref<JobModel> = this.computed(() => {
      if (this.isUpdate.value) {
        return this.organizationStore.job;
      } else {
        return new JobModel({});
      }
    });
    public jobInputs: Ref<any> = this.computed(() => [
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
            model: this.job.value.mainImageUrl ? [this.job.value.mainImageUrl] : [],
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
            model: this.job.value.title || "",
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
            model: this.job.value.jobTitleCatchPhrase || "",
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
            model: this.job.value.location.id > 0 ? this.job.value.location.id : this.commonStore.locations[0]?.id,
            error: "",
            children: this.commonStore.locations,
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
            model: this.job.value.salary || "",
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
            name: "workingHours",
            type: "inputWorkingHours",
            label: this.t(`app.workingHours`),
            placeholder: this.t(`app.workingHours`),
            required: true,
            multiple: false,
            model: this.job.value.workingHours || [],
            error: "",
            children: [
              {
                id: 1,
                name: "startTime",
                type: "time",
                label: this.t(`app.startTime`),
                placeholder: this.t(`app.startTime`),
                required: true,
                multiple: false,
                model: "00:00",
                error: "",
                children: PrimitiveHelper.getTime(),
              },
              {
                id: 2,
                name: "endTime",
                type: "time",
                label: this.t(`app.endTime`),
                placeholder: this.t(`app.endTime`),
                required: true,
                multiple: false,
                model: "00:00",
                error: "",
                children: PrimitiveHelper.getTime(),
              },
              {
                id: 3,
                name: "countHours",
                type: "number",
                label: this.t(`app.countHours`),
                placeholder: this.t(`app.countHours`),
                required: false,
                multiple: false,
                model: "",
                error: "",
              },
              {
                id: 4,
                name: "isFullTime",
                type: "checkbox",
                label: this.t(`app.isFullTime`),
                placeholder: this.t(`app.isFullTime`),
                required: false,
                multiple: false,
                model: false,
                error: "",
              },
            ],
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
            model: this.job.value.searchLabels.map((value) => value.id),
            error: "",
            children: this.commonStore.searchLabels,
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
            model: this.job.value.webApplication || "",
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
            model: this.job.value.catchText || "",
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
            model: this.job.value.leadText || "",
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
            model: this.job.value.subImages.map((value) => value.url),
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
            model: this.job.value.properties || [],
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
            model: this.job.value.postScripts || [],
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
            name: "opensAt",
            type: "date",
            label: this.t(`app.opensAt`),
            placeholder: this.t(`app.opensAt`),
            required: false,
            multiple: false,
            model: DatetimeHelper.getDate(this.job.value.opensAt) || "",
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
            model: DatetimeHelper.getDate(this.job.value.expiresAt) || "",
            error: "",
          },
        ],
      },
    ]);

    public constructor() {
      super();

      this.onBeforeMount(async () => {
        this.commonStore.setIsLoading(true);
        await this.commonStore.fetchAllLocations();
        await this.commonStore.fetchAllSearchLabels();
        if (this.isUpdate.value) {
          this.organizationStore.fetchFindJobById(props.jobId);
        }
        this.commonStore.setIsLoading(false);
      });
    }

    public onToggleBackButton = () => {
      this.router.back();
    };

    public onSubmitForm = async (data: any) => {
      this.commonStore.setIsLoading(true);
      data.mainImageUrl = data.mainImage[0];
      data.location = this.commonStore.getLocationById(data.location);
      data.searchLabels = data.searchLabels.map((value: any) => {
        return this.commonStore.getLocationById(value);
      });
      const job = new JobModel(data);
      if (this.isUpdate.value) {
        const isSuccess = await this.organizationStore.fetchUpdateJob(props.jobId, job);
        if (isSuccess) {
          this.router.push({ ...PathConst.adminJobDetail, params: { jobId: props.jobId } });
        }
      } else {
        const isSuccess = await this.organizationStore.fetchCreateJob(job);
        if (isSuccess) {
          this.router.push(PathConst.adminJobsList);
        }
      }
      this.commonStore.setIsLoading(false);
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
