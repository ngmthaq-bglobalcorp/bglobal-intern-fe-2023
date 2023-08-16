<template>
  <div class="waiting-overlay" :class="{ waiting: props.isWaiting }">
    <div class="content">
      <img class="logo" src="@/assets/img/logo.svg" alt="Logo" />
      <h1 class="title">Please Wait</h1>
      <div class="waiting-animation">
        <div class="dot dot-1"></div>
        <div class="dot dot-2"></div>
        <div class="dot dot-3"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { BaseComponent, defineClassComponent } from "@/plugins/component.plugin";
import type { WaitingProps } from "./WaitingComponent";

const props = defineProps<WaitingProps>();

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

.waiting-overlay {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba($white, 0.6);
  z-index: 9999;

  &.waiting {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & .content {
    text-align: center;

    & .logo {
      width: 100px;
      height: auto;
    }

    & .title {
      font-size: 32px;
      margin-top: 24px;
      color: #333;
    }

    & .waiting-animation {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
      margin: 24px auto;

      & .dot {
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background-color: $primary;
        margin: 0 4px;
        opacity: 0;
        animation: dot-pulse 1s infinite;

        &.dot-1 {
          animation-delay: 0s;
        }

        &.dot-2 {
          animation-delay: 0.2s;
        }

        &.dot-3 {
          animation-delay: 0.4s;
        }
      }
    }
  }
}

@keyframes dot-pulse {
  0% {
    opacity: 0;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.5);
  }
  100% {
    opacity: 0;
    transform: scale(1);
  }
}
</style>
