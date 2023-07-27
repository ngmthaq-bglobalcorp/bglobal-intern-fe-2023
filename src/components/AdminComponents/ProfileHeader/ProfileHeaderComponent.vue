<template>
  <div class="profile-header-container">
    <!-- Profile Cover -->
    <div class="profile-cover">
      <div class="profile-cover-wrapper">
        <img class="profile-cover-img" src="@/assets/img/default-cover.jpg" alt="Cover" />

        <!-- Custom File Cover -->
        <div class="profile-cover-uploader">
          <input type="file" class="cover-uploader-input" id="profileCoverUplaoder" />
          <label class="cover-uploader-label small-btn" for="profileCoverUplaoder">
            <i class="bi bi-camera-fill icon"></i>
            <span class="upload">{{ app.t(`app.uploadCover`) }}</span>
          </label>
        </div>
        <!-- End Custom File Cover -->
      </div>
    </div>
    <!-- End Profile Cover -->

    <!-- Profile Avatar -->
    <div class="profile-avatar">
      <label class="avatar-uploader-label" for="avatarUploader">
        <img class="avatar-img" src="@/assets/img/logo.svg" alt="Avatar" />

        <input type="file" class="avatar-uploader-input" id="avatarUploader" />

        <span class="avatar-uploader-trigger">
          <i class="bi bi-pencil-fill"></i>
        </span>
      </label>
    </div>
    <!-- End Profile Avatar -->

    <!-- Profile Header -->
    <div class="profile-header" v-if="!props.isUpdate">
      <h1 class="page-header-title">Minh Duc</h1>

      <!-- List -->
      <ul class="list-header list">
        <li class="list-header-item">
          <i class="bi bi-envelope icon"></i>
          <span>minhduc.mll@gmail.com</span>
        </li>

        <li class="list-header-item">
          <i class="bi bi-phone icon"></i>
          <span>0912345678</span>
        </li>
      </ul>
      <!-- End List -->
    </div>
    <!-- End Profile Header -->

    <!-- Nav -->
    <div class="profile-nav" v-if="!props.isUpdate">
      <ul class="nav-list list">
        <li class="nav-item">
          <router-link to="" class="nav-link link active disabled">{{ app.t(`app.profile`) }}</router-link>
        </li>
        <li class="nav-item">
          <router-link to="" class="nav-link link disabled">{{ app.t(`app.jobsList`) }}</router-link>
        </li>

        <li class="nav-item ms-auto">
          <button class="update-btn small-btn">
            <i class="bi bi-person-fill-gear icon"></i>
            {{ app.t(`app.update`, { value: app.t(`app.profile`) }) }}
          </button>
        </li>
      </ul>
    </div>
    <!-- End Nav -->
  </div>
</template>

<script setup lang="ts">
import { BaseComponent, defineClassComponent } from "@/plugins/component.plugin";
import type { ProfileHeaderProps } from "./ProfileHeaderComponent";

const props = defineProps<ProfileHeaderProps>();

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

.profile-header-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;

  & .profile-cover {
    position: relative;
    height: 10rem;
    padding: 1rem 1rem;
    border-radius: 0.75rem;

    & .profile-cover-wrapper {
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      height: 10rem;
      background-color: $light;
      border-radius: 0.75rem;

      & .profile-cover-img {
        width: 100%;
        height: 10rem;
        -o-object-fit: cover;
        object-fit: cover;
        vertical-align: top;
        border-radius: 0.75rem;
      }

      & .profile-cover-uploader {
        position: absolute;
        bottom: 0;
        right: 0;
        overflow: hidden;
        margin-bottom: 0;
        padding: 1rem;

        & .cover-uploader-input {
          position: absolute;
          top: 0;
          left: 0;
          z-index: -1;
          width: 100%;
          height: 100%;
          opacity: 0;
        }

        & .cover-uploader-label {
          color: $dark-variant;
          background-color: $white;
          border-color: $white;

          &:hover {
            color: $blue;
            box-shadow: 0 3px 6px -2px rgba(140, 152, 164, 0.25);
          }

          & .icon {
            font-size: 0.875rem;
            margin-right: 0.5rem;
          }

          & .upload {
            font-size: 0.8125rem;
          }
        }
      }
    }
  }

  & .profile-avatar {
    text-align: center;
    margin-bottom: 1.5rem;

    & .avatar-uploader-label {
      position: relative;
      display: flex;
      width: 7.875rem;
      height: 7.875rem;
      border-radius: 50%;
      background-color: $light;
      border: 0.25rem solid #fff;
      margin: -6.3rem auto 0.5rem auto;
      transition: 0.2s;
      cursor: pointer;

      & .avatar-img {
        max-width: 100%;
        height: 100%;
        -o-object-fit: cover;
        object-fit: cover;
        border-radius: 50%;
      }

      & .avatar-uploader-input {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        z-index: -1;
        opacity: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(19, 33, 68, 0.25);
        border-radius: 50%;
        transition: 0.2s;
      }

      & .avatar-uploader-trigger {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 2.40625rem;
        height: 2.40625rem;
        background-color: $white;
        bottom: 0;
        right: 0;
        border-radius: 50%;
        cursor: pointer;
      }
    }
  }

  & .profile-header {
    text-align: center;
    margin-top: -1rem;
    margin-bottom: 2rem;

    & .page-header-title {
      margin-bottom: 0.5rem;
      font-size: 1.4109375rem;
      font-weight: 600;
      line-height: 1.2;
      color: $black;
    }

    & .list-header {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 1rem;

      & .list-header-item {
        display: inline-block;
        margin-right: 0.75rem;

        & .icon {
          font-size: 0.875rem;
          margin-right: 0.5rem;
        }
      }
    }
  }

  & .profile-nav {
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
          font-size: 0.875rem;
          padding: 1.25rem 1rem;
          border-bottom: 0.1875rem solid transparent;
          margin-bottom: -0.125rem;

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

        & .update-btn {
          font-size: 0.8125rem;
          color: $dark-variant;
          background-color: $white;
          border-color: $border;

          &:hover {
            color: $blue;
            box-shadow: 0 3px 6px -2px rgba(140, 152, 164, 0.25);
          }

          & .icon {
            font-size: 0.875rem;
            margin-right: 0.5rem;
          }
        }
      }
    }
  }
}
</style>
