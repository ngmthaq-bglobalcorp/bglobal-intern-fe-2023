<template>
  <AdminLayout>
    <PageHeader
      :target="app.t(`app.add`, { value: app.t(`app.news`) })"
      :button="app.t(`app.back`)"
      icon="bi-caret-left-fill"
      @on-toggle-button="app.onToggleButton"
    />
    <div class="add-news-form">
      <FormData
        :target="app.t(`app.add`, { value: app.t(`app.news`) })"
        :input="app.newsInputs.value"
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
import { AppConst } from "@/const/app.const";
import { PathConst } from "@/const/path.const";
import type { Ref } from "vue";

const app = defineClassComponent(
  class Component extends BaseComponent {
    public newsInputs: Ref<any> = this.ref([
      {
        id: 1,
        type: "group",
        children: [
          {
            id: 1,
            name: "category",
            type: "radio",
            label: this.t(`app.category`),
            placeholder: this.t(`app.category`),
            required: true,
            model: AppConst.NEWS_CATEGORY.other,
            error: "",
            children: [
              {
                id: 1,
                value: AppConst.NEWS_CATEGORY.seminar,
                text: this.t(`app.seminar`),
                image: "/src/assets/img/info-icon-seminar.svg",
                alt: this.t(`app.seminar`),
              },
              {
                id: 2,
                value: AppConst.NEWS_CATEGORY.briefing,
                text: this.t(`app.corporateRecruitingSession`),
                image: "/src/assets/img/info-icon-briefing.svg",
                alt: this.t(`app.corporateRecruitingSession`),
              },
              {
                id: 3,
                value: AppConst.NEWS_CATEGORY.other,
                text: this.t(`app.generalInformation`),
                image: "/src/assets/img/info-icon-other.svg",
                alt: this.t(`app.generalInformation`),
              },
            ],
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
            type: "date",
            label: this.t(`app.opensAt`),
            placeholder: this.t(`app.opensAt`),
            required: true,
            model: "",
            error: "",
          },
          {
            id: 2,
            name: "expiresAt",
            type: "date",
            label: this.t(`app.expiresAt`),
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
            type: "text",
            label: this.t(`app.title`),
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
            type: "text",
            label: this.t(`app.subtitle`),
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
            type: "textarea",
            label: this.t(`app.body`),
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
            type: "text",
            label: this.t(`app.eventPageUrl`),
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
            type: "date",
            label: this.t(`app.eventStartAt`),
            placeholder: this.t(`app.eventStartAt`),
            required: false,
            model: "",
            error: "",
          },
          {
            id: 2,
            name: "eventEndAt",
            type: "date",
            label: this.t(`app.eventEndAt`),
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

    public onToggleButton = () => {
      this.router.push(PathConst.adminNews);
    };

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
