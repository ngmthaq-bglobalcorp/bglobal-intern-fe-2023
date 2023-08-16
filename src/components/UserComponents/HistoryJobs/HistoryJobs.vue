<template>
  <div class="history-container">
    <div class="custom-card" :class="{ disabled: !app.isAvailable.value }" @click="app.onClickCard">
      <div class="header_card">
        <span class="viewed_date">{{ app.t(`jobsApp.history.viewedDate`) }}</span>
        <div class="button">
          <div class="tag_like" v-if="props.isLike">
            <i class="bi bi-bookmark icon"></i>
            <span class="tag_text">{{ app.t(`jobsApp.history.like`) }}</span>
          </div>
          <div class="tag_dislike" v-else>
            <i class="bi bi-x-lg icon"></i>
            <span class="tag_text">{{ app.t(`jobsApp.history.dislike`) }}</span>
          </div>
          <button class="show_details" tabindex="0" type="button" @click="app.onToggleViewDetail">
            <span class="details_text">{{ app.t(`jobsApp.history.viewDetails`) }}</span>
            <i class="bi bi-caret-right icon"></i>
          </button>
        </div>
      </div>
      <div class="body_card">
        <h1 class="title" v-if="app.job.value.title">{{ app.job.value.title }}</h1>
        <div class="main_content">
          <div class="first_content">
            <img :src="app.job.value.mainImageUrl" alt="Main image" v-if="app.job.value.mainImageUrl" />
            <img
              :src="app.job.value.subImages[0].url"
              alt="Main image"
              v-else-if="app.job.value.subImages.length > 0"
            />
            <div class="company_name" v-if="app.show.value">
              <div class="card_header_types">
                <div class="card_header_types_item">A</div>
                <div class="card_header_types_item">B</div>
              </div>
              <span>JOBS</span>
            </div>
          </div>
          <div class="second_content">
            <div class="card_infor_item" v-if="app.job.value.location.name">
              <i class="bi bi-geo-alt icon"></i>
              <span class="infor_job">{{ app.job.value.location.name }}</span>
            </div>
            <div class="card_infor_item" v-if="app.job.value.salary">
              <i class="bi bi-cash-coin icon"></i>
              <span class="infor_job">{{ PrimitiveHelper.getSalary(app.job.value.salary) }}</span>
            </div>
            <div class="card_infor_item" v-if="app.job.value.workingHours.length > 0">
              <i class="bi bi-clock icon"></i>
              <span class="infor_job">{{ PrimitiveHelper.getWorkingHours(app.job.value.workingHours) }}</span>
            </div>
          </div>
        </div>
        <span class="third_content">
          {{ PrimitiveHelper.getPostPeriod(app.job.value.opensAt, app.job.value.expiresAt) }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { BaseComponent, defineClassComponent } from "@/plugins/component.plugin";
import { PrimitiveHelper } from "@/helpers/primitive.helper";
import type { HistoryJobsEmits, HistoryJobsProps } from "./HistoryJobs";
import type { Ref } from "vue";
import type { JobModel } from "@/models/job.model";

const props = defineProps<HistoryJobsProps>();
const emits = defineEmits<HistoryJobsEmits>();

const app = defineClassComponent(
  class Component extends BaseComponent {
    public show: Ref<boolean> = this.ref(false);

    public job: Ref<JobModel> = this.computed(() => props.data);
    public isAvailable: Ref<boolean> = this.computed(() => {
      if (this.job.value.expiresAt > new Date()) {
        return true;
      } else {
        return false;
      }
    });

    public constructor() {
      super();
    }

    public onClickCard = () => {
      emits("onClickCard", this.job.value.id);
    };

    public onToggleViewDetail = () => {
      emits("onToggleViewDetail", this.job.value.id);
    };
  },
);
</script>

<style scoped lang="scss">
@import "@/assets/scss/modules";

.history-container {
  margin-bottom: 15px;

  .custom-card {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 15px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    background-color: $white;

    &.disabled {
      background: #e0e0e0;

      & .tag_like,
      & .tag_dislike {
        opacity: 0.5;
      }
    }

    & .header_card {
      width: 100%;
      display: flex;
      justify-content: space-between;

      & .viewed_date {
        color: rgba(0, 0, 0, 0.7);
        width: max-content;
        font-size: 11px;
        text-align: left;
        font-weight: 400;
        line-height: 16px;
        white-space: pre-line;
        letter-spacing: 0.00938em;
        margin: 0px;
      }

      & .button {
        height: 34px;
        display: flex;
        min-width: max-content;

        & .tag_like,
        & .tag_dislike {
          width: fit-content;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 10px 14px;
          border-radius: 24px;
          cursor: pointer;

          & .icon {
            font-size: 14px;
            margin-right: 0.5rem;
          }

          & .tag_text {
            font-size: 10px;
            font-weight: 700;
            line-height: 10px;
          }
        }

        & .tag_like {
          color: $white;
          background-color: #e65078;
        }

        & .tag_dislike {
          color: #000;
          background: #b2b2b2;
        }

        & .show_details {
          color: #9f085f;
          background-color: $white;
          border: 2px solid #9f085f;
          border-radius: 24px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          position: relative;
          outline: 0px;
          padding: 10px 10px 10px 20px;
          margin-left: 5px;
          cursor: pointer;
          transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
            box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
            color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

          &:hover {
            color: $white;
            background-color: #9f085f;
          }

          & .details_text {
            font-size: 14px;
            font-weight: 400;
            line-height: 10px;
          }
        }
      }
    }
    & .body_card {
      & .title {
        color: #000;
        font-size: 16px;
        font-weight: 700;
        line-height: 21px;
        margin-top: 0.5rem;
      }

      & .main_content {
        width: 100%;
        align-items: flex-start;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-top: 0.5rem;

        & .first_content {
          align-items: flex-start;
          display: flex;
          height: 100%;

          & img {
            height: 60px;
            margin-right: 15px;
            object-fit: cover;
            width: 100px;
          }

          & .company_name {
            display: flex;
            flex-direction: column;
            height: 100%;
            justify-content: space-between;

            & .card_header_types {
              display: flex;
              flex-wrap: wrap;
              margin-bottom: 4px;

              & .card_header_types_item {
                align-items: center;
                background: #e5d8cc;
                border-radius: 3px;
                color: #000;
                display: flex;
                font-size: 10px;
                font-weight: 500;
                height: 18px;
                justify-content: center;
                line-height: 14px;
                margin-right: 5px;
                width: 18px;
              }
            }

            & span {
              font-size: 13px;
              font-weight: 400;
              line-height: 19px;
              width: 100%;
            }
          }
        }

        & .second_content {
          display: flex;
          margin-top: 10px;
          flex-direction: column;

          & .card_infor_item {
            display: flex;
            align-items: center;

            & .icon {
              font-size: 18px;
              font-weight: 600;
              margin-right: 4px;
            }

            & .infor_job {
              color: #000;
              width: 100%;
              font-size: 13px;
              flex-shrink: 0;
              font-weight: 600;
              line-height: 19px;
            }
          }
        }
      }

      & .third_content {
        color: #000;
        font-size: 11px;
        margin-top: 14px;
        font-weight: 400;
        line-height: 16px;
      }
    }
  }
}
</style>
