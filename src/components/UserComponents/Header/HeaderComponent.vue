<template>
  <div class="first-header">
    <RouterLink to="/" class="logo text-header" :class="{ disabled: props.isAuth }">
      <h4 class="logo-title">Job Searchers</h4>
    </RouterLink>
    <div class="list-items" v-if="!props.isAuth">
      <div class="items-detail">
        <RouterLink :to="PathConst.home" class="item-link">
          <img src="@/assets/img/house.svg" alt="Home" class="image" />
          <span class="text">{{ app.t("jobsApp.header.home") }}</span>
        </RouterLink>
      </div>
      <div class="items-detail">
        <RouterLink :to="PathConst.userProfile" class="item-link">
          <i class="bi bi-person-circle icon"></i>
          <span class="text">{{ app.t("jobsApp.header.profile") }}</span>
        </RouterLink>
      </div>
      <div class="items-detail">
        <RouterLink :to="PathConst.userHistory" class="item-link">
          <img src="@/assets/img/history.svg" alt="History" class="image" />
          <span class="text">{{ app.t("jobsApp.header.history") }}</span>
        </RouterLink>
      </div>
      <div class="items-detail">
        <div class="item-link" @click="app.onToggleSignOut">
          <i class="bi bi-box-arrow-right icon"></i>
          <span class="text">{{ app.t("jobsApp.header.logout") }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { BaseComponent, defineClassComponent } from "@/plugins/component.plugin";
import { PathConst } from "@/const/path.const";
import { useAuthStore } from "@/stores/auth.store";
import type { HeaderProps } from "./HeaderComponent";

const props = defineProps<HeaderProps>();

const app = defineClassComponent(
  class Component extends BaseComponent {
    public authStore = useAuthStore();

    public constructor() {
      super();
    }

    public onToggleSignOut = async () => {
      this.commonStore.setIsLoading(true);
      const isSuccess = await this.authStore.fetchAdminSignOut();
      if (isSuccess) {
        // window.location.href = PathConst.userSignin.path;
      } else {
        // window.location.href = PathConst.userSignin.path;
      }
      this.commonStore.setIsLoading(false);
    };
  },
);
</script>

<style scoped lang="scss">
@import "@/assets/scss/modules";

.first-header {
  height: 52px;
  display: flex;
  padding: 8px 16px;
  align-items: center;
  justify-content: space-between;
  background-color: #e65078;
  position: relative;
  z-index: 999;

  & .logo {
    color: #fff !important;
    text-decoration: none !important;
    min-width: 96px;
    border-radius: 8px;

    &.disabled {
      pointer-events: none;
      cursor: default;
    }
  }

  & .list-items {
    display: flex;
    align-items: center;
    justify-content: center;

    & .items-detail {
      display: flex;
      align-items: flex-end;
      justify-content: center;
      margin-left: 1rem;

      & .item-link {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-decoration: none !important;
        color: #fff !important;
        cursor: pointer;

        & .image {
          transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        }

        & .icon {
          font-size: 20px;
          line-height: 1;
          padding: 2px;
          margin-bottom: 0.5px;
          transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        }

        & .text {
          font-size: 12px;
          font-weight: 400;
          line-height: 12px;
        }
      }
    }
  }
}
</style>
