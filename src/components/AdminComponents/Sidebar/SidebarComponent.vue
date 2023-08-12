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
          <!-- Sidebar Item -->
          <template v-for="item in app.filtersSidebarItem.value" :key="item.name">
            <li class="content-item" v-if="item.title">
              <i class="bi bi-three-dots icon-subtitle"></i>
              <span class="item-subtitle">{{ app.t(`app.manage`) }}</span>
            </li>
            <li class="content-item" :class="{ active: app.route.name === item.name }" v-else>
              <router-link :to="item.link" class="item-link link">
                <i :class="['bi', item.icon, 'icon']"></i>
                <span class="item-text">{{ item.text }}</span>
              </router-link>
            </li>
          </template>
          <!-- End Sidebar Item -->
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
import { AppConst } from "@/const/app.const";
import { useAuthStore } from "@/stores/auth.store";
import type { Ref } from "vue";

const app = defineClassComponent(
  class Component extends BaseComponent {
    public authStore = useAuthStore();
    public adminItems: Ref<Array<any>> = this.ref([
      {
        name: "adminDashboard",
        text: this.t(`app.dashboard`),
        link: PathConst.adminDashboard.path,
        icon: "bi-house",
      },
      {
        title: true,
        text: this.t(`app.manage`),
        icon: "bi-three-dots",
      },
      {
        name: "adminSeekers",
        text: this.t(`app.seekers`),
        link: PathConst.adminSeekers.path,
        icon: "bi-people",
      },
      {
        name: "adminOrganization",
        text: this.t(`app.hiringOrganization`),
        link: PathConst.adminOrganization.path,
        icon: "bi-buildings",
      },
      {
        name: "adminNews",
        text: this.t(`app.news`),
        link: PathConst.adminNews.path,
        icon: "bi-newspaper",
      },
    ]);
    public organizationItems: Ref<Array<any>> = this.ref([
      {
        name: "adminDashboard",
        text: this.t(`app.dashboard`),
        link: PathConst.adminDashboard.path,
        icon: "bi-house",
      },
      {
        title: true,
        text: this.t(`app.manage`),
        icon: "bi-three-dots",
      },
      {
        name: "adminJobsList",
        text: this.t(`app.jobs`),
        link: PathConst.adminJobsList.path,
        icon: "bi-list-task",
      },
    ]);
    public darkMode: Ref<Boolean> = this.ref(false);
    public collapse: Ref<Boolean> = this.ref(false);

    public filtersSidebarItem = this.computed(() => {
      if (this.authStore.user.role.includes(AppConst.ROLE.admin)) {
        return this.adminItems.value;
      } else {
        return this.organizationItems.value;
      }
    });

    public constructor() {
      super();

      this.onBeforeMount(() => {
        this.authStore.getAdminUser();
      });
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
