<template>
  <AdminLayout>
    <PageHeader route="news" path="" :have-add-button="false" />
    <div class="add-news-form">
      <FormData :input="app.newsInputs.value" @on-submit-form="app.onSubmitForm" />
    </div>
  </AdminLayout>
</template>

<script setup lang="ts">
import { BaseComponent, defineClassComponent } from "@/plugins/component.plugin";
import AdminLayout from "@/layouts/AdminLayout/AdminLayout.vue";
import PageHeader from "@/components/AdminComponents/PageHeader/PageHeaderComponent.vue";
import FormData from "@/components/AdminComponents/FormData/FormDataComponent.vue";
import type { Ref } from "vue";

const app = defineClassComponent(
  class Component extends BaseComponent {
    public newsInputs: Ref<any> = this.ref([
      {
        id: 1,
        type: "radio-select",
        name: "category",
        label: this.t(`app.category`),
        model: 1,
        children: [
          {
            id: 1,
            value: 1,
            text: this.t(`app.seminar`),
            image: "/src/assets/img/info-icon-seminar.svg",
            alt: this.t(`app.seminar`),
          },
          {
            id: 2,
            value: 2,
            text: this.t(`app.corporateRecruitingSession`),
            image: "/src/assets/img/info-icon-briefing.svg",
            alt: this.t(`app.corporateRecruitingSession`),
          },
          {
            id: 3,
            value: 3,
            text: this.t(`app.generalInformation`),
            image: "/src/assets/img/info-icon-other.svg",
            alt: this.t(`app.generalInformation`),
          },
        ],
      },
      {
        id: 2,
        type: "group",
        children: [
          {
            id: 1,
            name: "opensAt",
            label: this.t(`app.opensAt`),
            type: "date",
            placeholder: this.t(`app.opensAt`),
            required: true,
            model: "",
            error: "",
          },
          {
            id: 2,
            name: "expiresAt",
            label: this.t(`app.expiresAt`),
            type: "date",
            placeholder: this.t(`app.expiresAt`),
            required: true,
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
            name: "title",
            label: this.t(`app.title`),
            type: "text",
            placeholder: this.t(`app.title`),
            required: true,
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
            name: "subtitle",
            label: this.t(`app.subtitle`),
            type: "text",
            placeholder: this.t(`app.subtitle`),
            required: false,
            model: "",
            error: "",
          },
        ],
      },
      {
        id: 5,
        type: "group",
        children: [
          {
            id: 1,
            name: "body",
            label: this.t(`app.body`),
            type: "textarea",
            placeholder: this.t(`app.body`),
            required: false,
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
            name: "eventPageUrl",
            label: this.t(`app.eventPageUrl`),
            type: "text",
            placeholder: this.t(`app.eventPageUrl`),
            required: false,
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
            name: "eventStartAt",
            label: this.t(`app.eventStartAt`),
            type: "date",
            placeholder: this.t(`app.eventStartAt`),
            required: false,
            model: "",
            error: "",
          },
          {
            id: 2,
            name: "eventEndAt",
            label: this.t(`app.eventEndAt`),
            type: "date",
            placeholder: this.t(`app.eventEndAt`),
            required: false,
            model: "",
            error: "",
          },
        ],
      },
    ]);

    public constructor() {
      super();
    }

    public onSubmitForm = () => {
      let news = {};
      this.newsInputs.value.map((input: any) => {
        if (input.type === "group") {
          input.children.map((value: any) => {
            if (value.required && !value.model) {
              value.error = this.t(`app.notBlank`, { value: value.label });
            } else {
              news = {
                ...news,
                [value.name]: value.model,
              };
            }
          });
        } else {
          if (input.required && !input.model) {
            input.error = this.t(`app.notBlank`, { value: input.label });
          } else {
            news = {
              ...news,
              [input.name]: input.model,
            };
          }
        }
      });
      console.log(news);
    };
  },
);
</script>

<style scoped lang="scss">
@import "@/assets/scss/modules";

.add-news-form {
  width: 75%;
  margin: auto;
}
</style>
