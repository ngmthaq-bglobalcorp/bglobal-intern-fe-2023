<template>
  <!-- Cover -->
  <div class="cover">
    <!-- Logo & Language -->
    <div class="logo-language">
      <div class="logo-language-content">
        <router-link to="" class="link">
          <img src="@\assets\img\logo.svg" alt="Logo" class="image" />
        </router-link>
      </div>
    </div>
    <!-- End Logo & Language -->

    <div class="content">
      <div class="content-image">
        <img src="@\assets\img\chat.svg" alt="Image" class="image" />
      </div>

      <div class="content-title">
        <h2 class="title">{{ app.t(`app.coverTitle`) }}</h2>
      </div>

      <!-- List Checked -->
      <ul class="list list-checked">
        <li class="list-checked-item" v-for="(_, index) in 4" :key="index">
          <i class="bi bi-check-lg"></i>
          <span>{{ app.t(`app.coverContent.${index}.title`) }}</span>
          {{ app.t(`app.coverContent.${index}.content`) }}
        </li>
      </ul>
      <!-- End List Checked -->

      <div class="content-logo">
        <img src="@\assets\img\bglobal.png" alt="Logo" class="image" />
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
  flex: 1;
  max-width: 50%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: $light;
  padding: 3rem;

  & .logo-language {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: 16px 16px 0 16px;

    & .logo-language-content {
      display: flex;
      justify-content: flex-start;

      & img {
        min-width: 6rem;
        max-width: 6rem;
      }
    }
  }

  & .content {
    max-width: 25rem;

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
        padding-bottom: 1rem;

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

      & img {
        max-width: 100px;
        height: auto;
        color: $gray;
        margin-right: 1rem;
      }
    }
  }
}
</style>
