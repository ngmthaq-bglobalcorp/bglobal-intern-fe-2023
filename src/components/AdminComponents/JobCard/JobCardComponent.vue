<template>
  <div class="job-card-container" @click="app.onClickCard">
    <button class="delete-btn icon-btn">
      <i class="bi bi-trash icon"></i>
    </button>
    <!-- Card -->
    <div class="job-wrapper">
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
            {{ app.getSalary() }}
          </li>
          <li class="info-detail">
            <i class="bi bi-clock icon"></i>
            {{ app.getWorkingHour() }}
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
            {{ `Post period: ${app.job.value.opensAt.toDateString()} ~ ${app.job.value.expiresAt.toDateString()}` }}
          </span>
        </div>
      </div>
    </div>
    <!-- End Card -->
  </div>
</template>

<script setup lang="ts">
import { BaseComponent, defineClassComponent } from "@/plugins/component.plugin";
import { PathConst } from "@/const/path.const";
import { DatetimeHelper } from "@/helpers/datetime.helper";
import type { Ref } from "vue";
import type { JobCardProps } from "./JobCardComponent";
import type { JobModel } from "@/models/job.model";

const props = defineProps<JobCardProps>();

const app = defineClassComponent(
  class Component extends BaseComponent {
    public job: Ref<JobModel> = this.ref(props.job);

    public constructor() {
      super();
    }

    public onClickCard = () => {
      this.router.push(`${PathConst.adminJobsList.path}/${app.job.value.id}`);
    };

    public getSalary = () => {
      let text = "";
      text += "Salary: " + this.job.value.salary;
      return text;
    };

    public getWorkingHour = () => {
      let text = "";
      this.job.value.workingHour.forEach((value, index) => {
        text += `${DatetimeHelper.getHourAndMinute(value.start)}~${DatetimeHelper.getHourAndMinute(value.end)}`;
        if (value.isFullTime) {
          text += `(fulltime)`;
        } else {
          text += `(${value.hours} hours)`;
        }
        if (index < this.job.value.workingHour.length - 1) {
          text += `, `;
        }
      });
      return text;
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
        font-weight: 600;
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
