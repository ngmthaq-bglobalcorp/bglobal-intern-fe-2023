<template>
  <div class="pagination-container">
    <ul class="list">
      <li class="page-item">
        <button
          :class="['page-btn small-btn primary-btn', { disabled: app.currentPage.value <= 1 }]"
          @click.prevent="app.onTogglePrev"
        >
          <i class="bi bi-caret-left"></i>
        </button>
      </li>
      <li class="page-item" v-for="page in app.totalPages.value" :key="page">
        <button
          :class="['page-btn small-btn primary-btn', { active: app.currentPage.value === page }]"
          @click.prevent="app.onTogglePage(page)"
        >
          {{ page }}
        </button>
      </li>
      <li class="page-item">
        <button
          :class="['page-btn small-btn primary-btn', { disabled: app.currentPage.value >= app.totalPages.value }]"
          @click.prevent="app.onToggleNext"
        >
          <i class="bi bi-caret-right"></i>
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { BaseComponent, defineClassComponent } from "@/plugins/component.plugin";
import type { PaginationEmits, PaginationProps } from "./PaginationComponent";
import type { Ref } from "vue";

const props = defineProps<PaginationProps>();
const emits = defineEmits<PaginationEmits>();

const app = defineClassComponent(
  class Component extends BaseComponent {
    public currentPage: Ref<number> = this.computed(() => props.currentPage);
    public pageSize: Ref<number> = this.computed(() => props.pageSize);
    public totalCount: Ref<number> = this.computed(() => props.totalCount);
    public totalPages: Ref<number> = this.computed(() => {
      return Math.ceil(this.totalCount.value / this.pageSize.value);
    });

    public constructor() {
      super();

      this.onUpdated(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }

    public onTogglePrev = () => {
      if (this.currentPage.value > 1) {
        emits("onPageChange", this.currentPage.value - 1);
      }
    };

    public onTogglePage = (page: number) => {
      emits("onPageChange", page);
    };

    public onToggleNext = () => {
      if (this.currentPage.value < this.totalPages.value) {
        emits("onPageChange", this.currentPage.value + 1);
      }
    };
  },
);
</script>

<style scoped lang="scss">
@import "@/assets/scss/modules";
@import "@/assets/scss/admin";

.pagination-container {
  display: block;

  & .list {
    display: flex;
    align-items: center;
    justify-content: center;

    & .page-item {
      margin-right: 0.5rem;

      & .page-btn {
        color: $blue;
        background-color: transparent;
        padding: 0.5rem 1rem;
        font-size: 1rem;

        &:hover {
          color: $blue;
          background-color: $light;
        }

        &.active {
          color: $white;
          background-color: $blue;
          border-color: $blue;
        }

        &.disabled {
          color: $disabled-color !important;
          pointer-events: none;
        }
      }
    }
  }
}
</style>
