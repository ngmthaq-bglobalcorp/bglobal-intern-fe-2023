<template>
  <!-- Cover -->
  <div class="cover">
    <!-- Logo & Language -->
    <div class="logo-language">
      <div class="logo-language-content">
        <router-link to="" class="link">
          <img src="@\assets\img\logo.svg" alt="Logo" />
        </router-link>

        <!-- Select -->
        <div class="select-custom">
          <select>
            <option value="language1">
              <span class="d-flex align-items-center">
                <img
                  class="avatar avatar-xss avatar-circle mr-2"
                  src="@/assets/vendor/flag-icon-css/flags/1x1/us.svg"
                  alt="Image description"
                  width="16"
                />
                <span>English (US)</span>
              </span>
            </option>
            <option value="language2" selected>
              <span class="d-flex align-items-center">
                <img
                  class="avatar avatar-xss avatar-circle mr-2"
                  src="@/assets/vendor/flag-icon-css/flags/1x1/gb.svg"
                  alt="Image description"
                  width="16"
                />
                <span>English (UK)</span>
              </span>
            </option>
          </select>
        </div>
        <!-- End Select -->
      </div>
    </div>
    <!-- End Logo & Language -->

    <div class="content">
      <div class="content-image">
        <img src="@\assets\img\svg\chat.svg" alt="Image" />
      </div>

      <div class="content-title">
        <h2 class="title">Build digital products with:</h2>
      </div>

      <!-- List Checked -->
      <ul class="list-checked">
        <li class="list-checked-item">
          <i class="bi bi-check-lg"></i>
          <span>All-in-one tool</span>
          Build, run, and scale your apps - end to end
        </li>

        <li class="list-checked-item">
          <i class="bi bi-check-lg"></i>
          <span>Easily add &amp; manage your services</span>
          It brings together your tasks, projects, timelines, files and more
        </li>
      </ul>
      <!-- End List Checked -->

      <div class="content-logo">
        <img src="@\assets\img\bglobal.png" alt="Logo" />
      </div>
      <!-- End Row -->
    </div>
  </div>
  <!-- End Cover -->
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

.cover {
  max-width: 50%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: var(--color-cover-background);
  padding: 0;

  & .logo-language {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: 16px 16px 0 16px;

    & .logo-language-content {
      display: flex;
      justify-content: space-between;

      & img {
        min-width: 6rem;
        max-width: 6rem;
      }

      & .select-custom {
        position: relative;

        & select {
          background-color: transparent;
        }
      }
    }
  }

  & .content {
    max-width: 23rem;

    & .content-image {
      text-align: center;
      margin-bottom: 2rem;

      & img {
        width: 12rem;
        height: auto;
        margin: auto;
      }
    }

    & .content-title {
      margin-bottom: 2rem;

      & h2 {
        font-size: 1.75rem;
        font-weight: 600;
        line-height: 1.4;
      }
    }

    & .list-checked {
      margin-bottom: 1rem;
      list-style: none;
      padding: 0;

      & .list-checked-item {
        position: relative;
        display: block;
        color: #677788;
        margin: 0.5rem;
        padding-left: 2.25rem;
        padding-bottom: 1.5rem;

        & i {
          position: absolute;
          top: 0;
          left: 0;
          margin-top: 0;
          font-size: 1.5rem;
          width: 2.25rem;
          text-align: left;
        }

        & span {
          display: block;
          font-weight: bold;
          margin-bottom: 0.25rem;
        }
      }
    }

    & .content-logo {
      display: flex;
      justify-content: space-between;
      margin-top: 2rem;
      gap: 1rem;

      & img {
        max-width: 100px;
        height: auto;
        color: gray;
      }
    }
  }
}
</style>
