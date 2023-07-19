<template>
  <div class="header">
    <div class="first-header">
      <div class="logo jss69">
        <h4>Job Searchers</h4>
      </div>
      <div class="items">
        <div class="jss69 items-home">
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
          <span>Home</span>
        </div>
        <div class="jss69 items-history">
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
          <span>History</span>
        </div>
      </div>
    </div>
    <div class="second-header">
      <div class="tick">
        <div class="OK">
          <svg
            class="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06"
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            data-testid="CheckCircleIcon"
          >
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
            ></path>
          </svg>
          <h6 class="jss67 css-c7dfze">Sudden rest</h6>
        </div>
        <div class="OK">
          <svg
            class="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06"
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            data-testid="CheckCircleIcon"
          >
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
            ></path>
          </svg>
          <h6 class="jss67 css-c7dfze">Workplace tour</h6>
        </div>
        <div class="OK">
          <svg
            class="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06"
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            data-testid="CheckCircleIcon"
          >
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
            ></path>
          </svg>
          <h6 class="jss67 css-c7dfze">No overtime principle</h6>
        </div>
      </div>
      <span class="caption css-1v2gfp5">Carefully selected only the work!</span>
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
  & .jss69 {
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
  & .tick {
    display: flex;
    align-items: center;
    justify-content: center;
    & .OK {
      color: #fff;
      display: flex;
      align-items: center;
      margin-right: 8px;
      justify-content: center;
      & .css-1k33q06 {
        user-select: none;
        width: 1em;
        height: 1em;
        display: inline-block;
        fill: currentcolor;
        flex-shrink: 0;
        transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        font-size: 1.25rem;
      }
      & .jss67 {
        font-size: 12px;
        font-weight: 700;
        line-height: 17px;
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
