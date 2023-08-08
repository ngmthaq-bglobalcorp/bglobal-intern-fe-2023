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
        <ul class="job-info list">
          <li class="info-detail" v-if="app.job.value.location">
            <i class="bi bi-geo-alt icon"></i>
            {{ app.job.value.location }}
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
        <div class="job-label" v-if="app.job.value.searchLabels.length > 0">
          <ul class="search-label list">
            <li class="search-item" v-for="label in app.job.value.searchLabels" :key="label">{{ label }}</li>
          </ul>
        </div>
        <div class="job-text">
          <span class="catch-text" v-if="app.job.value.catchText">{{ app.job.value.catchText }}</span>
          <span class="lead-text" v-if="app.job.value.leadText">{{ app.job.value.leadText }}</span>
        </div>
        <div class="job-subimage" v-if="app.job.value.subImages.length > 0">
          <ul class="subimages-list list">
            <li class="subimage-item" v-for="subImage in app.job.value.subImages" :key="subImage.id">
              <img :src="subImage.url" alt="Sub Image" class="sub-img" />
              <span class="desc">{{ subImage.description }}</span>
            </li>
          </ul>
        </div>
        <ul class="job-properties list" v-if="app.job.value.properties.length > 0">
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
        <ul class="job-post-scripts list" v-if="app.job.value.postScripts.length > 0">
          <li class="post-scripts-item" v-for="post in app.job.value.postScripts" :key="post.id">
            <i class="bi bi-star icon"></i>
            <span class="body">{{ post.body }}</span>
          </li>
        </ul>
        <div class="job-photo-gallery" v-if="app.job.value.photoGallery.length > 0">
          <ul class="photo-gallery-list list">
            <li class="photo-gallery-item" v-for="photo in app.job.value.photoGallery" :key="photo.id">
              <img :src="photo.url" alt="Photo gallery" class="gallery-img" />
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

      & .job-info,
      & .job-text,
      & .job-properties,
      & .job-post-scripts {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        margin-bottom: 1.5rem;
      }

      & .job-info {
        & .info-detail {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          font-weight: 600;
          margin-bottom: 0.25rem;

          & .icon {
            font-size: 1rem;
            margin-right: 0.5rem;
          }
        }
      }

      & .job-label,
      & .job-subimage,
      & .job-photo-gallery {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 1.5rem;
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
      }

      & .job-subimage,
      & .job-photo-gallery {
        border: 0.0625rem solid rgba($border, 0.7);
        border-left: 0;
        border-right: 0;
        padding: 1.5rem 0;

        & .subimages-list,
        & .photo-gallery-list {
          display: grid;
          grid-template-columns: auto auto auto;
          gap: 1rem;

          & .subimage-item,
          & .photo-gallery-item {
            width: auto;
            max-width: 15rem;
            display: flex;
            flex-direction: column;

            & .sub-img,
            & .gallery-img {
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
