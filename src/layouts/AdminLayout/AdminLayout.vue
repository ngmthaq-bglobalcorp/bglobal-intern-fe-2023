<template>
  <div id="admin-layout">
    <SidebarComponent></SidebarComponent>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import SidebarComponent from "@/components/AdminComponents/Sidebar/SidebarComponent.vue";
</script>

<style scoped lang="scss">
@import "@/assets/scss/modules";
@import "@/assets/scss/admin";

#admin-layout {
  font-family: "Ubuntu", "Open Sans", sans-serif;
  color: $dark-variant;
  background-color: $white;
}
</style>
