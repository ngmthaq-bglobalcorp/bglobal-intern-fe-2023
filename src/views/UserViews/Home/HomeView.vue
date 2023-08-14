<template>
  <UserLayout>
    <div class="second-header">
      <ul class="OK">
        <li class="ok" v-for="(n, index) in 3" :key="n">
          <i class="bi bi-check-circle-fill"></i>
          <p>{{ app.t(`jobsApp.header.secondHeader.${index}.title`) }}</p>
        </li>
      </ul>

      <span class="caption">{{ app.t("jobsApp.header.caption") }}</span>
    </div>
    <div class="userlayout">
      <FormSearch />
      <div class="search-condition">
        <img class="" src="@/assets/img/ic_search.71514682dc7410fdb320ef5038e30837.svg" />
        <p class="">{{ app.t("jobsApp.form.applicable.searchCondition") }}</p>
      </div>
      <NewsList :newsArray="app.newsArray.value" />
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

      this.onBeforeMount(() => {
        this.adminStore.fetchAllNews();
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
      margin-left: 2px;
      justify-content: center;

      & p {
        font-size: 12px;
        font-weight: 700;
        line-height: 17px;
        margin-top: 8px;
        margin-bottom: 8px;
        margin-left: 1px;
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
    & p {
      color: #000;
      font-size: 16px;
      font-weight: 400;
      line-height: 23px;
      padding-left: 6px;
    }
  }
}
</style>
