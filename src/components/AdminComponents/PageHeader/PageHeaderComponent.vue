<template>
  <div class="page-header-container">
    <div class="header-wrapper">
      <div class="header-nav">
        <router-link :to="PathConst.adminDashboard" class="link">{{ app.t(`app.dashboard`) }}</router-link>
        <span>/</span>
        <router-link to="" class="link active">{{ props.target }}</router-link>
      </div>
      <div class="header-title">
        <h1>{{ props.target }}</h1>
        <template v-if="props.button || props.icon">
          <button class="header-btn small-btn primary-btn" @click="app.onToggleButton">
            <i :class="['bi', props.icon]"></i>
            {{ props.button }}
          </button>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { BaseComponent, defineClassComponent } from "@/plugins/component.plugin";
import { PathConst } from "@/const/path.const";
import type { PageHeaderEmits, PageHeaderProps } from "./PageHeaderComponent";

const props = defineProps<PageHeaderProps>();
const emits = defineEmits<PageHeaderEmits>();

const app = defineClassComponent(
  class Component extends BaseComponent {
    public constructor() {
      super();
    }

    public onToggleButton = () => {
      emits("onToggleButton");
    };
  },
);
</script>

<style scoped lang="scss">
@import "@/assets/scss/modules";
@import "@/assets/scss/admin";

.page-header-container {
  border-bottom: 0.0625rem solid $border;
  padding-bottom: 2rem;
  margin-bottom: 2.25rem;

  & .header-wrapper {
    display: flex;
    flex-direction: column;

    & .header-nav {
      color: $gray;

      & span {
        margin: 0 0.5rem;
      }

      & .link {
        color: $gray !important;

        &:hover {
          color: $blue !important;
        }

        &.active {
          color: $dark !important;
          cursor: default;
        }
      }
    }

    & .header-title {
      display: flex;
      align-items: center;
      justify-content: space-between;

      & h1 {
        color: $dark;
        font-size: 1.4109375rem;
        font-weight: 600;
        line-height: 1.2;
      }

      & .header-btn {
        & i {
          margin-right: 0.25rem;
        }
      }
    }
  }
}
</style>
