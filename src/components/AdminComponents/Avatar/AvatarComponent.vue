<template>
  <div class="avatar-container">
    <div class="avatar-wrapper">
      <img :src="props.avatarImage" :alt="props.avatarAlt" class="avatar-img image" v-if="props.avatarImage" />
      <span class="avatar-initials" v-else>{{ props.avatarInit }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { BaseComponent, defineClassComponent } from "@/plugins/component.plugin";
import type { AvatarProps } from "./AvatarComponent";

const props = defineProps<AvatarProps>();

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
@import "@/assets/scss/admin";

.avatar-container {
  -ms-flex-negative: 0 !important;
  flex-shrink: 0 !important;

  & .avatar-wrapper {
    position: relative;
    display: inline-flex;
    width: 2.625rem;
    height: 2.625rem;
    background-color: $light;
    border-radius: 50%;

    & .avatar-initials {
      display: flex;
      justify-content: center;
      align-items: center;
      color: $primary !important;
      width: inherit;
      height: inherit;
      font-size: 0.875rem;
      font-weight: 600;
      pointer-events: none;
      text-transform: uppercase;
      border-radius: 50%;
    }
  }
}
</style>
