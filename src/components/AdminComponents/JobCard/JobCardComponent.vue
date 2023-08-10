<template>
  <div class="job-card-container">
    <!-- Card -->
    <div class="job-wrapper" @click="app.onClickCard(app.job.value.id)">
      <div class="job-header">
        <img :src="app.job.value.mainImageUrl" alt="Main image" class="main-img" v-if="app.job.value.mainImageUrl" />
        <img
          :src="app.job.value.subImages[0].url"
          alt="Main image"
          class="main-img"
          v-else-if="app.job.value.subImages.length > 0"
        />
        <h2 class="job-title">{{ app.job.value.title }}</h2>
      </div>
      <div class="job-body">
        <ul class="body-info list">
          <li class="info-detail" v-if="app.job.value.location.name">
            <i class="bi bi-geo-alt icon"></i>
            {{ app.job.value.location.name }}
          </li>
          <li class="info-detail" v-if="app.job.value.salary">
            <i class="bi bi-cash icon"></i>
            {{ PrimitiveHelper.getSalary(app.job.value.salary) }}
          </li>
          <li class="info-detail" v-if="app.job.value.workingHours.length > 0">
            <i class="bi bi-clock icon"></i>
            {{ PrimitiveHelper.getWorkingHours(app.job.value.workingHours) }}
          </li>
        </ul>
        <div class="body-desc" v-if="app.job.value.catchText">
          {{ app.job.value.catchText }}
        </div>
      </div>
      <div class="job-footer">
        <ul class="footer-label list" v-if="app.job.value.searchLabels.length > 0">
          <li class="search-label" v-for="label in app.job.value.searchLabels" :key="label.id">{{ label.name }}</li>
        </ul>
        <div class="opens-expires" v-if="app.job.value.opensAt && app.job.value.expiresAt">
          <span>
            {{ PrimitiveHelper.getPostPeriod(app.job.value.opensAt, app.job.value.expiresAt) }}
          </span>
        </div>
      </div>
    </div>
    <!-- End Card -->

    <!-- Buttons -->
    <div class="job-button-wrapper">
      <div class="job-button">
        <button class="update-btn action-btn g-btn" @click="app.onToggleUpdateButton(app.job.value.id)">
          <i class="bi bi-person-fill-gear icon"></i>
          {{ app.t(`app.update`) }}
        </button>
      </div>
      <div class="job-button">
        <button class="delete-btn action-btn g-btn" @click="app.onToggleDeleteButton(app.job.value.id)">
          <i class="bi bi-trash icon"></i>
          {{ app.t(`app.delete`) }}
        </button>
      </div>
    </div>
    <!-- End Buttons -->
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
    public job: Ref<JobModel> = this.computed(() => props.data);

    public constructor() {
      super();
    }

    public onClickCard = (id: number) => {
      emits("onClickCard", id);
    };

    public onToggleUpdateButton = (id: number) => {
      emits("onToggleUpdateButton", id);
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

  &:hover {
    box-shadow: 0 0.1875rem 0.75rem rgba(140, 152, 164, 0.25);
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

  & .job-button-wrapper {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    border-top: 0.0625rem solid rgba($border, 0.7);

    & .job-button {
      flex: 1;
      border-right: 0.0625rem solid rgba($border, 0.7);

      &:last-child {
        border-right: 0;
      }

      & .action-btn {
        background-color: transparent;
        border: none;
        padding: 1rem;

        &:hover {
          &.update-btn {
            color: $blue;
          }

          &.delete-btn {
            color: $danger;
          }
        }
      }
    }
  }
}
</style>
