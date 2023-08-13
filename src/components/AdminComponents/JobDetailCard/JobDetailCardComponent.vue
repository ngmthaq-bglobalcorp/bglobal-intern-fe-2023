<template>
  <!-- Card -->
  <div class="job-detail-card-container custom-card">
    <!-- Infomation -->
    <div class="job-wrapper">
      <div class="job-header" v-if="app.job.value.mainImageUrl">
        <img :src="app.job.value.mainImageUrl" :alt="app.job.value.mainImageDesc" class="main-img" />
      </div>
      <div class="job-body">
        <div class="job-opens-expires">
          <span>
            {{ PrimitiveHelper.getPostPeriod(app.job.value.opensAt, app.job.value.expiresAt) }}
          </span>
        </div>
        <div class="job-title" v-if="app.job.value.title">
          <h2 class="title">{{ app.job.value.title }}</h2>
        </div>
        <ul class="job-info job-flex list">
          <li class="info-detail" v-if="app.job.value.location.name">
            <i class="bi bi-geo-alt icon"></i>
            {{ app.job.value.location.name }}
          </li>
          <li class="info-detail" v-if="app.job.value.salary > 0">
            <i class="bi bi-cash icon"></i>
            {{ PrimitiveHelper.getSalary(app.job.value.salary) }}
          </li>
          <li class="info-detail" v-if="app.job.value.workingHours.length > 0">
            <i class="bi bi-clock icon"></i>
            {{ PrimitiveHelper.getWorkingHours(app.job.value.workingHours) }}
          </li>
        </ul>
        <div class="job-label job-flex job-center" v-if="app.job.value.searchLabels.length > 0">
          <ul class="search-label list">
            <li class="search-item" v-for="label in app.job.value.searchLabels" :key="label.id">{{ label.name }}</li>
          </ul>
        </div>
        <div class="job-text job-flex job-border-bottom">
          <span class="catch-text" v-if="app.job.value.catchText">{{ app.job.value.catchText }}</span>
          <span class="lead-text" v-if="app.job.value.leadText">{{ app.job.value.leadText }}</span>
        </div>
        <div class="job-photo-wrapper job-flex job-center job-border-bottom" v-if="app.job.value.subImages.length > 0">
          <ul class="photo-list list">
            <li class="photo-item" v-for="subImage in app.job.value.subImages" :key="subImage.id">
              <img :src="subImage.url" alt="Sub Image" class="photo" />
              <span class="desc">{{ subImage.description }}</span>
            </li>
          </ul>
        </div>
        <ul class="job-properties job-flex job-border-bottom list" v-if="app.job.value.properties.length > 0">
          <li
            class="properties-item"
            v-for="property in app.job.value.properties"
            :key="property.id"
            v-show="property.is_displayed"
          >
            <span class="title">[{{ property.title }}]</span>
            <span class="body">{{ property.body }}</span>
          </li>
        </ul>
        <ul class="job-post-scripts job-flex job-border-bottom list" v-if="app.job.value.postScripts.length > 0">
          <li class="post-scripts-item" v-for="post in app.job.value.postScripts" :key="post.id">
            <i class="bi bi-star icon"></i>
            <span class="body">{{ post.body }}</span>
          </li>
        </ul>
        <div
          class="job-photo-wrapper job-flex job-center job-border-bottom"
          v-if="app.job.value.photoGallery.length > 0"
        >
          <ul class="photo-list list">
            <li class="photo-item" v-for="photo in app.job.value.photoGallery" :key="photo.id">
              <img :src="photo.url" alt="Photo gallery" class="photo" />
              <span class="desc">{{ photo.description }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- End Infomation -->

    <!-- User Activity -->
    <div class="activity-wrapper">
      <slot></slot>
    </div>
    <!-- End User Activity -->
  </div>
  <!-- End Card -->
</template>

<script setup lang="ts">
import { BaseComponent, defineClassComponent } from "@/plugins/component.plugin";
import { PrimitiveHelper } from "@/helpers/primitive.helper";
import type { Ref } from "vue";
import type { JobDetailCardProps } from "./JobDetailCardComponent";
import type { JobModel } from "@/models/job.model";

const props = defineProps<JobDetailCardProps>();

const app = defineClassComponent(
  class Component extends BaseComponent {
    public job: Ref<JobModel> = this.computed(() => props.data);

    public constructor() {
      super();
    }
  },
);
</script>

<style scoped lang="scss">
@import "@/assets/scss/modules";
@import "@/assets/scss/admin";

.job-detail-card-container {
  display: flex;
  flex-direction: row !important;

  & .job-wrapper {
    flex: 3;
    padding: 2.625rem;

    & .job-header {
      text-align: center;
      margin-bottom: 1.5rem;

      & .main-img {
        width: 60%;
        height: auto;
        object-fit: cover;
        border-radius: 0.5rem;
      }
    }

    & .job-body {
      & .job-flex {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        margin-bottom: 1.5rem;
      }

      & .job-center {
        align-items: center;
      }

      & .job-border-bottom {
        border-bottom: 0.0625rem solid rgba($border, 0.7);
      }

      & .job-opens-expires {
        font-size: 0.875rem;
      }

      & .job-title {
        font-size: 1.3125rem;
        font-weight: 600;
        line-height: 1.2;
        color: $dark;
        margin-bottom: 1.5rem;
      }

      & .job-info {
        & .info-detail {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          color: $black;
          margin-bottom: 0.25rem;

          & .icon {
            font-size: 1rem;
            margin-right: 0.5rem;
          }
        }
      }

      & .job-label {
        & .search-label {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;

          & .search-item {
            color: $blue-light;
            font-size: 0.8125rem;
            border: 0.0625rem solid $blue-light;
            border-radius: 0.5rem;
            padding: 0 0.5rem;
          }
        }
      }

      & .job-text {
        & .catch-text {
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        & .lead-text {
          margin-bottom: 0.5rem;
        }
      }

      & .job-photo-wrapper {
        border-bottom: 0.0625rem solid rgba($border, 0.7);
        padding: 1.5rem 0;

        & .photo-list {
          display: grid;
          grid-template-columns: auto auto auto;
          gap: 1rem;

          & .photo-item {
            width: auto;
            max-width: 15rem;
            display: flex;
            flex-direction: column;

            & .photo {
              width: 100%;
              height: 100%;
              object-fit: cover;
              border: 0.0625rem solid rgba($border, 0.3);
            }
          }
        }
      }

      & .job-properties {
        & .properties-item {
          display: flex;
          flex-direction: column;
          margin-bottom: 0.5rem;

          & .title {
            font-weight: 600;
            margin-bottom: 0.25rem;
          }
        }
      }

      & .job-post-scripts {
        & .post-scripts-item {
          display: flex;
          align-items: start;
          margin-bottom: 0.5rem;

          & .icon {
            font-size: 1rem;
            margin-right: 0.5rem;
          }
        }
      }
    }
  }

  & .activity-wrapper {
    flex: 1;
    padding: 1.3125rem;
    border-left: 0.0625rem solid rgba($border, 0.7);
  }
}
</style>
