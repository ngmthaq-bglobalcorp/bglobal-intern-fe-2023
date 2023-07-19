<template>
  <div id="user-layout">
    <HeaderComponent></HeaderComponent>

    <slot></slot>
    <FooterComponent></FooterComponent>
  </div>
</template>
<script setup lang="ts">
import HeaderComponent from "@/components/UserComponents/Header/HeaderComponent.vue";
import FooterComponent from "@/components/UserComponents/Footer/FooterComponent.vue";
</script>

<style scoped lang="scss">
#user-layout {
  background: linear-gradient(12.02deg, #dfd1c5, #fff6eb);
  overflow: hidden;
}
</style>
