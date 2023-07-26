<template>
  <div class="footer">
    <div class="rule">
      <a target="_blank" href="https://www.haj.co.jp/rules/?mediaid=25">{{ app.t("jobsApp.footer.termOfService") }}</a>
      <a target="_blank" href="https://official.haj.co.jp/privacy-policy.html">{{
        app.t("jobsApp.footer.privacyPolicy")
      }}</a>
      <a target="_blank" href="https://official.haj.co.jp/social-media-policy.html">{{
        app.t("jobsApp.footer.socialMediaPolicy")
      }}</a>
    </div>
    <div class="rule">
      <a target="_blank" href="https://official.haj.co.jp/contact/">{{ app.t("jobsApp.footer.inquiry") }}</a>
      <a target="_blank" href="https://www.shufukita.jp/client.php">{{ app.t("jobsApp.footer.postingOnShufukita") }}</a>
    </div>
    <div class="license">
      <a target="_blank" href="https://official.haj.co.jp/">{{ app.t("jobsApp.footer.license.company") }}</a>
      <p>{{ app.t("jobsApp.footer.license.tittle") }}</p>
      <span>v1.0.7</span>
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
  & .rule {
    display: flex;
    margin-bottom: 15px;
    justify-content: center;
    & a {
      color: #000;
      font-size: 11px;
      font-weight: 400;
      line-height: 16px;
      margin-right: 25px;
    }
  }

  & .license {
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
