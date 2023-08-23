<template>
  <UserLayout>
    <div class="body">
      <div class="history_header">
        <button
          type="button"
          class="history_button"
          :class="{ active: app.isLikeList.value }"
          tabindex="0"
          @click="app.onChangeLikeList()"
        >
          <i class="bi bi-arrow-down icon" v-if="app.isLikeList.value"></i>
          <i class="bi bi-arrow-right icon" v-else></i>
          <span class="title">{{ app.t(`jobsApp.history.likedJobs`) }}</span>
        </button>
        <button
          type="button"
          class="history_button"
          :class="{ active: !app.isLikeList.value }"
          tabindex="0"
          @click="app.onChangeHistoryList()"
        >
          <i class="bi bi-arrow-down icon" v-if="!app.isLikeList.value"></i>
          <i class="bi bi-arrow-right icon" v-else></i>
          <span class="title">{{ app.t(`jobsApp.history.allJobs`) }}</span>
        </button>
      </div>

      <div class="history_list" v-for="job in app.filtersJobs.value" :key="job.id">
        <HistoryJobs
          :data="job"
          :is-like="app.seekersStore.listLikeJobs.find((value) => value.id === job.id) ? true : false"
          @on-click-card="app.onClickCard"
          @on-toggle-view-detail="app.onToggleViewDetail"
        />
      </div>

      <!-- Pagination -->
      <nav class="footer-pagination" v-if="app.totalPages.value > 0">
        <ul class="page-list">
          <li class="page-item">
            <button :class="['page-btn', { disabled: app.pageNumber.value <= 1 }]" @click.prevent="app.onTogglePrev">
              <i class="bi bi-chevron-double-left"></i>
            </button>
          </li>
          <li class="page-item" v-for="page in app.totalPages.value" :key="page">
            <button
              :class="['page-btn', { active: app.pageNumber.value === page }]"
              @click.prevent="app.onTogglePage(page)"
            >
              {{ page }}
            </button>
          </li>
          <li class="page-item">
            <button
              :class="['page-btn', { disabled: app.pageNumber.value >= app.totalPages.value }]"
              @click.prevent="app.onToggleNext"
            >
              <i class="bi bi-chevron-double-right"></i>
            </button>
          </li>
        </ul>
      </nav>
      <!-- End Pagination -->
    </div>
  </UserLayout>
</template>

<script setup lang="ts">
import { BaseComponent, defineClassComponent } from "@/plugins/component.plugin";
import UserLayout from "@/layouts/UserLayout/UserLayout.vue";
import HistoryJobs from "@/components/UserComponents/HistoryJobs/HistoryJobs.vue";
import { AppConst } from "@/const/app.const";
import { PathConst } from "@/const/path.const";
import { useSeekersStore } from "@/stores/seekers.store";
import type { Ref } from "vue";
import type { JobModel } from "@/models/job.model";

