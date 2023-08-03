<template>
  <div class="user-list-container">
    <ul class="users-list list">
      <li class="users-item" v-for="item in app.filterData.value" :key="item.id">
        <template v-for="column in app.columns.value" :key="column.field">
          <router-link :to="PathConst.adminUserProfile" class="item-name link-default" v-if="column.field === 'name'">
            <AvatarComponent :data="item" />
            <span class="name">{{ item.name }}</span>
          </router-link>
          <div class="item-like" v-else-if="column.field === 'like'">
            <i class="bi bi-heart-fill icon"></i>
          </div>
          <div class="item-other" v-else>
            <span class="title">{{ column.headerName }}</span>
            <span class="desc">{{ item[column.field] }}</span>
          </div>
        </template>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { BaseComponent, defineClassComponent } from "@/plugins/component.plugin";
import AvatarComponent from "../Avatar/AvatarComponent.vue";
import type { Ref } from "vue";
import type { UserListProps } from "./UserListComponent";
import { PathConst } from "@/const/path.const";

const props = defineProps<UserListProps>();

const app = defineClassComponent(
  class Component extends BaseComponent {
    public columns: Ref<Array<any>> = this.ref(props.columns);
    public pageNumber: Ref<number> = this.ref(1);
    public pageSize: Ref<number> = this.computed(() => props.data.length);
    public totalData: Ref<number> = this.computed(() => props.data.length);
    public totalPages: Ref<number> = this.computed(() => {
      return Math.ceil(this.totalData.value / this.pageSize.value);
    });

    public filterData = this.computed(() => {
      const filterArray = props.data.filter((value, index) => {
        return (
          value.status === "active" &&
          index >= (this.pageNumber.value - 1) * this.pageSize.value &&
          index < this.pageNumber.value * this.pageSize.value
        );
      });
      return filterArray;
    });

    public constructor() {
      super();
    }

    public onTogglePrev = () => {
      if (this.pageNumber.value > 1) {
        this.pageNumber.value = this.pageNumber.value - 1;
      }
    };

    public onTogglePage = (page: number) => {
      this.pageNumber.value = page;
    };

    public onToggleNext = () => {
      if (this.pageNumber.value < this.totalPages.value) {
        this.pageNumber.value = this.pageNumber.value + 1;
      }
    };
  },
);
</script>

<style scoped lang="scss">
@import "@/assets/scss/modules";
@import "@/assets/scss/admin";

.user-list-container {
  & .users-list {
    display: flex;
    flex-direction: column;

    & .users-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem 0;
      border-bottom: 0.0625rem solid rgba($border, 0.7);

      &:last-child {
        border-bottom-width: 0;
      }

      & .item-name {
        display: flex;
        align-items: center;

        & .avatar-img {
          width: 2.5rem;
          height: 2.5rem;
        }

        & .name {
          color: $dark;
          font-weight: 600;
          margin-left: 0.5rem;

          &:hover {
            color: $blue !important;
          }
        }
      }

      & .item-like {
        justify-self: flex-end;

        & .icon {
          color: $red;
          font-size: 0.875rem;
        }
      }

      & .item-other {
        display: flex;
        flex-direction: column;
        align-items: start;

        & .title {
          color: $dark-variant;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.03125rem;
          text-transform: uppercase;
        }

        & .desc {
          color: $dark;
        }
      }
    }
  }
}
</style>
