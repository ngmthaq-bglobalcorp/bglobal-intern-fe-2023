import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import UnitTestComponentVue from "@/components/UnitTestComponent.vue";
import { router } from "@/plugins/router.plugin";
import { pinia } from "@/plugins/store.plugin";
import { i18n } from "@/plugins/i18n.plugin";

describe("UnitTestComponent", () => {
  it("Render and check props", () => {
    const wrapper = shallowMount(UnitTestComponentVue, {
      props: {
        msg: "Test",
      },
      global: {
        plugins: [pinia, router, i18n],
      },
    });
    expect(wrapper.text()).toContain("Unit Test");
  });
});
