<template>
  <UserLayout>
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