const app = defineClassComponent(
  class Component extends BaseComponent {
    public seekersStore = useSeekersStore();

    public isLikeList: Ref<boolean> = this.ref(true);
    public pageNumber: Ref<number> = this.ref(AppConst.DEFAULT.pageNumber);
    public pageSize: Ref<number> = this.ref(AppConst.DEFAULT.pageSize);

    public totalData: Ref<number> = this.computed(() => {
      if (this.isLikeList.value) {
        return this.seekersStore.listLikeJobs.length;
      } else {
        return this.seekersStore.listHistoryJobs.length;
      }
    });
    public totalPages: Ref<number> = this.computed(() => {
      return Math.ceil(this.totalData.value / this.pageSize.value);
    });
    public filtersJobs: Ref<Array<JobModel>> = this.computed(() => {
      let filterArray = [];
      if (this.isLikeList.value) {
        filterArray = this.seekersStore.listLikeJobs;
      } else {
        filterArray = this.seekersStore.listHistoryJobs;
      }
      return filterArray.filter((_, index) => {
        return (
          index >= (this.pageNumber.value - 1) * this.pageSize.value &&
          index < this.pageNumber.value * this.pageSize.value
        );
      });
    });

    public constructor() {
      super();

      this.onBeforeMount(async () => {
        this.commonStore.setIsLoading(true);
        await this.seekersStore.fetchSeekerHistory();
        this.commonStore.setIsLoading(false);
      });
    }

    public onChangeLikeList = () => {
      this.isLikeList.value = true;
      this.pageNumber.value = 1;
    };

    public onChangeHistoryList = () => {
      this.isLikeList.value = false;
      this.pageNumber.value = 1;
    };

    public onClickCard = (id: number) => {
      this.router.push({ ...PathConst.userJobDetails, params: { jobId: id } });
    };

    public onToggleViewDetail = (id: number) => {
      this.router.push({ ...PathConst.userJobDetails, params: { jobId: id } });
    };

    public onTogglePrev = () => {
      if (this.pageNumber.value > 1) {
        this.pageNumber.value = this.pageNumber.value - 1;
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };

    public onTogglePage = (page: number) => {
      this.pageNumber.value = page;
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    public onToggleNext = () => {
      if (this.pageNumber.value < this.totalPages.value) {
        this.pageNumber.value = this.pageNumber.value + 1;
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };
  },
);
</script>

<style scoped lang="scss">
@import "@/assets/scss/modules";

.body {
  height: calc(100vh - 52px);
  padding: 20px 12px;
  position: relative;

  & .history_header {
    margin-bottom: 10px;
    display: flex;
    padding: 6px;
    align-items: stretch;
    border-radius: 25px;
    justify-content: space-between;
    background-color: #fff;

    & .history_button {
      width: 100%;
      padding: 6px 4px;
      border-radius: 25px;
      display: inline-flex;
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-pack: center;
      justify-content: center;
      position: relative;
      box-sizing: border-box;
      -webkit-tap-highlight-color: transparent;
      background-color: transparent;
      outline: 0px;
      border: 0px;
      margin: 0px;
      cursor: pointer;
      user-select: none;
      vertical-align: middle;
      appearance: none;
      transition: all 500ms ease-in-out 0ms;
      color: #9f085f;

      &:first-child {
        margin-right: 2px;
      }

      &.active {
        color: #fff !important;
        background-color: #9f085f !important;
      }

      & .icon {
        margin-right: 0.5rem;
      }

      & .title {
        font-size: 12px;
        text-align: center;
        font-weight: 700;
        line-height: 24px;
        margin: 0px;
        letter-spacing: 0.02857em;
        text-transform: uppercase;
      }
    }
  }

  & .footer-pagination {
    padding-bottom: 30px;

    & .page-list {
      width: 100%;
      position: relative;
      display: flex;
      flex-wrap: wrap;
      -webkit-box-align: center;
      align-items: center;
      justify-content: center;
      padding: 0px;
      margin: 0px;
      list-style: none;

      & .page-item {
        & .page-btn {
          color: #fff;
          background: linear-gradient(180deg, #e65078 0%, #c0296b 100%);
          display: inline-flex;
          -webkit-box-align: center;
          align-items: center;
          -webkit-box-pack: center;
          justify-content: center;
          position: relative;
          -webkit-tap-highlight-color: transparent;
          background-color: transparent;
          outline: 0px;
          border: 0px;
          cursor: pointer;
          user-select: none;
          vertical-align: middle;
          appearance: none;
          text-decoration: none;
          font-weight: 400;
          font-size: 0.875rem;
          line-height: 1.43;
          letter-spacing: 0.01071em;
          border-radius: 16px;
          text-align: center;
          box-sizing: border-box;
          min-width: 32px;
          height: 32px;
          padding: 0px 6px;
          margin: 0px 3px;
          color: rgba(0, 0, 0, 0.87);
          transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
            background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

          &.disabled {
            opacity: 0.38;
            pointer-events: none;
            cursor: default;
          }

          &.active {
            color: #000;
            background: $white;
          }

          & i {
            color: #fff;
          }
        }
      }
    }
  }
}
</style>
