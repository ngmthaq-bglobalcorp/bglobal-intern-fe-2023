<template>
  <div class="footer">
    <div class="rule">
      <a target="_blank" href="" class="link">{{ app.t("jobsApp.footer.termOfService") }}</a>
      <a target="_blank" href="" class="link">{{ app.t("jobsApp.footer.privacyPolicy") }}</a>
      <a target="_blank" href="" class="link">{{ app.t("jobsApp.footer.socialMediaPolicy") }}</a>
    </div>
    <div class="rule">
      <a target="_blank" href="" class="link">{{ app.t("jobsApp.footer.inquiry") }}</a>
      <a target="_blank" href="" class="link">{{ app.t("jobsApp.footer.postingOnShufukita") }}</a>
    </div>
    <div class="license">
      <a target="_blank" href="" class="link">{{ app.t("jobsApp.footer.license.company") }}</a>
      <span class="license-title">{{ app.t("jobsApp.footer.license.title") }}</span>
      <span class="version">{{ app.t("jobsApp.footer.version") }}</span>
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
  margin-top: 3rem;

  & .rule {
    display: flex;
    margin-bottom: 1rem;
    justify-content: center;

    & .link {
      color: #000;
      font-size: 0.6875rem;
      font-weight: 400;
      line-height: 1rem;
      margin-right: 1.5rem;
    }
  }

  & .license {
    padding: 0.625rem;
    background: #e65078;
    text-align: center;

    & .link {
      color: black;
      display: block;
      font-size: 0.625rem;
      font-weight: 400;
      line-height: 0.75rem;
    }

    & .license-title {
      color: #fff;
      font-size: 0.5625rem;
      font-weight: 400;
      line-height: 0.75rem;
      padding-top: 6px;
    }

    & .version {
      display: block;
      font-size: 0.6875rem;
      text-align: right;
      font-weight: 400;
      line-height: 0.75rem;
    }
  }
}
</style>
