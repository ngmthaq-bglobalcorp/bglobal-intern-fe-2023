<template>
  <div class="footer">
    <div class="jss192">
      <a class="MuiBox-root css-vzymix" target="_blank" href="https://www.haj.co.jp/rules/?mediaid=25"
        >Term of service</a
      >
      <a class="MuiBox-root css-vzymix" target="_blank" href="https://official.haj.co.jp/privacy-policy.html"
        >Privacy policy</a
      >
      <a class="MuiBox-root css-0" target="_blank" href="https://official.haj.co.jp/social-media-policy.html"
        >Social media policy</a
      >
    </div>
    <div class="jss192">
      <a class="MuiBox-root css-vzymix" target="_blank" href="https://official.haj.co.jp/contact/">Inquiry</a>
      <a class="MuiBox-root css-0" target="_blank" href="https://www.shufukita.jp/client.php">Posting on Shufukita</a>
    </div>
    <div class="jss193">
      <a class="MuiBox-root css-0" target="_blank" href="https://official.haj.co.jp/"
        >HAJ Co., Ltd. Hokkaido part-time job information company</a
      >
      <p class="MuiTypography-root MuiTypography-body1 css-9l3uo3">
        (c) Hokkaido Arbeit Johosha co.,ltd. All Rights Reserved.
      </p>
      <span class="MuiBox-root css-0">v1.0.7</span>
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

.footer {
  margin-top: 45px;
  & .jss192 {
    display: flex;
    margin-bottom: 15px;
    justify-content: center;
    & a {
      color: #000;
      font-size: 11px;
      font-weight: 400;
      line-height: 16px;
    }
    & .css-vzymix {
      margin-right: 25px;
    }
  }
  & .jss193 {
    padding: 10px;
    background: #e65078;
    & a {
      color: black;
      display: block;
      font-size: 10px;
      text-align: center;
      font-weight: 400;
      line-height: 12px;
    }
    & p {
      color: #fff;
      font-size: 9px;
      text-align: center;
      font-weight: 400;
      line-height: 11px;
      padding-top: 6px;
    }
    & span {
      display: block;
      font-size: 11px;
      text-align: right;
      font-weight: 400;
      line-height: 13px;
    }
  }
}
</style>
