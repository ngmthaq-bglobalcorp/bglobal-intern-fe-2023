<template>
  <header class="navbar-aside">
    <div class="navbar-container">
      <!-- Left Content -->
      <div class="navbar-left-wrapper">
        <!-- Search Form -->
        <form>
          <!-- Search -->
          <div class="input-group">
            <div class="input-group-icon">
              <i class="bi bi-search icon"></i>
            </div>
            <input type="search" class="search-input" :placeholder="app.t(`app.search`)" />
          </div>
          <!-- End Search -->
        </form>
        <!-- End Search Form -->
      </div>
      <!-- End Left content -->

      <!-- Right content -->
      <div class="navbar-right-wrapper">
        <ul class="list right-content">
          <li class="right-item"></li>
          <li class="right-item">
            <button class="account-wrapper icon-btn" @click.prevent="app.onToggleOpenMenu">
              <div class="avatar">
                <AvatarComponent
                  :avatarImage="app.profile.value.avatar || ''"
                  avatarAlt="Avatar"
                  :avatarInit="app.profile.value.name[0] || app.profile.value.username[0]"
                />
                <span class="status status-available"></span>
              </div>
            </button>
            <div :class="['dropdown-menu', 'menu-hidden', { 'menu-show': app.isMenuOpen.value }]">
              <div class="dropdown-item-header">
                <div class="avatar">
                  <AvatarComponent
                    :avatarImage="app.profile.value.avatar"
                    avatarAlt="Avatar"
                    :avatarInit="app.profile.value.name[0] || app.profile.value.username[0]"
                  />
                </div>
                <div class="media-body">
                  <span class="card-title" v-if="app.profile.value.name">{{ app.profile.value.name }}</span>
                  <span class="card-title" v-else>{{ app.profile.value.username }}</span>
                  <span class="card-text" v-if="app.profile.value.email">{{ app.profile.value.email }}</span>
                </div>
              </div>
              <div class="dropdown-divider"></div>
              <router-link
                :to="{ ...PathConst.adminUserProfile, params: { username: app.profile.value.username } }"
                class="link"
                v-if="!app.isAdmin.value"
              >
                <div class="dropdown-item">
                  {{ app.t(`app.profile`) }}
                </div>
              </router-link>
              <router-link :to="PathConst.adminUpdateProfile" class="link" v-if="!app.isAdmin.value">
                <div class="dropdown-item">
                  {{ app.t(`app.settings`) }}
                </div>
              </router-link>
              <div class="dropdown-divider" v-if="!app.isAdmin.value"></div>
              <div class="link" @click="app.onToggleSignOut">
                <div class="dropdown-item">
                  {{ app.t(`app.signout`) }}
                </div>
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
import AvatarComponent from "@/components/AdminComponents/Avatar/AvatarComponent.vue";
import { AppConst } from "@/const/app.const";
import { PathConst } from "@/const/path.const";
import { useAuthStore } from "@/stores/auth.store";
import type { Ref } from "vue";
import type { UserModel } from "@/models/user.model";

const app = defineClassComponent(
  class Component extends BaseComponent {
    public authStore = useAuthStore();
    public isMenuOpen: Ref<Boolean> = this.ref(false);
    public isAdmin: Ref<Boolean> = this.computed(() =>
      this.authStore.user.role === AppConst.ROLE.organization ? false : true,
    );
    public profile: Ref<UserModel> = this.computed(() => this.authStore.user);

    public constructor() {
      super();

      this.onBeforeMount(() => {
        this.authStore.getAdminUser();
      });
    }

    public onToggleOpenMenu = () => {
      this.isMenuOpen.value = !this.isMenuOpen.value;
    };

    public onToggleCloseMenu = () => {
      this.isMenuOpen.value = false;
    };

    public onToggleSignOut = async () => {
      const isSuccess = await this.authStore.fetchAdminSignOut();
      if (isSuccess) {
        // this.router.push(PathConst.adminSignin);
        window.location.href = PathConst.adminSignin.path;
      }
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

      & .input-group {
        position: relative;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        min-width: 21rem;

        & .input-group-icon {
          position: absolute;
          top: 1px;
          bottom: 1px;
          left: 1px;
          z-index: 4;
          display: flex;
          align-items: center;
          padding: 0.6125rem 1rem;

          & i {
            font-size: 0.875rem;
          }
        }

        & .search-input {
          display: block;
          width: 100%;
          border: none;
          border-radius: 0.3125rem;
          box-shadow: none;
          padding: 0.54688rem 0.6125rem 0.54688rem 3.25rem;
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
            box-shadow: 0 10px 40px 10px rgba(140, 152, 164, 0.175);
            margin-top: 0.5rem;
            animation-duration: 0.3s;

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

            & .link {
              color: $dark !important;
              cursor: pointer;

              & .dropdown-item {
                display: block;
                width: 100%;
                padding: 0.375rem 1.5rem;
                clear: both;
                white-space: nowrap;
                border: 0;
              }
            }
          }
        }
      }
    }
  }
}
</style>
