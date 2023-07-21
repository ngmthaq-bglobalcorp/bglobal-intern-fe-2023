<template>
  <div id="admin-layout">
    <SidebarComponent />
    <div class="layout-content">
      <NavbarComponent />
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import SidebarComponent from "@/components/AdminComponents/Sidebar/SidebarComponent.vue";
import NavbarComponent from "@/components/AdminComponents/Navbar/NavbarComponent.vue";
</script>

<style scoped lang="scss">
@import "@/assets/scss/modules";
@import "@/assets/scss/admin";

#admin-layout {
  font-family: "Ubuntu", "Open Sans", sans-serif;
  color: $dark-variant;
  background-color: $white;
  display: flex;

  & .layout-content {
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
  }
}
</style>
