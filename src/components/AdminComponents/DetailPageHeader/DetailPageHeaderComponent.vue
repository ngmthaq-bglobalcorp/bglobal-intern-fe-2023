<template>
  <div class="detail-page-header-container">
    <div class="page-header-wrapper">
      <div class="page-header">
        <div class="header-avatar">
          <img :src="app.data.value.mainImageUrl" :alt="app.data.value.mainImageDesc" class="avatar-img" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { BaseComponent, defineClassComponent } from "@/plugins/component.plugin";
import type { DetailPageHeaderProps } from "./DetailPageHeaderComponent";
import type { Ref } from "vue";
import type { JobModel } from "@/models/job.model";

const props = defineProps<DetailPageHeaderProps>();

const app = defineClassComponent(
  class Component extends BaseComponent {
    public data: Ref<JobModel> = this.ref(props.data);

    public constructor() {
      super();
    }
  },
);
</script>

<style scoped lang="scss">
@import "@/assets/scss/modules";
@import "@/assets/scss/admin";

.detail-page-header-container {
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

      & .add-btn {
        & i {
          margin-right: 0.25rem;
        }
      }
    }
  }
}
</style>
