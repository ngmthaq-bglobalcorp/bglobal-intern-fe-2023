<template>
  <UserLayout>
    <div class="body">
      <div class="history_list">
        <button
          type="button"
          class="history_button"
          :class="{ active: app.likeList.value }"
          tabindex="0"
          @click="app.onChangeLikeList()"
        >
          <i class="bi bi-arrow-down icon" v-if="app.likeList.value"></i>
          <i class="bi bi-arrow-right icon" v-else></i>
          <span class="title">Liked jobs</span>
        </button>
        <button
          type="button"
          class="history_button"
          :class="{ active: !app.likeList.value }"
          tabindex="0"
          @click="app.onChangeHistoryList()"
        >
          <i class="bi bi-arrow-down icon" v-if="!app.likeList.value"></i>
          <i class="bi bi-arrow-right icon" v-else></i>
          <span class="title">All jobs</span>
        </button>
      </div>
      <HistoryJobs />
    </div>
  </UserLayout>
</template>

<script setup lang="ts">
import { BaseComponent, defineClassComponent } from "@/plugins/component.plugin";
import UserLayout from "@/layouts/UserLayout/UserLayout.vue";
import HistoryJobs from "@/components/UserComponents/HistoryJobs/HistoryJobs.vue";
import type { Ref } from "vue";

const app = defineClassComponent(
  class Component extends BaseComponent {
    public likeList: Ref<boolean> = this.ref(true);
    public constructor() {
      super();
    }

    public onChangeLikeList() {
      this.likeList.value = true;
    }

    public onChangeHistoryList() {
      this.likeList.value = false;
    }
  },
);
</script>

<style scoped lang="scss">
@import "@/assets/scss/modules";

.body {
  height: calc(100vh - 52px);
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

    & .history_button {
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
      transition: all 500ms ease-in-out 0ms;
      color: #9f085f;

      &:first-child {
        margin-right: 2px;
      }

      & .icon {
        margin-right: 0.5rem;
      }

      & .title {
        font-size: 12px;
        text-align: center;
        font-weight: 700;
        line-height: 24px;
        margin: 0px;
        letter-spacing: 0.02857em;
        text-transform: uppercase;
      }

      &.active {
        color: #fff !important;
        background-color: #9f085f !important;
      }
    }
  }
}
</style>
