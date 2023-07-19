<template>
  <div class="home-content">
    <FormSearch></FormSearch>
    <NewsList></NewsList>
    <CompanyDescribe></CompanyDescribe>
  </div>
</template>

<script setup lang="ts">
import { BaseComponent, defineClassComponent } from "@/plugins/component.plugin";
import FormSearch from "@/components/UserComponents/HomeContent/Form/FormSearch.vue";
import NewsList from "@/components/UserComponents/HomeContent/News/NewsList.vue";
import CompanyDescribe from "@/components/UserComponents/HomeContent/CompanyDescribe/CompanyDescribe.vue";

const app = defineClassComponent(
  class Component extends BaseComponent {
    public constructor() {
      super();
    }
  },
);
</script>

<style scoped lang="scss">
@import "@/assets/scss/modules";
.home-content {
  padding: 0 12px;
}
</style>
