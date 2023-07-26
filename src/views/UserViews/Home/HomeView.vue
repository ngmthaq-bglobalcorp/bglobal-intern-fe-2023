<template>
  <UserLayout>
    <div class="userlayout">
      <FormSearch></FormSearch>
      <NewsList></NewsList>
      <CompanyDescribe></CompanyDescribe>
    </div>
  </UserLayout>
</template>

<script setup lang="ts">
import { BaseComponent, defineClassComponent } from "@/plugins/component.plugin";
import UserLayout from "@/layouts/UserLayout/UserLayout.vue";
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
.userlayout {
  padding: 0 12px;
}
</style>
