<template>
  <UserLayout>
    <JobCard
      :data="app.filtersJobs.value[app.filtersIndex.value]"
      @on-click-card="app.onClickCard"
      @on-toggle-view-detail="app.onToggleViewDetail"
      @on-toggle-like-button="app.onToggleLikeButton"
      @on-toggle-dislike-button="app.onToggleDislikeButton"
      @on-toggle-skip-button="app.onToggleSkipButton"
    >
      <div class="result_search" :style="{ height: app.searchHeight.value }">
        <div class="search_bar" :style="{ top: app.isShowFormSearch.value ? 0 : app.formSearchHide.value }">
          <FormSearch is-disable-search-button @get-height="app.setHeight" @on-submit-form="app.onSubmitForm" />
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

    public isShowFormSearch: Ref<boolean> = this.ref(false);
    public formSearchHide: Ref<string> = this.ref("");
    public searchHeight: Ref<string> = this.ref("");
    public pageNumber: Ref<number> = this.ref(AppConst.DEFAULT.pageNumber);
    public pageSize: Ref<number> = this.ref(AppConst.DEFAULT.pageSize);
    public currentIndex: Ref<number> = this.ref(AppConst.DEFAULT.index);
    public filtersIndex: Ref<number> = this.ref(AppConst.DEFAULT.index);
    public isFetch: Ref<boolean> = this.ref(false);

    public searchData: Ref<any> = this.computed(() => {
      const data: any = StorageHelper.getLocalStorage(KeyConst.keys.searchCondition);
      return {
        ...data,
        startAtPagination: (this.pageNumber.value - 1) * this.pageSize.value,
        endAtPagination: (this.pageNumber.value - 1) * this.pageSize.value + this.pageSize.value,
      };
    });
    public filtersJobs: Ref<Array<JobModel>> = this.ref([]);

    public constructor() {
      super();

      this.onBeforeMount(async () => {
        this.commonStore.setIsLoading(true);
        await this.commonStore.fetchAllLocations();
        await this.commonStore.fetchAllSearchLabels();
        await this.seekersStore.fetchTotalJobsWithCondition(this.searchData.value);
        await this.seekersStore.fetchAllJobs(this.searchData.value);
        this.commonStore.setIsLoading(false);
      });

      this.watch(
        () => this.seekersStore.jobs,
        (jobs) => {
          jobs.forEach((value) => {
            this.filtersJobs.value.push(value);
          });
          while (this.filtersIndex.value > 0) {
            this.filtersJobs.value.shift();
            this.filtersIndex.value--;
          }
          this.isFetch.value = true;
        },
      );
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

    public onSubmitForm = () => {
      this.isShowFormSearch.value = false;
      this.commonStore.eventBus.emit("hideFormSearch", null);
    };

    public onClickCard = (id: number) => {
      this.router.push({ ...PathConst.userJobDetails, params: { jobId: id } });
    };

    public onToggleViewDetail = (id: number) => {
      this.router.push({ ...PathConst.userJobDetails, params: { jobId: id } });
    };

    public onToggleLikeButton = async (id: number) => {
      this.commonStore.setIsLoading(true);
      const isSuccess = await this.seekersStore.fetchInteractWithJob(id.toString(), AppConst.INTERACTION_TYPE.like);
      if (isSuccess) {
        this.seekersStore.totalJobsWithCondition--;
        this.seekersStore.jobs = this.seekersStore.jobs.filter((job) => job.id != id);
        this.onToggleSkipButton();
      }
      this.commonStore.setIsLoading(false);
    };

    public onToggleDislikeButton = async (id: number) => {
      this.commonStore.setIsLoading(true);
      const isSuccess = await this.seekersStore.fetchInteractWithJob(id.toString(), AppConst.INTERACTION_TYPE.dislike);
      if (isSuccess) {
        this.seekersStore.totalJobsWithCondition--;
        this.seekersStore.jobs = this.seekersStore.jobs.filter((job) => job.id != id);
        this.onToggleSkipButton();
      }
      this.commonStore.setIsLoading(false);
    };

    public onToggleSkipButton = async () => {
      if (this.currentIndex.value < this.seekersStore.totalJobsWithCondition - 1) {
        this.currentIndex.value++;
      } else {
        this.currentIndex.value = 0;
      }
      if (this.pageNumber.value * this.pageSize.value < this.seekersStore.totalJobsWithCondition) {
        this.pageNumber.value++;
      } else {
        this.pageNumber.value = 1;
      }
      this.filtersIndex.value++;
      if (this.filtersIndex.value >= this.filtersJobs.value.length / 2 && this.isFetch.value) {
        this.isFetch.value = false;
        await this.seekersStore.fetchAllJobs(this.searchData.value);
      }
    };

    public setHeight = (formHeight: number, elementHeight: number) => {
      this.searchHeight.value = elementHeight + "px";
      this.formSearchHide.value = "-" + (formHeight - elementHeight - 10) + "px";
    };
  },
);
</script>

<style scoped lang="scss">
@import "@/assets/scss/modules";

.result_search {
  margin: 0 10px;
  position: relative;

  & .search_bar {
    width: 100%;
    position: absolute;
    top: 0px;
    z-index: 2;
    transition: all 0.2s linear 0s;

    &.hide {
      top: -250px;
    }

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
  }
}
</style>
