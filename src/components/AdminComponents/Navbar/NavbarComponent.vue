<template>
  <header class="navbar-aside">
    <div class="navbar-container">
      <!-- Left Content -->
      <div class="navbar-left-wrapper">
        <!-- Search Form -->
        <form action="" class="search-form">
          <div class="input-group-icon">
            <i class="bi bi-search icon"></i>
          </div>
          <input type="search" class="search-input" :placeholder="app.t(`app.search`)" />
        </form>
        <!-- End Search Form -->
      </div>
      <!-- End Left content -->

      <!-- Right content -->
      <div class="navbar-right-wrapper">
        <ul class="right-content">
          <li class="right-item"></li>
          <li class="right-item">
            <button class="account-wrapper icon-btn" @click.prevent="app.onToggleOpenMenu">
              <div class="avatar">
                <img src="@/assets/img/logo.svg" alt="Avatar" class="avatar-img" />
                <span class="status status-available"></span>
              </div>
            </button>
            <div :class="['dropdown-menu', 'menu-hidden', { 'menu-show': app.isMenuOpen.value }]">
              <div class="dropdown-item-header">
                <div class="avatar">
                  <img src="@/assets/img/logo.svg" alt="Avatar" class="avatar-img" />
                </div>
                <div class="media-body">
                  <span class="card-title">Minh Duc</span>
                  <span class="card-text">minhduc.mll@gmail.com</span>
                </div>
              </div>
              <div class="dropdown-divider"></div>
              <div class="dropdown-item">
                <router-link to="" class="link">{{ app.t(`app.profile`) }}</router-link>
              </div>
              <div class="dropdown-item">
                <router-link to="" class="link">{{ app.t(`app.settings`) }}</router-link>
              </div>
              <div class="dropdown-divider"></div>
              <div class="dropdown-item">
                <router-link to="" class="link">{{ app.t(`app.signout`) }}</router-link>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <!-- End Right content -->
    </div>
  </header>
</template>

<script setup lang="ts">
import { BaseComponent, defineClassComponent } from "@/plugins/component.plugin";
import type { Ref } from "vue";

const app = defineClassComponent(
  class Component extends BaseComponent {
    public isMenuOpen: Ref<Boolean> = this.ref(false);

    public constructor() {
      super();
    }

    public onToggleOpenMenu = () => {
      this.isMenuOpen.value = !this.isMenuOpen.value;
    };

    public onToggleCloseMenu = () => {
      this.isMenuOpen.value = false;
    };
  },
);
</script>

<style scoped lang="scss">
@import "@/assets/scss/modules";
@import "@/assets/scss/admin";

.navbar-aside {
  display: block;
  height: 3.75rem;
  z-index: 99;
  padding: 0 2rem;
  border-bottom: 1px solid $border;
  background-color: $white;
  transition: 0.2s ease-in-out;
  width: 100%;

  & .navbar-container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & .navbar-left-wrapper {
      display: block;
      position: relative;

      & .search-form {
        position: relative;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        min-width: 21rem;
        border-radius: 0.5rem;

        & .input-group-icon {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          z-index: 4;
          padding-left: 0.875rem;
          display: flex;
          align-items: center;
        }

        & .search-input {
          display: block;
          width: 100%;
          border: none;
          border-radius: 0.3125rem;
          box-shadow: none;
          height: calc(1.6em + 1.21875rem);
          padding: 0.54688rem 2.625rem;
          font-size: 0.875rem;
          font-weight: 400;
          line-height: 1.6;
          transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

          &:hover,
          &:focus {
            background-color: #f6f7fa;
            box-shadow: none;
          }

          &:focus {
            color: #1e2022;
            z-index: 3;
            outline: 0;
          }
        }
      }
    }

    & .navbar-right-wrapper {
      & .right-content {
        display: flex;

        & .right-item {
          margin-right: 0.5rem;
          display: inline-block;

          & .account-wrapper {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0.25rem;
            margin: 0.5rem 0;
            transition: 0.3s;

            & .avatar {
              position: relative;
              background-color: $white;
              width: 32px;
              height: 32px;
              border-radius: 50%;

              & .avatar-img {
                display: block;
                max-width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 50%;
              }

              & .status {
                position: absolute;
                bottom: -1.2px;
                right: -1.2px;
                width: 12px;
                height: 12px;
                border: 0.125rem solid $white;
                border-radius: 50%;

                &.status-available {
                  color: $white;
                  background-color: #00c9a7;
                }
              }
            }
          }

          & .dropdown-menu {
            position: absolute;
            width: 16rem;
            right: 0;
            left: auto;
            animation-duration: 300ms;
            box-shadow: 0 10px 40px 10px rgba(140, 152, 164, 0.175);
            margin-top: 0.5rem;

            & .dropdown-item-header {
              display: flex;
              align-items: center;
              padding: 0.375rem 1.5rem;

              & .avatar {
                position: relative;
                background-color: $white;
                width: 32px;
                height: 32px;
                border-radius: 50%;
                margin-right: 0.5rem;

                & .avatar-img {
                  display: block;
                  max-width: 100%;
                  height: 100%;
                  object-fit: cover;
                  border-radius: 50%;
                }
              }

              & .media-body {
                display: flex;
                flex-direction: column;

                & .card-title {
                  color: $dark;
                  font-weight: 600;
                  line-height: 1.4;
                }

                & .card-text {
                  color: $dark-variant;
                }
              }
            }

            & .dropdown-divider {
              height: 0;
              margin: 0.5rem 0;
              overflow: hidden;
              border-top: 1px solid $border;
            }

            & .dropdown-item {
              display: block;
              width: 100%;
              padding: 0.375rem 1.5rem;
              clear: both;
              white-space: nowrap;
              border: 0;

              & .link {
                color: $dark !important;
              }
            }
          }
        }
      }
    }
  }
}
</style>
