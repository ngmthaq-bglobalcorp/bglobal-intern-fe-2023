<template>
  <div class="news">
    <h1 class="title">{{ app.t("jobsApp.news.title") }}</h1>
    <a
      class="link"
      target="_blank"
      :href="PrimitiveHelper.getValidUrl(news.eventPageUrl)"
      v-for="news in app.filterData.value"
      :key="news.id"
    >
      <template v-if="news.category === AppConst.NEWS_CATEGORY.seminar">
        <div class="image">
          <img src="@/assets/img/info-icon-seminar.svg" class="icon" />
          <span class="time" style="color: #378182">{{ DatetimeHelper.getDateAndMonth(news.eventStartAt) }}</span>
        </div>

        <div class="describe">
          <span class="type" style="color: #378182">
            {{ app.t(`jobsApp.newsCategory.seminar`) }}
          </span>

          <span class="topic">{{ news.title }}</span>
          <span class="fee">{{ news.body }}</span>
        </div>
      </template>
      <template v-else-if="news.category === AppConst.NEWS_CATEGORY.briefing">
        <div class="image">
          <img src="@/assets/img/info-icon-briefing.svg" class="icon" />
          <span class="time" style="color: #6086dd">{{ DatetimeHelper.getDateAndMonth(news.eventStartAt) }}</span>
        </div>

        <div class="describe">
          <span class="type" style="color: #6086dd">
            {{ app.t(`jobsApp.newsCategory.corporateRecruitingSession`) }}
          </span>

          <span class="topic">{{ news.title }}</span>
          <span class="fee">{{ news.body }}</span>
        </div>
      </template>
      <template v-else-if="news.category === AppConst.NEWS_CATEGORY.other">
        <div class="image">
          <img src="@/assets/img/info-icon-other.svg" class="icon" />
          <span class="time" style="color: #db616e">{{ DatetimeHelper.getDateAndMonth(news.eventStartAt) }}</span>
        </div>

        <div class="describe">
          <span class="type" style="color: #db616e">
            {{ app.t(`jobsApp.newsCategory.generalInformation`) }}
          </span>

          <span class="topic">{{ news.title }}</span>
          <span class="fee">{{ news.body }}</span>
        </div>
      </template>
    </a>
  </div>
</template>

<script setup lang="ts">
import { BaseComponent, defineClassComponent } from "@/plugins/component.plugin";
import { AppConst } from "@/const/app.const";
import { DatetimeHelper } from "@/helpers/datetime.helper";
import { PrimitiveHelper } from "@/helpers/primitive.helper";
import type { NewsListProps } from "./NewsList";
import type { Ref } from "vue";
import type { NewsModel } from "@/models/news.model";

const props = defineProps<NewsListProps>();
const today = new Date();

const app = defineClassComponent(
  class Component extends BaseComponent {
    public filterData: Ref<Array<NewsModel>> = this.computed(() => {
      return props.newsArray.filter((value) => {
        return value.opensAt <= today && value.expiresAt >= today;
      });
    });

    public constructor() {
      super();
    }
  },
);
</script>

<style scoped lang="scss">
@import "@/assets/scss/modules";

.news {
  margin-top: 30px;

  & .title {
    color: #000;
    font-size: 18px;
    font-weight: 900;
    line-height: 26px;
    margin-bottom: 6px;
  }

  & .link {
    display: flex;
    padding: 15px 15px 15px 0;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 25px;
    margin-bottom: 10px;
    text-decoration: none;
    background-color: #fff;

    & .image {
      flex: 2;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;

      & .icon {
        position: relative;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        flex-shrink: 0;
        font-family: Roboto, Helvetica, Arial, sans-serif;
        font-size: 1.25rem;
        line-height: 1;
        border-radius: 50%;
        overflow: hidden;
        user-select: none;
        width: 42px;
        height: 42px;
      }

      & .time {
        color: #378182;
        font-size: 14px;
        margin-top: 5px;
        font-family: Roboto, sans-serif !important;
        font-weight: 700;
        line-height: 16px;
      }
    }

    & .describe {
      flex: 8;
      display: flex;
      flex-direction: column;

      & .type {
        font-size: 12px;
        font-weight: 700;
        line-height: 17px;
        margin-bottom: 0.5rem;
      }

      & .topic {
        color: #000;
        font-size: 14px;
        font-weight: 700;
        line-height: 20px;
        margin-bottom: 0.5rem;
      }

      & .fee {
        color: #000;
        font-size: 11px;
        font-weight: 500;
        line-height: 16px;
      }
    }
  }
}
</style>
