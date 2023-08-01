<template>
  <div class="datatable-container custom-card">
    <!-- Header -->
    <div class="card-header">
      <div class="header-left">
        <form>
          <!-- Search -->
          <div class="input-group">
            <div class="input-group-icon">
              <i class="bi bi-search icon"></i>
            </div>
            <input type="search" class="search-input" :placeholder="app.t(`app.searchSeekers`)" />
          </div>
          <!-- End Search -->
        </form>
      </div>

      <div class="header-right" v-if="app.totalSelected.value > 0">
        <!-- Datatable Info -->
        <div class="counter-info active">
          <div class="d-flex align-items-center">
            <span class="selected">
              <span>{{ app.totalSelected.value }}</span>
              {{ app.t(`app.selected`) }}
            </span>
            <button class="delete-btn small-btn" @click.prevent="app.onToggleDelete">
              <i class="bi bi-trash3"></i>
              {{ app.t(`app.delete`) }}
            </button>
          </div>
        </div>
        <!-- End Datatable Info -->
      </div>
      <!-- End Row -->
    </div>
    <!-- End Header -->

    <!-- Table -->
    <div class="table-wrapper">
      <table class="table table-lg table-borderless table-thead-bordered table-nowrap table-align-middle card-table">
        <thead>
          <tr>
            <th class="table-column-0" style="width: 45px">
              <div class="custom-control">
                <input class="custom-control-input" type="checkbox" :checked="app.selectedAll.value" />
                <label class="custom-control-label" @click="app.onToggleSelectAll"></label>
              </div>
            </th>
            <th
              :class="[
                'sorting',
                { 'sorting-asc': app.sortingField.value === column.field && app.sortingDirection.value === 'asc' },
                { 'sorting-desc': app.sortingField.value === column.field && app.sortingDirection.value === 'desc' },
              ]"
              tabindex="0"
              @click.prevent="app.onToggleSorting(column.field)"
              v-for="column in props.columns"
              :key="column.field"
            >
              {{ column.headerName }}
            </th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="data in app.filterData.value" :key="data.id">
            <td class="table-column-0">
              <div class="custom-control">
                <input class="custom-control-input" type="checkbox" :checked="data.isSelected" />
                <label class="custom-control-label" @click="app.onToggleSelectData(data)"></label>
              </div>
            </td>
            <td class="sorting-1" v-for="column in props.columns" :key="column.field">
              <template v-if="column.field === 'name'">
                <router-link to="" class="item-name link-default">
                  <span>{{ data[column.field] }}</span>
                </router-link>
              </template>
              <template v-else-if="column.field === 'status'">
                <div>
                  <span
                    :class="[
                      'legend-indicator',
                      { 'bg-success': data.status === 1 },
                      { 'bg-danger': data.status === 0 },
                    ]"
                  ></span>
                  {{ data[column.field] }}
                </div>
              </template>
              <template v-else>
                <span>{{ data[column.field] }}</span>
              </template>
            </td>
            <td>
              <button
                class="lock-btn small-btn unlock-btn"
                @click.prevent="app.onToggleUnlock(data.id)"
                v-if="data.status === 'lock'"
              >
                <i class="bi bi-unlock me-1"></i>
                <span>{{ app.t(`app.unlock`) }}</span>
              </button>
              <button class="lock-btn small-btn" @click.prevent="app.onToggleLock(data.id)" v-else>
                <i class="bi bi-lock me-1"></i>
                <span>{{ app.t(`app.lock`) }}</span>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- End Table -->

    <!-- Footer -->
    <div class="card-footer">
      <div class="footer-left">
        <span class="me-2">{{ app.t(`app.showing`) }}</span>

        <!-- Select -->
        <select class="select-custom" name="select" v-model="app.pageSize.value">
          <option :value="index * 5" :selected="app.pageSize.value === index * 5" v-for="index in 4" :key="index">
            {{ index * 5 }}
          </option>
        </select>
        <!-- End Select -->

        <span class="ms-2 me-2">{{ app.t(`app.of`) }}</span>

        <!-- Pagination Quantity -->
        <span>{{ app.totalData.value }}</span>
      </div>

      <!-- Pagination -->
      <div class="footer-right">
        <ul class="list">
          <li class="page-item">
            <button
              :class="['page-btn small-btn', { disabled: app.pageNumber.value <= 1 }]"
              @click.prevent="app.onTogglePrev"
            >
              {{ app.t(`app.prev`) }}
            </button>
          </li>
          <li class="page-item" v-for="page in app.totalPages.value" :key="page">
            <button
              :class="['page-btn small-btn', { active: app.pageNumber.value === page }]"
              @click.prevent="app.onTogglePage(page)"
            >
              {{ page }}
            </button>
          </li>
          <li class="page-item">
            <button
              :class="['page-btn small-btn', { disabled: app.pageNumber.value >= app.totalPages.value }]"
              @click.prevent="app.onToggleNext"
            >
              {{ app.t(`app.next`) }}
            </button>
          </li>
        </ul>
      </div>
      <!-- End Pagination -->
    </div>
    <!-- End Footer -->
  </div>
