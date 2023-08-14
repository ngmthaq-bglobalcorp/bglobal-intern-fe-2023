<template>
  <div id="user-layout">
    <HeaderComponent></HeaderComponent>
    <div class="second-header">
      <ul class="OK">
        <li class="ok" v-for="(n, index) in 3" :key="n">
          <i class="bi bi-check-circle-fill"></i>
          <p>{{ app.t(`jobsApp.header.secondHeader.${index}.title`) }}</p>
        </li>
      </ul>

      <span class="caption">{{ app.t("jobsApp.header.caption") }}</span>
    </div>
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
import { BaseComponent, defineClassComponent } from "@/plugins/component.plugin";
import HeaderComponent from "@/components/UserComponents/Header/HeaderComponent.vue";
const app = defineClassComponent(
  class Component extends BaseComponent {
    public constructor() {
      super();
    }
  },
);
</script>

<style scoped lang="scss">
#user-layout {
  background: linear-gradient(12.02deg, #dfd1c5, #fff6eb);
  width: 100%;
  height: 100%;
  max-width: 500px;
  margin: auto;
  position: relative;
  & .second-header {
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
}
</style>
