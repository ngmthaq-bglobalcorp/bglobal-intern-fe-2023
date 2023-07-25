<template>
  <div class="profile-card-container custom-card">
    <!-- Card -->
    <div class="card card-body mb-3 mb-lg-5">
      <h5>Complete your profile</h5>

      <!-- Progress -->
      <div class="d-flex justify-content-between align-items-center">
        <div class="progress flex-grow-1">
          <div
            class="progress-bar bg-primary"
            role="progressbar"
            style="width: 15%"
            aria-valuenow="15"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <span class="ml-4">15%</span>
      </div>
      <!-- End Progress -->
    </div>
    <!-- End Card -->

    <!-- Card -->
    <div class="card mb-3 mb-lg-5">
      <!-- Header -->
      <div class="card-header">
        <h2 class="card-header-title h5">Profile</h2>

        <a class="btn btn-sm btn-white" href="account-settings.html">Edit</a>
      </div>
      <!-- End Header -->

      <!-- Body -->
      <div class="card-body">
        <ul class="list-unstyled list-unstyled-py-3 text-dark mb-3">
          <li class="py-0">
            <small class="card-subtitle">About</small>
          </li>

          <li>
            <i class="tio-user-outlined nav-icon"></i>
            Mark Williams
          </li>
          <li>
            <i class="tio-briefcase-outlined nav-icon"></i>
            No department title
          </li>
          <li>
            <i class="tio-city nav-icon"></i>
            Pixeel Ltd.
          </li>

          <li class="pt-2 pb-0">
            <small class="card-subtitle">Contacts</small>
          </li>

          <li>
            <i class="tio-online nav-icon"></i>
            mark@example.com
          </li>
          <li>
            <i class="tio-android-phone-vs nav-icon"></i>
            +1 (555) 752-01-10
          </li>

          <li class="pt-2 pb-0">
            <small class="card-subtitle">Teams</small>
          </li>

          <li class="font-size-sm text-body">
            <i class="tio-group-equal nav-icon"></i>
            You are not a member of any teams
          </li>
          <li class="font-size-sm text-body">
            <i class="tio-briefcase-outlined nav-icon"></i>
            You are not working on any projects
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

const app = defineClassComponent(
  class Component extends BaseComponent {
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
}
</style>
