<template>
  <div class="profile-header-container">
    <!-- Profile Cover -->
    <div class="profile-cover">
      <div class="profile-cover-wrapper">
        <img class="cover-img" src="@/assets/img/default-cover.jpg" alt="Cover" />

        <!-- Custom File Cover -->
        <label class="cover-uploader-label" for="coverUploader" v-if="app.isEditCover.value && props.editable">
          <input type="file" class="cover-uploader-input" id="coverUploader" />

          <div class="cover-uploader-button small-btn">
            <i class="bi bi-camera-fill icon"></i>
            <span class="upload">{{ app.t(`app.uploadCover`) }}</span>
          </div>
        </label>
        <!-- End Custom File Cover -->
      </div>
    </div>
    <!-- End Profile Cover -->

    <!-- Profile Avatar -->
    <div class="profile-avatar">
      <div class="profile-avatar-wrapper">
        <!-- Custom File Avatar -->
        <label class="avatar-uploader-label" for="avatarUploader">
          <AvatarComponent
            :avatarImage="app.profile.value.avatar"
            avatarAlt="Avatar"
            :avatarInit="app.profile.value.name.split(' ')[0] || app.profile.value.username"
          />

          <template v-if="props.editable">
            <input type="file" class="avatar-uploader-input" id="avatarUploader" />

            <span class="avatar-uploader-trigger">
              <i class="bi bi-pencil-fill"></i>
            </span>
          </template>
        </label>
        <!-- End Custom File Avatar -->
      </div>
    </div>
    <!-- End Profile Avatar -->

    <!-- Profile Header -->
    <div class="profile-header" v-if="!props.isUpdate">
      <h1 class="page-header-title">{{ app.profile.value.name || app.profile.value.username }}</h1>

      <!-- List -->
      <ul class="list-header list">
        <li class="list-header-item" v-if="app.profile.value.email">
          <i class="bi bi-envelope icon"></i>
          <span>{{ app.profile.value.email }}</span>
        </li>

        <li class="list-header-item" v-if="app.profile.value.phoneNumber">
          <i class="bi bi-phone icon"></i>
          <span>{{ app.profile.value.phoneNumber }}</span>
        </li>
      </ul>
      <!-- End List -->
    </div>
    <!-- End Profile Header -->

    <!-- Nav -->
    <div class="profile-nav" v-if="!props.isUpdate">
      <ul class="nav-list list">
        <li class="nav-item" v-for="item in app.navList.value" :key="item.name">
          <router-link
            :to="item.link"
            :class="['nav-link link', { active: item.name === app.route.name, disabled: item.disabled }]"
          >
            {{ item.text }}
          </router-link>
        </li>

        <li class="nav-item ms-auto">
          <button class="update-btn small-btn" @click="app.onToggleUpdate" v-if="props.editable">
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
import AvatarComponent from "@/components/AdminComponents/Avatar/AvatarComponent.vue";
import { PathConst } from "@/const/path.const";
import type { ProfileHeaderEmits, ProfileHeaderProps } from "./ProfileHeaderComponent";
import type { Ref } from "vue";

const props = defineProps<ProfileHeaderProps>();
const emits = defineEmits<ProfileHeaderEmits>();

const app = defineClassComponent(
  class Component extends BaseComponent {
    public profile: Ref<any> = this.computed(() => props.profile);
    public isEditCover: Ref<boolean> = this.ref(false);
    public navList: Ref<Array<any>> = this.ref([
      {
        link: PathConst.adminUserProfile.path,
        name: PathConst.adminUserProfile.name,
        text: this.t(`app.profile`),
        disabled: true,
      },
      {
        link: PathConst.adminJobsList.path,
        name: PathConst.adminJobsList.name,
        text: this.t(`app.jobsList`),
        disabled: true,
      },
    ]);

    public constructor() {
      super();
    }

    public onToggleUpdate = () => {
      emits("onToggleUpdateProfile");
    };
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
      width: 100%;
      height: 10rem;
      top: 0;
      right: 0;
      left: 0;
      background-color: transparent;
      transition: 0.2s;

      & .cover-img {
        width: 100%;
        height: 100%;
        -o-object-fit: cover;
        object-fit: cover;
        vertical-align: top;
        border-radius: 0.75rem;
      }

      & .cover-uploader-label {
        position: absolute;
        bottom: 0;
        right: 0;
        margin-bottom: 0;
        margin: 1rem;

        & .cover-uploader-input {
          position: absolute;
          z-index: -1;
          width: 100%;
          height: 100%;
          opacity: 0;
        }

        & .cover-uploader-button {
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

    & .profile-avatar-wrapper {
      position: relative;
      width: 7.875rem;
      height: 7.875rem;
      border-radius: 50%;
      background-color: $light;
      border: 0.25rem solid #fff;
      margin: -6.3rem auto 0.5rem auto;
      transition: 0.2s;

      & .avatar-uploader-label {
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
        bottom: 0;
        cursor: pointer;

        & .avatar-img {
          width: 100%;
          height: 100%;
          -o-object-fit: cover;
          object-fit: cover;
          border-radius: 50%;
        }

        & .avatar-uploader-input {
          position: absolute;
          z-index: -1;
          width: 100%;
          height: 100%;
          opacity: 0;
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

        &:hover {
          color: $blue;
        }
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
