<template>
  <div class="profile-card-container">
    <!-- Card -->
    <div class="profile-card-complete custom-card">
      <h5 class="complete-title">{{ app.t(`app.completeProfile`) }}</h5>

      <!-- Progress -->
      <div class="d-flex justify-content-between align-items-center">
        <div class="progress flex-grow-1">
          <div
            class="progress-bar bg-primary"
            role="progressbar"
            :style="{ width: app.profilePercent.value + '%' }"
          ></div>
        </div>
        <span class="ms-4">{{ app.profilePercent.value }}%</span>
      </div>
      <!-- End Progress -->
    </div>
    <!-- End Card -->

    <!-- Card -->
    <div class="profile-card-detail custom-card">
      <!-- Header -->
      <div class="card-header">
        <h2 class="card-header-title h5">{{ app.t(`app.profile`) }}</h2>
      </div>
      <!-- End Header -->

      <!-- Body -->
      <div class="profile-card-body">
        <ul class="card-list list">
          <li class="card-item">
            <small class="card-subtitle">{{ app.t(`app.about`) }}</small>
          </li>

          <li class="card-item" v-if="app.profile.username">
            <i class="bi bi-person-circle icon"></i>
            {{ app.profile.username }}
          </li>
          <li class="card-item" v-if="app.profile.name">
            <i class="bi bi-person icon"></i>
            {{ app.profile.name }}
          </li>

          <li class="card-item pt-2 pb-0">
            <small class="card-subtitle">{{ app.t(`app.contacts`) }}</small>
          </li>

          <li class="card-item" v-if="app.profile.email">
            <i class="bi bi-envelope icon"></i>
            {{ app.profile.email }}
          </li>
          <li class="card-item" v-if="app.profile.phone_number">
            <i class="bi bi-phone icon"></i>
            {{ app.profile.phone_number }}
          </li>
          <li class="card-item" v-if="app.profile.webside">
            <i class="bi bi-globe icon"></i>
            {{ app.profile.webside }}
          </li>
          <li class="card-item" v-if="app.profile.adress">
            <i class="bi bi-buildings icon"></i>
            {{ app.profile.adress }}
          </li>

          <li class="card-item pt-2 pb-0">
            <small class="card-subtitle">{{ app.t(`app.introduction`) }}</small>
          </li>
          <li class="card-item" v-if="app.profile.introduction">
            <i class="bi bi-bookmarks icon"></i>
            {{ app.profile.introduction }}
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
import type { OrganizationModel } from "@/models/organization.model";

const app = defineClassComponent(
  class Component extends BaseComponent {
    public profile: OrganizationModel = {
      id: 1,
      username: "minhduc",
      name: "Minh Duc",
      email: "minhduc.mll@gmail.com",
      phone_number: "0912345678",
      webside: "",
      adress: "Ha Noi",
      introduction:
        "............... ............... ............... ............... ............... ............... ............... ............... ............... ............... ............... ............... ............... ............... ............... ............... ............... ............... ............... ...............",
      organizationType: 0,
      status: 0,
      createdAt: new Date("2023-07-01"),
      updatedAt: new Date("2023-07-01"),
    };
    public profilePercent: Ref<number> = this.computed(() => {
      let percent = 0;
      if (this.profile.name) {
        percent++;
      }
      if (this.profile.email) {
        percent++;
      }
      if (this.profile.phone_number) {
        percent++;
      }
      if (this.profile.webside) {
        percent++;
      }
      if (this.profile.adress) {
        percent++;
      }
      if (this.profile.introduction) {
        percent++;
      }
      return Math.round((percent / 6) * 100);
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

      & .card-header-title {
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
