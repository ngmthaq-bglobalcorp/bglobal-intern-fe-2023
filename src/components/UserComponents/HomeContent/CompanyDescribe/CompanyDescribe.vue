<template>
  <div class="company-describe">
    <p class="describe">{{ app.t("jobsApp.companyDescribe.describe") }}</p>
    <p class="we-will-help">
      We will help and support you with your concerns. It doesn't matter if you're having trouble finding a job,
      worrying about it, or even something trivial. You can consult either face-to-face interview, web remote interview,
      or both.
    </p>
    <a
      class="click"
      tabindex="0"
      href="https://secure.haj.co.jp/event/saposen-haj/?mediaid=25&amp;application=pwa"
      target="_blank"
      >{{ app.t("jobsApp.companyDescribe.link") }}<span class="MuiTouchRipple-root css-w0pj6f"></span
    ></a>
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
.company-describe {
  margin-top: 30px;
  & .describe {
    color: #000;
    font-size: 18px;
    font-weight: 900;
    line-height: 26px;
    letter-spacing: 0.00938em;
  }
  & .we-will-help {
    color: #000;
    font-size: 11px;
    margin-top: 6px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0.00938em;
  }
  & .click {
    height: 42px;
    background: linear-gradient(180deg, #e65078 0%, #c0296b 100%);
    box-shadow: 0px 4px 8px rgba(157, 6, 95, 0.3);
    margin-top: 10px;
    border-radius: 30px;
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
    padding: 6px 16px;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    color: rgb(255, 255, 255);
    background-color: rgb(230, 80, 120);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px,
      rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;
    width: 100%;
  }
}
</style>
