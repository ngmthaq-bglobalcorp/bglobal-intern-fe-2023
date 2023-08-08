<template>
  <div class="profile-card-container">
    <!-- Card -->
    <div class="profile-card-complete custom-card">
      <h5 class="complete-title">{{ app.t(`app.completeProfile`) }}</h5>

      <!-- Progress -->
      <div class="d-flex justify-content-between align-items-center">
        <div class="progress flex-grow-1">
          <div class="progress-bar bg-primary" role="progressbar" :style="{ width: app.profilePercent.value }"></div>
        </div>
        <span class="ms-4">{{ app.profilePercent.value }}</span>
      </div>
      <!-- End Progress -->
    </div>
    <!-- End Card -->

    <!-- Card -->
    <div class="profile-card-detail custom-card">
      <!-- Header -->
      <div class="card-header">
        <h2 class="card-title">{{ app.t(`app.profile`) }}</h2>
      </div>
      <!-- End Header -->

      <!-- Body -->
      <div class="profile-card-body">
        <ul class="card-list list">
          <li class="card-item">
            <small class="card-subtitle">{{ app.t(`app.about`) }}</small>
          </li>

          <li class="card-item" v-if="app.profile.value.username">
            <i class="bi bi-person-circle icon"></i>
            {{ app.profile.value.username }}
          </li>
          <li class="card-item" v-if="app.profile.value.name">
            <i class="bi bi-person icon"></i>
            {{ app.profile.value.name }}
          </li>
          <li class="card-item" v-if="app.profile.value.birthday">
            <i class="bi bi-calendar icon"></i>
            {{ app.profile.value.birthday }}
          </li>

          <li class="card-item pt-2 pb-0">
            <small class="card-subtitle">{{ app.t(`app.contacts`) }}</small>
          </li>

          <li class="card-item" v-if="app.profile.value.email">
            <i class="bi bi-envelope icon"></i>
            {{ app.profile.value.email }}
          </li>
          <li class="card-item" v-if="app.profile.value.phoneNumber">
            <i class="bi bi-phone icon"></i>
            {{ app.profile.value.phoneNumber }}
          </li>
          <li class="card-item" v-if="app.profile.value.webside">
            <i class="bi bi-globe icon"></i>
            {{ app.profile.value.webside }}
          </li>
          <li class="card-item" v-if="app.profile.value.address">
            <i class="bi bi-buildings icon"></i>
            {{ app.profile.value.address }}
          </li>

          <li class="card-item pt-2 pb-0">
            <small class="card-subtitle">{{ app.t(`app.introduction`) }}</small>
          </li>
          <li class="card-item" v-if="app.profile.value.introduction">
            <i class="bi bi-bookmarks icon"></i>
            {{ app.profile.value.introduction }}
          </li>
          <li class="card-item" v-if="app.profile.value.education">
            <i class="bi bi-book icon"></i>
            {{ app.profile.value.education }}
          </li>
          <li class="card-item" v-if="app.profile.value.experience">
            <i class="bi bi-person-lines-fill icon"></i>
            {{ app.profile.value.experience }}
          </li>
          <li class="card-item" v-if="app.profile.value.skills">
            <i class="bi bi-lightbulb icon"></i>
            {{ app.profile.value.skills }}
          </li>
          <li class="card-item" v-if="app.profile.value.achievements">
            <i class="bi bi-award icon"></i>
            {{ app.profile.value.achievements }}
          </li>
          <li class="card-item" v-if="app.profile.value.otherDetails">
            <i class="bi bi-info-circle icon"></i>
            {{ app.profile.value.otherDetails }}
          </li>
        </ul>
      </div>
      <!-- End Body -->
    </div>
    <!-- End Card -->
  </div>
</template>

<script setup lang="ts">
import { BaseComponent, defineClassComponent } from "@/plugins/component.plugin";
import type { Ref } from "vue";
import type { ProfileCardProps } from "./ProfileCardComponent";

const props = defineProps<ProfileCardProps>();

const app = defineClassComponent(
  class Component extends BaseComponent {
    public profile: Ref<any> = this.computed(() => props.profile);
    public profilePercent: Ref<string> = this.computed(() => {
      let total = Object.values(this.profile.value).length;
      let percent = Object.values(this.profile.value).reduce((acc: number, cur: any) => {
        if (cur || cur === false) {
          acc += 100 / total;
        }
        return acc;
      }, 0);
      return Math.ceil(percent) + "%";
    });

    public constructor() {
      super();
    }
  },
);
</script>

<style scoped lang="scss">
@import "@/assets/scss/modules";
@import "@/assets/scss/admin";

.profile-card-container {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  & .profile-card-complete {
    padding: 1.3125rem;
    margin-bottom: 2rem;

    & .complete-title {
      font-size: 0.875rem;
      font-weight: 600;
      line-height: 1.2;
      margin-bottom: 0.5rem;
      color: $dark;
    }

    & .progress {
      height: 0.5rem;
    }
  }

  & .profile-card-detail {
    & .card-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.5rem;
      padding: 1rem 1.3125rem;
      border-bottom: 0.0625rem solid $border;

      & .card-title {
        font-size: 1rem;
        font-weight: 600;
        line-height: 1.2;
        color: $dark;
      }
    }

    & .profile-card-body {
      padding: 1.3125rem;

      & .card-list {
        display: flex;
        flex-direction: column;

        & .card-item {
          padding: 0.5rem 0;
          color: $dark;

          & .card-subtitle {
            display: block;
            color: #8c98a4;
            text-transform: uppercase;
            font-size: 0.7109375rem;
            margin-bottom: 0.25rem;
          }

          & .icon {
            font-size: 0.875rem;
            color: #8c98a4;
            margin-right: 0.5rem;
          }
        }
      }
    }
  }
}
</style>
