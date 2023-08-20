<template>
  <UserLayout>
    <div class="second-header">
      <ul class="OK">
        <li class="ok" v-for="(n, index) in 3" :key="n">
          <i class="bi bi-check-circle-fill"></i>
          <span class="ok-info">{{ app.t(`jobsApp.header.secondHeader.${index}.title`) }}</span>
        </li>
      </ul>

      <span class="caption">{{ app.t("jobsApp.header.caption") }}</span>
    </div>
    <div class="userlayout">
      <FormSearch />
      <div class="search-condition">
        <img class="" src="@/assets/img/ic_search.svg" />
        <span class="text">{{ app.t("jobsApp.form.applicable.searchCondition") }}</span>
      </div>
      <NewsList :news-array="app.newsArray.value" />
      <CompanyDescribe />
    </div>
    <FooterComponent />
  </UserLayout>
</template>

<script setup lang="ts">
import { BaseComponent, defineClassComponent } from "@/plugins/component.plugin";
import UserLayout from "@/layouts/UserLayout/UserLayout.vue";
import FormSearch from "@/components/UserComponents/HomeContent/Form/FormSearch.vue";
import NewsList from "@/components/UserComponents/HomeContent/News/NewsList.vue";
import CompanyDescribe from "@/components/UserComponents/HomeContent/CompanyDescribe/CompanyDescribe.vue";
import FooterComponent from "@/components/UserComponents/Footer/FooterComponent.vue";
import { useAdminStore } from "@/stores/admin.store";
import type { Ref } from "vue";
import type { NewsModel } from "@/models/news.model";

const app = defineClassComponent(
  class Component extends BaseComponent {
    public adminStore = useAdminStore();

    public newsArray: Ref<Array<NewsModel>> = this.computed(() => this.adminStore.newsList);

    public constructor() {
      super();

      this.onBeforeMount(async () => {
        this.commonStore.setIsLoading(true);
        await this.adminStore.fetchAllNews();
        this.commonStore.setIsLoading(false);
      });
    }
  },
);
</script>

<style scoped lang="scss">
@import "@/assets/scss/modules";
.second-header {
  height: 52px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: #eb7393;

  & .OK {
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    margin: 0;
    padding: 0;

    & .ok {
      color: #fff;
      display: flex;
      align-items: center;
      margin-right: 8px;
      justify-content: center;

      &:last-child {
        margin-right: 0;
      }

      & .ok-info {
        font-size: 12px;
        font-weight: 600;
        line-height: 17px;
        letter-spacing: 0.00714em;
      }
    }
  }

  & .caption {
    color: #fff;
    display: block;
    font-size: 12px;
    text-align: center;
    font-weight: 700;
    line-height: 17px;
  }
}
.userlayout {
  padding: 0 12px;

  & .search-condition {
    width: 210px;
    height: 40px;
    margin: auto;
    display: flex;
    transform: translateY(-1px);
    align-items: flex-start;
    padding-top: 2px;
    background-size: contain;
    justify-content: center;
    background-repeat: no-repeat;
    background-position: top center;
    background-image: url(@/assets/img/tab.png);

    & .text {
      color: #000;
      font-size: 16px;
      font-weight: 400;
      line-height: 23px;
      padding-left: 6px;
    }
  }
}
</style>
