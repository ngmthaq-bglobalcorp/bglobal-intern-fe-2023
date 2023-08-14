<template>
  <div class="first-header">
    <div class="logo text-header">
      <h4>Job Searchers</h4>
    </div>
    <div class="items">
      <div class="text-header items-home">
        <RouterLink to="/" class="item-link">
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
        </RouterLink>
      </div>
      <div class="text-header items-history">
        <RouterLink to="user/history" class="item-link">
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
        </RouterLink>
      </div>
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
  position: relative;
  z-index: 999;
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
      & .item-link {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-decoration: none !important;
        color: #fff !important;

        & .jss71 {
          // color: #fff;
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
          // color: #fff;
          font-size: 12px;
          font-weight: 400;
          line-height: 12px;
        }
      }
    }

    & .items-history {
      & .item-link {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-decoration: none !important;
        color: #fff !important;
        margin-left: 30px;

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
}
</style>
