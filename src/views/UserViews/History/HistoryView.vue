<template>
  <UserLayout>
    <div class="body">
      <div class="history_list">
        <button
          class="like_history"
          :class="{ noChoose: !app.isChangeButton.value }"
          @click="app.changeButton()"
          tabindex="0"
          type="button"
        >
          <i class="bi bi-arrow-down" v-if="app.isChangeButton.value"></i>
          <i class="bi bi-arrow-right" v-else></i>
          <p class="title">Liked jobs</p>
        </button>
        <button class="all_history" tabindex="0" type="button">
          <i class="bi bi-arrow-right"></i>
          <p class="title">All jobs</p>
        </button>
      </div>
      <HistoryJobs></HistoryJobs>
    </div>
  </UserLayout>
</template>

<script setup lang="ts">
import { BaseComponent, defineClassComponent } from "@/plugins/component.plugin";
import type { Ref } from "vue";
import BaseLayout from "@/layouts/BaseLayout.vue";
import HistoryJobs from "@/components/UserComponents/HistoryJobs/HistoryJobs.vue";
import UserLayout from "@/layouts/UserLayout/UserLayout.vue";
const app = defineClassComponent(
  class Component extends BaseComponent {
    public isChangeButton: Ref<boolean> = this.ref(true);
    public constructor() {
      super();
    }
    public changeButton() {
      this.isChangeButton.value = !this.isChangeButton.value;
    }
  },
);
</script>

<style scoped lang="scss">
@import "@/assets/scss/modules";
.body {
  height: calc(100% - 52px);
  padding: 20px 12px;
  position: relative;

  & .history_list {
    margin-bottom: 10px;
    display: flex;
    padding: 6px;
    align-items: stretch;
    border-radius: 25px;
    justify-content: space-between;
    background-color: #fff;
    & .like_history {
      color: #fff;
      background-color: #9f085f;
      width: 100%;
      padding: 6px 4px;
      border-radius: 25px;
      display: inline-flex;
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-pack: center;
      justify-content: center;
      position: relative;
      box-sizing: border-box;
      -webkit-tap-highlight-color: transparent;

      outline: 0px;
      border: 0px;
      margin: 0px;
      cursor: pointer;
      user-select: none;
      vertical-align: middle;
      appearance: none;
      text-decoration: none;
      font-family: Roboto, Helvetica, Arial, sans-serif;
      font-weight: 500;
      font-size: 0.875rem;
      line-height: 1.75;
      letter-spacing: 0.02857em;
      text-transform: uppercase;
      min-width: 64px;

      & .title {
        font-size: 12px;
        text-align: center;
        font-weight: 700;
        line-height: 24px;
        margin: 0px;
      }
    }
    & .like_history.noChoose {
      color: #9f085f;
      background-color: #fff;
    }
    & .all_history {
      color: #9f085f !important;
      background-color: #fff !important;
      width: 100%;
      padding: 6px 4px;
      border-radius: 25px;
      display: inline-flex;
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-pack: center;
      justify-content: center;
      position: relative;
      box-sizing: border-box;
      -webkit-tap-highlight-color: transparent;
      background-color: transparent;
      outline: 0px;
      border: 0px;
      margin: 0px;
      cursor: pointer;
      user-select: none;
      vertical-align: middle;
      appearance: none;
      text-decoration: none;
      font-family: Roboto, Helvetica, Arial, sans-serif;
      font-weight: 500;
      font-size: 0.875rem;
      line-height: 1.75;
      letter-spacing: 0.02857em;
      text-transform: uppercase;
      min-width: 64px;
      padding: 6px 8px;
      border-radius: 4px;
      transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      color: rgb(230, 80, 120);
      & .title {
        font-size: 12px;
        text-align: center;
        font-weight: 700;
        line-height: 24px;
        margin: 0px;
      }
    }
  }
}
</style>