</template>

<script setup lang="ts">
import { BaseComponent, defineClassComponent } from "@/plugins/component.plugin";
import type { Ref } from "vue";
import type { DatatableEmits, DatatableProps } from "./DatatableComponent";

const props = defineProps<DatatableProps>();
const emit = defineEmits<DatatableEmits>();

const app = defineClassComponent(
  class Component extends BaseComponent {
    public sortingField: Ref<string> = this.ref("");
    public sortingDirection: Ref<string> = this.ref("");
    public pageSize: Ref<number> = this.ref(10);
    public pageNumber: Ref<number> = this.ref(1);
    public selectedAll: Ref<boolean> = this.ref(false);

    public totalData: Ref<number> = this.computed(() => props.data.length);
    public totalPages: Ref<number> = this.computed(() => {
      return Math.ceil(this.totalData.value / this.pageSize.value);
    });
    public totalSelected: Ref<number> = this.computed(() => {
      return props.data.reduce((acc: number, cur: any) => acc + (cur.isSelected ? 1 : 0), 0);
    });
    public filterData = this.computed(() => {
      const pageFilter = props.data.filter((_, index) => {
        return (
          index >= (this.pageNumber.value - 1) * this.pageSize.value &&
          index < this.pageNumber.value * this.pageSize.value
        );
      });
      if (pageFilter.length === 0) {
        this.pageNumber.value--;
      }
      return pageFilter;
    });

    public constructor() {
      super();

      this.watch(
        () => this.totalSelected.value,
        (totalSelected) => {
          if (totalSelected === this.totalData.value) {
            this.selectedAll.value = true;
          } else {
            this.selectedAll.value = false;
          }
        },
      );
    }

    public onToggleDelete = () => {
      const deletedArray = props.data.reduce((acc: Array<number>, cur: any) => {
        if (cur.isSelected) {
          acc.push(cur.id);
        }
        return acc;
      }, []);

      emit("onDeleteSelected", deletedArray);
    };

    public onToggleLock = (id: number) => {
      emit("onLockSelected", id);
    };

    public onToggleUnlock = (id: number) => {
      emit("onUnlockSelected", id);
    };

    public onToggleSelectData = (data: any) => {
      data.isSelected = !data.isSelected;
    };

    public onToggleSelectAll = () => {
      if (this.selectedAll.value) {
        this.selectedAll.value = false;
        props.data.filter((value) => {
          value.isSelected = false;
        });
      } else {
        this.selectedAll.value = true;
        props.data.filter((value) => {
          value.isSelected = true;
        });
      }
    };

    public onToggleSorting = (field: string) => {
      if (this.sortingField.value === field) {
        if (this.sortingDirection.value === "") {
          this.sortingDirection.value = "asc";
        } else if (this.sortingDirection.value === "asc") {
          this.sortingDirection.value = "desc";
        } else {
          this.sortingDirection.value = "";
        }
      } else {
        this.sortingField.value = field;
        this.sortingDirection.value = "asc";
      }
    };

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

.datatable-container {
  box-shadow: 0 0.375rem 0.75rem rgba(140, 152, 164, 0.075);

  & .card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    padding: 1rem 1.3125rem;
    background-color: transparent;
    border-bottom: 0.0625rem solid $border;

    & .header-left {
      margin: 0;

      & .input-group {
        position: relative;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        border-bottom: 0.0625rem solid $border;

        & .input-group-icon {
          position: absolute;
          top: 1px;
          bottom: 1px;
          left: 1px;
          z-index: 4;
          display: flex;
          align-items: center;

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
          padding: 0.6125rem 0 0.6125rem 2rem;
          font-size: 0.875rem;
          font-weight: 400;
          line-height: 1.6;
          transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

          &:focus {
            color: #1e2022;
            z-index: 3;
            outline: 0;
          }
        }
      }
    }

    & .header-right {
      display: grid;
      align-items: center;
      justify-content: flex-end;
      gap: 0.5rem;

      & .counter-info {
        display: none;

        &.active {
          display: block;
        }

        & .selected {
          font-size: 0.875rem;
          margin-right: 1rem;
        }

        & .delete-btn {
          padding: 0.5rem 1rem;
          font-size: 0.8125rem;
          border-radius: 0.3125rem;
          color: $danger;
          background-color: $white;
          border-color: $danger;

          &:hover {
            color: $white;
            background-color: $danger;
          }
        }
      }
    }
  }

  & .table-wrapper {
    position: relative;
    overflow-x: auto;

    & .table {
      margin-bottom: 0;

      & th,
      td {
        color: #677788;
        font-size: 0.875rem;
        font-weight: 400;
        padding: 1rem 1.5rem;
        white-space: nowrap;
        vertical-align: middle;
      }

      & th {
        background-color: #f8fafd;
        text-transform: uppercase;
      }

      & .table-column-0 {
        padding-right: 0 !important;

        & .custom-control {
          display: flex;
          position: relative;
          vertical-align: middle;

          & .custom-control-input {
            position: absolute;
            visibility: hidden;
            opacity: 0;
          }

          & .custom-control-label {
            position: absolute;
            transform: translate(0, -50%);
            width: 0.875rem;
            height: 0.875rem;
            vertical-align: top;
            float: left;
            background-repeat: no-repeat;
            background-position: center;
            background-size: contain;
            border: 1px solid rgba(231, 234, 243, 0.7);
            border-radius: 0.25em;
            z-index: 3;
            cursor: pointer;

            &:checked {
              color: $white;
              border-color: $blue-light;
              background-color: $blue-light;
              background-image: url("@/assets/img/check.svg");
            }
          }

          & .custom-control-input:checked ~ .custom-control-label {
            color: $white;
            border-color: $blue-light;
            background-color: $blue-light;
            background-image: url("@/assets/img/check.svg");
          }
        }
      }

      & .sorting {
        position: relative;
        overflow: hidden;
        cursor: pointer;

        &::after {
          content: "";
          display: inline-flex;
          -ms-flex-align: center;
          align-items: center;
          width: 0.7rem;
          height: 0.7rem;
          background-image: url("@/assets/img/sorting.svg");
          background-repeat: no-repeat;
          background-position: right center;
          background-size: 0.7rem 0.7rem;
          margin-left: 0.5rem;
          -webkit-transform: translateY(-40%);
          transform: translateY(-40%);
        }

        &.sorting-asc {
          &::after {
            content: "";
            background-image: url("@/assets/img/sorting-asc.svg");
          }
        }

        &.sorting-desc {
          &::after {
            content: "";
            background-image: url("@/assets/img/sorting-desc.svg");
          }
        }
      }

      & .item-name {
        color: #000;
        font-weight: 600;

        &:hover {
          color: $blue !important;
        }
      }

      & .legend-indicator {
        display: inline-block;
        width: 0.5rem;
        height: 0.5rem;
        background-color: $dark;
        border-radius: 50%;
        margin-right: 0.4375rem;

        &.bg-success {
          background-color: $success;
        }

        &.bg-danger {
          background-color: $danger;
        }
      }

      & .lock-btn {
        background-color: transparent;
        border-color: $border;
        padding: 0.5rem 1rem;

        &:hover {
          color: $danger;
          box-shadow: 0 3px 6px -2px rgba(140, 152, 164, 0.25);
        }

        &.unlock-btn {
          &:hover {
            color: $warning;
          }
        }
      }
    }
  }

  & .card-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    padding: 1.3125rem;
    background-color: transparent;
    border-top: 0.0625rem solid $border;

    & .footer-left {
      display: flex;
      align-items: center;
      justify-content: flex-start;

      & .select-custom {
        color: $dark-variant;
        padding: 0.6125rem 0.5rem;
        border: none;
        cursor: pointer;

        &:focus {
          outline: 0;
        }
      }
    }

    & .footer-right {
      display: flex;
      align-items: center;
      justify-content: flex-end;

      & .page-item {
        margin-right: 0.25rem;

        & .page-btn {
          color: $dark;
          background-color: transparent;
          border: none;
          padding: 0.375rem 0.75rem;

          &:hover {
            color: $blue;
            background-color: $light;
          }

          &.active {
            color: $white;
            background-color: $blue;
            border-color: $blue;
          }
        }
      }
    }
  }
}
</style>
