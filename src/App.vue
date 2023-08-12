<template>
  <InternalErrorView v-if="app.isError.value" />
  <RouterView v-else />
</template>

<script setup lang="ts">
import { BaseComponent, defineClassComponent } from "./plugins/component.plugin";
import InternalErrorView from "@/views/Errors/InternalErrorView.vue";
import { RouterView } from "vue-router";
import { AppConst } from "./const/app.const";
import { GlobalEvent } from "./plugins/event.plugin";
import { useAuthStore } from "./stores/auth.store";

const app = defineClassComponent(
  class App extends BaseComponent {
    public authStore = useAuthStore();
    public isError = this.ref(false);

    public constructor() {
      super();

      this.onBeforeMount(() => {
        this.authStore.getAdminUser();
      });

      this.watch(
        () => this.route.fullPath,
        () => {
          this.isError.value = false;
        },
      );

      GlobalEvent.on(AppConst.EVENTS.internalError, () => {
        this.isError.value = true;
      });
    }
  },
);
</script>

<style lang="scss"></style>
