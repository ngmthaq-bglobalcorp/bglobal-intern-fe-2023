<template>
  <div class="detail-page-header-container">
    <div class="page-header-wrapper">
      <!-- Page Header -->
      <div class="page-header">
        <!-- Avatar -->
        <div class="header-avatar">
          <img
            :src="app.job.value.mainImageUrl"
            alt="Main image"
            class="avatar-img"
            v-if="app.job.value.mainImageUrl"
          />
          <img
            :src="app.job.value.subImages[0].url"
            alt="Main image"
            class="avatar-img"
            v-else-if="app.job.value.subImages.length > 0"
          />
        </div>
        <!-- End Avatar -->
        <div class="header-info">
          <div class="info-title">{{ app.job.value.title }}</div>
          <ul class="info-list list">
            <li class="info-item" v-for="item in app.infoList.value" :key="item.id">
              <span class="first" v-if="item.title">{{ item.title }}:</span>
              <span v-if="item.desc">{{ item.desc }}</span>
            </li>
          </ul>
        </div>
      </div>
      <!-- End Page Header -->

      <!-- Nav -->
      <div class="page-nav">
        <ul class="nav-list list">
          <li class="nav-item" v-for="item in app.navList.value" :key="item.name">
            <template v-if="item.isDisplayed">
              <router-link
                :to="item.link"
                :class="['nav-link link', { active: item.name === app.route.name, disabled: item.disabled }]"
              >
                {{ item.text }}
              </router-link>
            </template>
          </li>

          <li class="nav-item ms-auto">
            <button class="update-btn small-btn" @click="app.onToggleUpdate" v-if="props.editable">
              <i class="bi bi-person-fill-gear icon"></i>
              {{ app.t(`app.update`) }}
            </button>
            <button class="delete-btn small-btn" @click="app.onToggleDelete" v-if="props.editable">
              <i class="bi bi-trash3 icon"></i>
              {{ app.t(`app.delete`) }}
            </button>
          </li>
        </ul>
      </div>
      <!-- End Nav -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { BaseComponent, defineClassComponent } from "@/plugins/component.plugin";
import { PathConst } from "@/const/path.const";
import { DatetimeHelper } from "@/helpers/datetime.helper";
import type { DetailPageHeaderEmits, DetailPageHeaderProps } from "./DetailPageHeaderComponent";
import type { Ref } from "vue";
import type { JobModel } from "@/models/job.model";

const props = defineProps<DetailPageHeaderProps>();
const emits = defineEmits<DetailPageHeaderEmits>();

const app = defineClassComponent(
  class Component extends BaseComponent {
    public navList: Ref<Array<any>> = this.ref([
      {
        link: PathConst.adminJobDetail.path,
        name: PathConst.adminJobDetail.name,
        text: this.t(`app.overview`),
        disabled: true,
        isDisplayed: true,
      },
      {
        link: "",
        name: this.t(`app.activity`),
        text: this.t(`app.activity`),
        disabled: true,
        isDisplayed: false,
      },
    ]);

    public job: Ref<JobModel> = this.computed(() => props.data);
    public infoList: Ref<Array<any>> = this.computed(() => [
      {
        id: 1,
        title: this.t(`app.location`),
        desc: this.job.value.location.name,
      },
      {
        id: 2,
        title: this.t(`app.opensAt`),
        desc: DatetimeHelper.getShortDate(this.job.value.opensAt),
      },
      {
        id: 3,
        title: this.t(`app.expiresAt`),
        desc: DatetimeHelper.getShortDate(this.job.value.expiresAt),
      },
    ]);

    public constructor() {
      super();
    }

    public onToggleUpdate = () => {
      emits("onToggleUpdateButton");
    };

    public onToggleDelete = () => {
      emits("onToggleDeleteButton");
    };
  },
);
</script>

<style scoped lang="scss">
@import "@/assets/scss/modules";
@import "@/assets/scss/admin";

.detail-page-header-container {
  & .page-header-wrapper {
    display: flex;
    flex-direction: column;

    & .page-header {
      display: flex;
      margin-bottom: 1rem;

      & .header-avatar {
        flex-shrink: 0;

        & .avatar-img {
          position: relative;
          background-color: $white;
          width: 4.5rem;
          max-width: 4.5rem;
          height: auto;
          border-radius: 0.5rem;
          object-fit: cover;
        }
      }

      & .header-info {
        flex-grow: 1;
        margin-left: 1.5rem;

        & .info-title {
          color: $dark;
          font-size: 1.5rem;
          font-weight: 600;
          line-height: 1.2;
          margin-bottom: 0.5rem;
        }

        & .info-list {
          align-items: center;

          & .info-item {
            flex: 0 0 auto;
            width: auto;
            margin-right: 1.5rem;

            & .first {
              margin-right: 0.25rem;
            }
          }
        }
      }
    }

    & .page-nav {
      position: relative;
      margin-bottom: 2rem;

      & .nav-list {
        display: flex;
        align-items: center;
        padding-bottom: 0.125rem;
        overflow-x: auto;
        overflow-y: hidden;
        -ms-flex-wrap: nowrap;
        flex-wrap: nowrap;
        white-space: nowrap;
        scroll-behavior: smooth;
        border-bottom: 0.0625rem solid $border;

        & .nav-item {
          white-space: nowrap;

          & .nav-link {
            color: $dark-variant !important;
            font-size: 0.875rem;
            padding: 1.25rem 1rem;
            border-bottom: 0.1875rem solid transparent;
            margin-bottom: -0.125rem;

            &:hover {
              color: $blue-light !important;
              border-color: $border;
            }

            &.disabled {
              color: $disabled-color !important;
              pointer-events: none;
              cursor: default;
            }

            &.active {
              font-weight: 600;
              color: $blue !important;
              border-color: $blue;
            }
          }

          & .update-btn,
          & .delete-btn {
            font-size: 0.8125rem;
            color: $dark-variant;
            background-color: $white;
            border-color: $border;

            & .icon {
              font-size: 0.875rem;
              margin-right: 0.5rem;
            }
          }

          & .update-btn {
            margin-right: 0.5rem;

            &:hover {
              color: $blue;
              box-shadow: 0 3px 6px -2px rgba(140, 152, 164, 0.25);
            }
          }

          & .delete-btn {
            &:hover {
              color: $danger;
              box-shadow: 0 3px 6px -2px rgba(140, 152, 164, 0.25);
            }
          }
        }
      }
    }
  }
}
</style>
