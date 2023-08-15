<template>
  <div class="timeline-container">
    <ul class="timeline-list list">
      <li class="timeline-item" :id="data.id.toString()" v-for="data in app.filtersData.value" :key="data.id">
        <div class="datetime-wrapper">
          <span class="datetime-divider">{{ DatetimeHelper.getFullDate(data.updatedAt) }}</span>
        </div>
        <div class="content-wrapper">
          <div class="event-button">
            <button class="edit-btn icon-btn" @click.prevent="app.onToggleEditButton(data.id)">
              <i class="bi bi-pencil-square"></i>
            </button>
            <button class="delete-btn icon-btn" @click.prevent="app.onToggleDeleteButton(data.id)">
              <i class="bi bi-trash3"></i>
            </button>
          </div>
          <div class="content-avatar">
            <img
              src="@/assets/img/info-icon-seminar.svg"
              alt="Category"
              class="content-avatar image"
              v-if="data.category === AppConst.NEWS_CATEGORY.seminar"
            />
            <img
              src="@/assets/img/info-icon-briefing.svg"
              alt="Category"
              class="content-avatar image"
              v-else-if="data.category === AppConst.NEWS_CATEGORY.briefing"
            />
            <img
              src="@/assets/img/info-icon-other.svg"
              alt="Category"
              class="content-avatar image"
              v-else-if="data.category === AppConst.NEWS_CATEGORY.other"
            />
          </div>
          <div class="content-desc">
            <span class="event-category">
              <span v-if="data.category === AppConst.NEWS_CATEGORY.seminar">
                {{ app.t(`app.seminar`) }}
              </span>
              <span v-else-if="data.category === AppConst.NEWS_CATEGORY.briefing">
                {{ app.t(`app.corporateRecruitingSession`) }}
              </span>
              <span v-else-if="data.category === AppConst.NEWS_CATEGORY.other">
                {{ app.t(`app.generalInformation`) }}
              </span>
            </span>
            <a :href="'#' + data.id" class="event-link link-default" scroll="smooth">
              <h2 class="event-title">{{ data.title }}</h2>
            </a>
            <h3 class="event-subtitle" v-if="data.subtitle">{{ data.subtitle }}</h3>
            <ul class="event-list-group list">
              <li v-if="data.body">
                <span class="event-body">{{ data.body }}</span>
              </li>
              <li v-if="data.eventPageUrl">
                <a :href="PrimitiveHelper.getValidUrl(data.eventPageUrl)" target="_blank" class="event-page-url">{{
                  data.eventPageUrl
                }}</a>
              </li>
              <li v-if="data.eventStartAt && data.eventEndAt">
                <div class="event-start-end">
                  {{
                    `Event start at ${DatetimeHelper.getLongDateTime(
                      data.eventStartAt,
                    )} and end at ${DatetimeHelper.getLongDateTime(data.eventEndAt)}`
                  }}
                </div>
              </li>
              <li>
                <div class="event-open-expire">
                  <span>{{ `Open ${DatetimeHelper.getLongDate(data.opensAt)}` }}</span>
                  <span>{{ `Expire ${DatetimeHelper.getLongDate(data.expiresAt)}` }}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </li>
    </ul>
    <div class="d-grid">
      <button class="load-more-btn g-btn" @click="app.onToggleMoreData">
        <i class="bi bi-arrow-clockwise icon" :class="{ loading: app.isLoading.value }"></i>
        {{ app.t(`app.loadMore`, { value: app.target.value }) }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { BaseComponent, defineClassComponent } from "@/plugins/component.plugin";
import { AppConst } from "@/const/app.const";
import { DatetimeHelper } from "@/helpers/datetime.helper";
import { PrimitiveHelper } from "@/helpers/primitive.helper";
import type { TimelineListEmits, TimelineListProps } from "./TimelineListComponent";
import type { Ref } from "vue";
import type { NewsModel } from "@/models/news.model";

const props = defineProps<TimelineListProps>();
const emit = defineEmits<TimelineListEmits>();

const app = defineClassComponent(
  class Component extends BaseComponent {
    public target: Ref<string> = this.ref(props.target);
    public limit: Ref<number> = this.ref(props.limit);
    public isLoading: Ref<boolean> = this.ref(false);

    public filtersData: Ref<Array<NewsModel>> = this.computed(() => {
      return props.data.filter((_, index) => {
        return index < this.limit.value;
      });
    });

    public constructor() {
      super();
    }

    public onToggleEditButton = (id: number) => {
      emit("onToggleEditButton", id);
    };

    public onToggleDeleteButton = (id: number) => {
      emit("onToggleDeleteButton", id);
    };

    public onToggleMoreData = () => {
      this.isLoading.value = true;
      setTimeout(() => {
        if (this.limit.value < props.data.length) {
          this.limit.value += props.limit;
        }
        this.isLoading.value = false;
      }, 1600);
    };
  },
);
</script>

<style scoped lang="scss">
@import "@/assets/scss/modules";
@import "@/assets/scss/admin";

.timeline-container {
  width: 75%;
  margin: auto;

  & .timeline-list {
    position: relative;

    & .timeline-item {
      display: flex;
      flex-direction: column;
      width: 100%;
      max-width: 100%;
      padding-right: 0.75rem;
      padding-left: 0.75rem;

      & .datetime-wrapper {
        position: relative;
        display: flex;
        width: 100%;
        margin-bottom: 2.25rem;

        & .datetime-divider {
          display: inline-flex;
          align-items: center;
          text-transform: uppercase;
          height: 1rem;
          font-size: 0.7109375rem;
          font-weight: 600;
          letter-spacing: 1px;

          &::after {
            content: "";
            position: absolute;
            top: 1.75rem;
            left: 1.5rem;
            height: calc(100% - 0.25rem);
            border-left: 0.125rem solid rgba($border, 0.7);
          }
        }
      }

      & .content-wrapper {
        position: relative;
        display: flex;
        width: 100%;
        margin-bottom: 2.25rem;

        &:hover {
          & .event-button {
            display: block;
            opacity: 0.7;
            visibility: visible;
          }
        }

        & .event-button {
          position: absolute;
          top: 0;
          right: 0;
          transform: translate(100%, 0);
          display: none;
          opacity: 0;
          visibility: hidden;

          & .edit-btn {
            &:hover {
              opacity: 1;
              color: $blue;
              background-color: rgba($blue, 0.1);
            }
          }

          & .delete-btn {
            &:hover {
              opacity: 1;
              color: $danger;
              background-color: rgba($danger, 0.1);
            }
          }
        }

        & .content-avatar {
          width: 3rem;
          height: 3rem;
          border-radius: 50%;
          margin-right: 1rem;

          &::after {
            content: "";
            position: absolute;
            top: 3.75rem;
            left: 1.5rem;
            height: calc(100% - 2rem);
            border-left: 0.125rem solid rgba(231, 234, 243, 0.7);
          }
        }

        & .content-desc {
          width: 100%;

          & .event-category {
            font-size: 0.8125rem;
          }

          & .event-link {
            display: flex;
            align-items: center;
            justify-content: space-between;

            & .event-title {
              font-size: 1.25rem;
              font-weight: 600;
              line-height: 1.2;
              margin-bottom: 0;
            }
          }

          & .event-subtitle {
            font-size: 0.875rem;
          }

          & .event-list-group {
            display: flex;
            flex-direction: column;
            font-size: 0.875rem;
            margin-top: 0.5rem;

            & .event-page-url {
              color: $blue-light;
              text-decoration: underline;

              &:hover {
                color: $blue;
              }
            }

            & .event-start-end {
              margin-top: 0.5rem;
            }

            & .event-open-expire {
              color: $blue;
              font-size: 0.8125rem;
              display: flex;
              align-items: center;
              justify-content: space-between;
              margin-top: 1.5rem;
            }
          }
        }
      }
    }
  }

  & .load-more-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.875rem;
    padding: 0.6125rem 1rem;
    color: $dark;
    background-color: $white;
    border-color: $border;

    &:hover {
      color: $blue;
      box-shadow: 0 3px 6px -2px rgba(140, 152, 164, 0.25);
    }

    & .icon {
      font-size: 1rem;
      margin-right: 0.5rem;

      &.loading {
        animation: spin 1s infinite forwards;
      }
    }
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
