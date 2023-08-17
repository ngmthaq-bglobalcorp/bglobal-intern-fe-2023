<template>
  <UserLayout>
    <JobCard
      :data="app.filtersJobs.value[app.currentIndex.value]"
      @on-click-card="app.onClickCard"
      @on-toggle-view-detail="app.onToggleViewDetail"
      @on-toggle-like-button="app.onToggleLikeButton"
      @on-toggle-dislike-button="app.onToggleDislikeButton"
      @on-toggle-skip-button="app.onToggleSkipButton"
    >
      <div class="result_search">
        <div class="search_bar" :class="{ hide: !app.isShowFormSearch.value }">
          <FormSearch is-disable-search-button />
          <div class="search-condition" @click="app.onOpenFormSearch()">
            <div class="content" v-if="app.isShowFormSearch.value">
              <i class="bi bi-arrow-up-short" style="font-size: 18px; color: #9f085f"></i>
              <p class="">{{ app.t(`jobsApp.jobCard.close`) }}</p>
            </div>
            <div class="content" v-else>
              <i class="bi bi-arrow-down-short" style="font-size: 18px; color: #9f085f"></i>
              <p class="">{{ app.t(`jobsApp.jobCard.currentSearch`) }}</p>
            </div>
          </div>
        </div>
      </div>
    </JobCard>
  </UserLayout>
</template>

<script setup lang="ts">
import { BaseComponent, defineClassComponent } from "@/plugins/component.plugin";
import UserLayout from "@/layouts/UserLayout/UserLayout.vue";
import JobCard from "@/components/UserComponents/JobCard/JobCard.vue";
import FormSearch from "@/components/UserComponents/HomeContent/Form/FormSearch.vue";
import { AppConst } from "@/const/app.const";
import { KeyConst } from "@/const/key.const";
import { PathConst } from "@/const/path.const";
import { StorageHelper } from "@/helpers/storage.helper";
import { useSeekersStore } from "@/stores/seekers.store";
import type { Ref } from "vue";
import type { JobModel } from "@/models/job.model";

const app = defineClassComponent(
  class Component extends BaseComponent {
    public seekersStore = useSeekersStore();

    public searchData = this.ref(StorageHelper.getLocalStorage(KeyConst.keys.searchCondition));
    public isShowFormSearch: Ref<boolean> = this.ref(false);
    public currentIndex: Ref<number> = this.ref(0);

    public filtersJobs: Ref<Array<JobModel>> = this.computed(() => this.seekersStore.jobs);

    public constructor() {
      super();

      this.onBeforeMount(async () => {
        this.commonStore.setIsLoading(true);
        await this.seekersStore.fetchAllJobs(this.searchData.value);
        this.commonStore.setIsLoading(false);
      });
    }

    public onOpenFormSearch = () => {
      this.isShowFormSearch.value = !this.isShowFormSearch.value;
      if (this.isShowFormSearch.value) {
        this.commonStore.eventBus.emit("showFormSearch", null);
      } else {
        this.commonStore.eventBus.emit("hideFormSearch", null);
      }
      return this.isShowFormSearch.value;
    };

    public onClickCard = (id: number) => {
      this.router.push({ ...PathConst.userJobDetails, params: { jobId: id } });
    };

    public onToggleViewDetail = (id: number) => {
      this.router.push({ ...PathConst.userJobDetails, params: { jobId: id } });
    };

    public onToggleLikeButton = async (id: number) => {
      this.commonStore.setIsLoading(true);
      let isSuccess = true;
      isSuccess = await this.seekersStore.fetchInteractWithJob(id.toString(), AppConst.INTERACTION_TYPE.like);
      isSuccess = await this.seekersStore.fetchTotalJobsWithCondition(this.searchData.value);
      if (isSuccess) {
        this.seekersStore.jobs = this.seekersStore.jobs.filter((job) => job.id != id);
        this.onToggleSkipButton();
      }
      this.commonStore.setIsLoading(false);
    };

    public onToggleDislikeButton = async (id: number) => {
      this.commonStore.setIsLoading(true);
      let isSuccess = true;
      isSuccess = await this.seekersStore.fetchInteractWithJob(id.toString(), AppConst.INTERACTION_TYPE.dislike);
      isSuccess = await this.seekersStore.fetchTotalJobsWithCondition(this.searchData.value);
      if (isSuccess) {
        this.seekersStore.jobs = this.seekersStore.jobs.filter((job) => job.id != id);
        await this.seekersStore.fetchAllJobs(this.searchData.value);
        this.onToggleSkipButton();
      }
      this.commonStore.setIsLoading(false);
    };

    public onToggleSkipButton = () => {
      if (this.currentIndex.value < this.filtersJobs.value.length - 1) {
        this.currentIndex.value++;
      } else {
        this.currentIndex.value = 0;
      }
    };
  },
);
</script>

<style scoped lang="scss">
@import "@/assets/scss/modules";

.result_search {
  margin: 0 10px;
  position: relative;
  height: 52px;

  & .search_bar {
    width: 100%;
    position: absolute;
    top: 0px;
    z-index: 2;
    transition: all 0.2s linear 0s;

    & .search-condition {
      width: 210px;
      height: 40px;
      margin: auto;
      display: flex;
      transform: translateY(-1px);
      align-items: flex-start;
      padding-top: 2px;
      background-size: contain;
      justify-content: center;
      background-repeat: no-repeat;
      background-position: top center;
      background-image: url(@/assets/img/tab.png);

      & .content {
        display: flex;
        cursor: pointer;

        & p {
          color: #9f085f;
          font-size: 16px;
          font-weight: 400;
          line-height: 23px;
          padding-left: 6px;
        }
      }
    }

    &.hide {
      top: -250px;
      width: 100%;
      transition: all 0.2s linear 0s;
      position: absolute;
      z-index: 2;
    }
  }
}
</style>
