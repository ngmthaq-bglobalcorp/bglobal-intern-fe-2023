<template>
  <div id="cover-layout" class="d-flex">
    <CoverComponent />
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import CoverComponent from "@/components/AdminComponents/Cover/CoverComponent.vue";
</script>

<style scoped lang="scss">
@import "@/assets/scss/modules";
@import "@/assets/scss/admin";

#cover-layout {
  font-family: "Ubuntu", "Open Sans", sans-serif;
  color: $dark-variant;
  background-color: $white;

  & .content {
    width: 50%;
    min-height: 100vh;
  }
}
</style>
