<template>
  <div class="header">
    <div class="first-header">
      <div class="logo text-header">
        <h4>Job Searchers</h4>
      </div>
      <div class="items">
        <div class="text-header items-home">
          <svg
            class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium jss71 css-vubbuv"
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            data-testid="HouseOutlinedIcon"
          >
            <path
              d="M19 9.3V4h-3v2.6L12 3 2 12h3v8h6v-6h2v6h6v-8h3l-3-2.7zM17 18h-2v-6H9v6H7v-7.81l5-4.5 5 4.5V18z"
            ></path>
            <path d="M10 10h4c0-1.1-.9-2-2-2s-2 .9-2 2z"></path>
          </svg>
          <span>{{ app.t("jobsApp.header.home") }}</span>
        </div>
        <div class="text-header items-history">
          <svg
            class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium jss71 css-vubbuv"
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            data-testid="HistoryIcon"
          >
            <path
              d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"
            ></path>
          </svg>
          <span>{{ app.t("jobsApp.header.history") }}</span>
        </div>
      </div>
    </div>
    <div class="second-header">
      <ul class="OK">
        <li class="ok" v-for="(n, index) in 3" :key="n">
          <i class="bi bi-check-circle-fill"></i>
          <p>{{ app.t(`jobsApp.header.secondHeader.${index}.title`) }}</p>
        </li>
      </ul>

      <span class="caption">{{ app.t("jobsApp.header.caption") }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { BaseComponent, defineClassComponent } from "@/plugins/component.plugin";

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
.first-header {
  height: 52px;
  display: flex;
  padding: 8px 16px;
  align-items: center;
  justify-content: space-between;
  background-color: #e65078;
  & .logo {
    color: #fff;
    min-width: 96px;
    border-radius: 8px;
    text-decoration: none;
  }
  & .text-header {
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }
  & .items {
    display: flex;
    align-items: center;
    justify-content: center;
    & .items-home {
      align-items: center;
      margin-left: 30px;
      flex-direction: column;
      justify-content: center;
      & .jss71 {
        color: #fff;
        width: 1em;
        height: 1em;
        font-size: 1.5rem;
      }
      & .css-vubbuv {
        user-select: none;
        width: 1em;
        height: 1em;
        display: inline-block;
        fill: currentcolor;
        flex-shrink: 0;
        transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        font-size: 1.5rem;
      }
      & span {
        color: #fff;
        font-size: 12px;
        font-weight: 400;
        line-height: 12px;
      }
    }
    & .items-history {
      align-items: center;
      margin-left: 30px;
      flex-direction: column;
      justify-content: center;
      & .jss71 {
        color: #fff;
        width: 1em;
        height: 1em;
        font-size: 1.5rem;
      }
      & .css-vubbuv {
        user-select: none;
        width: 1em;
        height: 1em;
        display: inline-block;
        fill: currentcolor;
        flex-shrink: 0;
        transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        font-size: 1.5rem;
      }
      & span {
        color: #fff;
        font-size: 12px;
        font-weight: 400;
        line-height: 12px;
      }
    }
  }
}
.second-header {
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
</style>
