<template>
  <div class="job-card-container">
    <button class="delete-btn icon-btn" @click="app.onToggleDeleteButton(app.job.value.id)">
      <i class="bi bi-trash icon"></i>
    </button>
    <!-- Card -->
    <div class="job-wrapper" @click="app.onClickCard(app.job.value.id)">
      <div class="job-header">
        <img :src="app.job.value.mainImageUrl" :alt="app.job.value.mainImageDesc" class="main-img" />
        <h2 class="job-title">{{ app.job.value.title }}</h2>
      </div>
      <div class="job-body">
        <ul class="body-info list">
          <li class="info-detail">
            <i class="bi bi-geo-alt icon"></i>
            {{ app.job.value.location }}
          </li>
          <li class="info-detail">
            <i class="bi bi-cash icon"></i>
            {{ PrimitiveHelper.getSalary(app.job.value.salary) }}
          </li>
          <li class="info-detail">
            <i class="bi bi-clock icon"></i>
            {{ PrimitiveHelper.getWorkingHours(app.job.value.workingHours) }}
          </li>
        </ul>
        <div class="body-desc">
          {{ app.job.value.catchText }}
        </div>
      </div>
      <div class="job-footer">
        <ul class="footer-label list">
          <li class="search-label" v-for="label in app.job.value.searchLabels" :key="label">{{ label }}</li>
        </ul>
        <div class="opens-expires">
          <span>
            {{ PrimitiveHelper.getPostPeriod(app.job.value.opensAt, app.job.value.expiresAt) }}
          </span>
        </div>
      </div>
    </div>
    <!-- End Card -->
  </div>
</template>

<script setup lang="ts">
import { BaseComponent, defineClassComponent } from "@/plugins/component.plugin";
import { PrimitiveHelper } from "@/helpers/primitive.helper";
import type { JobCardEmits, JobCardProps } from "./JobCardComponent";
import type { Ref } from "vue";
import type { JobModel } from "@/models/job.model";

const props = defineProps<JobCardProps>();
const emits = defineEmits<JobCardEmits>();

const app = defineClassComponent(
  class Component extends BaseComponent {
    public job: Ref<JobModel> = this.computed(() => props.job);

    public constructor() {
      super();
    }

    public onClickCard = (id: number) => {
      emits("onClickCard", id);
    };

    public onToggleDeleteButton = (id: number) => {
      emits("onToggleDeleteButton", id);
    };
  },
);
</script>

<style scoped lang="scss">
@import "@/assets/scss/modules";
@import "@/assets/scss/admin";

.job-card-container {
  position: relative;
  background-color: $white;
  border: 0.0625rem solid rgba($border, 0.7);
  border-radius: 0.75rem;
  box-shadow: 0 0.375rem 0.75rem rgba(140, 152, 164, 0.075);
  transition: 0.3s;
  cursor: pointer;

  & .delete-btn {
    display: none;
    position: absolute;
    top: 0;
    right: 0;

    &:hover {
      color: $danger;
      background-color: $white;
    }
  }

  &:hover {
    box-shadow: 0 0.1875rem 0.75rem rgba(140, 152, 164, 0.25);

    & .delete-btn {
      display: block;
    }
  }

  & .job-wrapper {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding: 1.3125rem;

    & .job-header {
      display: flex;
      flex-direction: column;
      align-items: center;

      & .main-img {
        height: 6rem;
        width: auto;
        border-radius: 0.5rem;
        margin-bottom: 0.5rem;
      }

      & .job-title {
        color: $dark;
        font-size: 1.3125rem;
        font-weight: 600;
        line-height: 1.2;
        margin-bottom: 1.5rem;
      }
    }

    & .job-body {
      margin-bottom: 1.5rem;

      & .body-info {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        margin-bottom: 1rem;

        & .info-detail {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          margin-bottom: 0.25rem;

          & .icon {
            font-size: 1rem;
            margin-right: 0.5rem;
          }
        }
      }

      & .body-desc {
        display: block;
      }
    }

    & .job-footer {
      display: flex;
      flex-direction: column;
      align-items: center;

      & .footer-label {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;

        & .search-label {
          color: $blue-light;
          font-size: 0.8125rem;
          border: 0.0625rem solid $blue-light;
          border-radius: 0.5rem;
          padding: 0 0.5rem;
        }
      }

      & .opens-expires {
        margin-top: 0.5rem;
      }
    }
  }
}
</style>
