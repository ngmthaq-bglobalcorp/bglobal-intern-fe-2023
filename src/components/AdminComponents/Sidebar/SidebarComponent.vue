<template>
  <!-- Navbar Vertical -->
  <aside class="sidebar-aside" :class="{ 'sidebar-collapse': app.collapse.value }">
    <div class="sidebar-container">
      <!-- Logo -->
      <div class="sidebar-logo-wrapper">
        <router-link :to="PathConst.adminDashboard" class="link">
          <img src="@\assets\img\logo.svg" alt="Logo" class="image brand-logo" />
        </router-link>
      </div>
      <!-- End Logo -->

      <!-- Sidebar Toggle -->
      <div class="sidebar-toggle-wrapper">
        <button class="icon-btn toggle-btn" @click.prevent="app.onToggleCollapseSidebar">
          <i class="bi bi-arrow-bar-right icon" v-if="app.collapse.value"></i>
          <i class="bi bi-arrow-bar-left icon" v-else></i>
        </button>
      </div>
      <!-- End Sidebar Toggle -->

      <!-- Content -->
      <div class="sidebar-content-wrapper">
        <ul class="list content-list">
          <!-- Dashboards -->
          <li class="content-item" :class="{ active: app.route.name === PathConst.adminDashboard.name }">
            <router-link :to="PathConst.adminDashboard" class="item-link link">
              <i class="bi bi-house icon"></i>
              <span class="item-text">{{ app.t(`app.dashboard`) }}</span>
            </router-link>
          </li>
          <!-- End Dashboards -->

          <li class="content-item">
            <i class="bi bi-three-dots icon-subtitle"></i>
            <span class="item-subtitle">{{ app.t(`app.manage`) }}</span>
          </li>

          <!-- Manage -->
          <li class="content-item" :class="{ active: app.route.name === PathConst.adminSeekers.name }">
            <router-link :to="PathConst.adminSeekers" class="item-link link">
              <i class="bi bi-people icon"></i>
              <span class="item-text">{{ app.t(`app.seekers`) }}</span>
            </router-link>
          </li>
          <li class="content-item" :class="{ active: app.route.name === PathConst.adminOrganization.name }">
            <router-link :to="PathConst.adminOrganization" class="item-link link">
              <i class="bi bi-buildings icon"></i>
              <span class="item-text">{{ app.t(`app.hiringOrganization`) }}</span>
            </router-link>
          </li>
          <li class="content-item" :class="{ active: app.route.name === PathConst.adminNews.name }">
            <router-link :to="PathConst.adminNews" class="item-link link">
              <i class="bi bi-newspaper icon"></i>
              <span class="item-text">{{ app.t(`app.news`) }}</span>
            </router-link>
          </li>
          <!-- End Manege -->
        </ul>
      </div>
      <!-- End Content -->

      <!-- Footer -->
      <div class="sidebar-footer-wrapper">
        <ul class="list footer-list">
          <li class="footer-item">
            <button class="icon-btn" @click.prevent="app.onToggleChangeMode">
              <i class="bi bi-sun icon" v-if="app.darkMode.value"></i>
              <i class="bi bi-moon icon" v-else></i>
            </button>
          </li>
          <li class="footer-item">
            <button class="icon-btn" @click.prevent="">
              <i class="bi bi-question-circle icon"></i>
            </button>
          </li>
        </ul>
      </div>
      <!-- End Footer -->
    </div>
  </aside>
</template>

<script setup lang="ts">
import { BaseComponent, defineClassComponent } from "@/plugins/component.plugin";
import { PathConst } from "@/const/path.const";
import type { Ref } from "vue";

const app = defineClassComponent(
  class Component extends BaseComponent {
    public darkMode: Ref<Boolean> = this.ref(false);
    public collapse: Ref<Boolean> = this.ref(false);

    public constructor() {
      super();
    }

    public onToggleChangeMode = () => {
      this.darkMode.value = !this.darkMode.value;
    };

    public onToggleCollapseSidebar = () => {
      this.collapse.value = !this.collapse.value;
    };
  },
);
</script>

<style scoped lang="scss">
@import "@/assets/scss/modules";
@import "@/assets/scss/admin";

.sidebar-aside {
  display: block;
  height: 100vh;
  width: 16.25rem;
  z-index: 100;
  border-right: 1px solid $border;
  background-color: $white;
  transition: 0.2s ease-in-out;

  &.sidebar-collapse {
    width: 5.25rem;

    & .sidebar-logo-wrapper {
      padding-left: 0 !important;
      padding-right: 0 !important;
    }

    & .sidebar-content-wrapper {
      & .content-item {
        text-align: center;

        & .icon-subtitle {
          display: block !important;
        }

        & .item-subtitle {
          display: none !important;
        }

        & .item-link {
          padding: 0.5rem 0 !important;
          justify-content: center;

          & .item-text {
            display: none !important;
          }
        }
      }
    }
  }

  & .sidebar-container {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;

    & .sidebar-logo-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 3.75rem;
      padding: 0.625rem 1.75rem;

      & .brand-logo {
        display: block;
        width: 100%;
        max-height: 2.5rem;
        min-height: 2.5rem;
      }
    }

    & .sidebar-toggle-wrapper {
      position: absolute;
      top: 1.875rem;
      right: 0;
      transform: translate(50%, -50%);

      & .toggle-btn {
        background-color: $white;
        border: 1px solid $border;

        &:hover {
          border-color: $primary;
        }

        & .icon {
          font-size: 1rem;
        }
      }
    }

    & .sidebar-content-wrapper {
      height: calc(100% - 3.75rem);
      overflow-y: auto;
      overflow-x: hidden;

      & .content-list {
        display: flex;
        flex-direction: column;
        list-style: none;

        & .content-item {
          position: relative;
          margin: 0;
          white-space: nowrap;

          margin: 0.375rem 0;
          padding: 0 1rem;
          border-left: 0.2rem solid transparent;

          &.active {
            border-color: $primary;

            & .link {
              color: $primary !important;
            }
          }

          & .item-link {
            display: flex;
            align-items: center;
            color: $dark !important;
            border-radius: 0.5rem;
            padding: 0.5rem 0.875rem;

            &:hover {
              background-color: rgba(189, 197, 209, 0.2);
            }

            & .item-text {
              display: block;
              margin-left: 0.5rem;
            }
          }

          & .icon-subtitle {
            display: none;
          }

          & .item-subtitle {
            display: block;
            color: #8c98a4;
            font-size: 0.875rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.03125rem;
          }
        }
      }
    }

    & .sidebar-footer-wrapper {
      border-top: 1px solid $border;

      & .footer-list {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        padding: 0.75rem 2rem;

        & .footer-item {
          position: relative;
          margin: 0 0.5rem;
        }
      }
    }
  }
}
</style>
