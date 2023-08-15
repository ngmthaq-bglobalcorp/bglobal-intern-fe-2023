<template>
  <div class="loading-overlay" :class="{ loading: props.isLoading }">
    <div class="loading-spinner"></div>
  </div>
</template>

<script setup lang="ts">
import { BaseComponent, defineClassComponent } from "@/plugins/component.plugin";
import type { LoadingProps } from "./LoadingComponent";

const props = defineProps<LoadingProps>();

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

.loading-overlay {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba($white, 0.6);
  z-index: 9999;

  &.loading {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & .loading-spinner {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 4px solid #ddd;
    border-top-color: #e65078;
    animation: spin 1s ease-in-out infinite;
  }
}

@keyframes spin {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
