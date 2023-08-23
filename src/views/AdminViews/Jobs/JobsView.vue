<template>
  <AdminLayout>
    <PageHeader
      :target="app.t(`app.jobs`)"
      :button="app.t(`app.add`, { value: app.t(`app.jobs`) })"
      icon="bi-person-plus-fill"
      @on-toggle-button="app.onToggleButton"
    />
    <div class="jobs-header">
      <span class="jobs-total">
        {{ `${app.filtersJobs.value.length} ${app.t(`app.jobs`)}` }}
      </span>
      <ul class="nav-segment list">
        <li class="nav-item">
          <button
            :class="['view-btn', { active: app.view.value === AppConst.VIEW.columnView }]"
            @click="app.onToggleColumnView"
          >
            <i class="bi bi-grid icon"></i>
          </button>
        </li>
        <li class="nav-item">
          <button
            :class="['view-btn', { active: app.view.value === AppConst.VIEW.listView }]"
            @click="app.onToggleListView"
          >
            <i class="bi bi-view-list icon"></i>
          </button>
        </li>
      </ul>
    </div>

    <!-- Job Card List -->
    <ul class="jobs-list list" v-if="app.filtersJobs.value.length > 0">
      <li class="jobs-item" v-for="item in app.filtersJobs.value" :key="item.id">
        <JobCard
          :data="item"
          @on-click-card="app.onClickCard"
          @on-toggle-update-button="app.onToggleUpdateButton"
          @on-toggle-delete-button="app.onToggleDeleteButton"
        />
      </li>
    </ul>
    <!-- End Job Card List -->

    <!-- Message -->
    <div class="jobs-message" v-else>
      <img src="@/assets/img/oc-collaboration.svg" alt="Hi" class="image" />
      <h1 class="title">{{ app.t(`app.hello`) }}</h1>
      <span class="desc">{{ app.t(`app.enjoy`) }}</span>
      <button class="small-btn primary-btn" @click="app.onToggleCreateButton">{{ app.t(`app.create`) }}</button>
    </div>
    <!-- End Message -->

    <!-- Pagination -->
    <div class="footer-pagination" v-if="app.totalPages.value > 0">
      <Pagination
        :current-page="app.pageNumber.value"
        :page-size="app.pageSize.value"
        :total-count="app.totalData.value"
        @on-page-change="app.onPageChange"
        v-if="app.totalPages.value > 0"
      />
    </div>
    <!-- End Pagination -->
  </AdminLayout>
</template>

<script setup lang="ts">
import { BaseComponent, defineClassComponent } from "@/plugins/component.plugin";
import AdminLayout from "@/layouts/AdminLayout/AdminLayout.vue";
import PageHeader from "@/components/AdminComponents/PageHeader/PageHeaderComponent.vue";
import JobCard from "@/components/AdminComponents/JobCard/JobCardComponent.vue";
import { AppConst } from "@/const/app.const";
import { PathConst } from "@/const/path.const";
import { useOrganizationStore } from "@/stores/organization.store";
import type { Ref } from "vue";
import type { JobModel } from "@/models/job.model";

const app = defineClassComponent(
  class Component extends BaseComponent {
    public organizationStore = useOrganizationStore();

    public view: Ref<string> = this.ref(AppConst.VIEW.columnView);
    public pageNumber: Ref<number> = this.ref(1);
    public pageSize: Ref<number> = this.ref(10);

    public totalData: Ref<number> = this.computed(() => this.organizationStore.jobs.length);
    public totalPages: Ref<number> = this.computed(() => {
      return Math.ceil(this.totalData.value / this.pageSize.value);
    });
    public filtersJobs: Ref<Array<JobModel>> = this.computed(() => {
      const filterArray = this.organizationStore.jobs.filter((_, index) => {
        return (
          index >= (this.pageNumber.value - 1) * this.pageSize.value &&
          index < this.pageNumber.value * this.pageSize.value
        );
      });
      return filterArray;
    });

    public constructor() {
      super();

      this.onBeforeMount(async () => {
        this.commonStore.setIsLoading(true);
        await this.organizationStore.fetchAllJobs();
        this.commonStore.setIsLoading(false);
      });
    }

    public onToggleButton = () => {
      this.router.push(PathConst.adminAddJob);
    };

    public onToggleCreateButton = () => {
      this.router.push(PathConst.adminAddJob);
    };

    public onClickCard = (id: number) => {
      this.router.push({ ...PathConst.adminJobDetail, params: { jobId: id } });
    };

    public onToggleUpdateButton = (id: number) => {
      this.router.push({ ...PathConst.adminUpdateJob, params: { jobId: id } });
    };

    public onToggleDeleteButton = async (id: number) => {
      this.commonStore.setIsLoading(true);
      const isSuccess = await this.organizationStore.fetchDeleteJob(id.toString());
      if (isSuccess) {
        this.organizationStore.jobs = this.organizationStore.jobs.filter((job) => job.id != id);
      }
      this.commonStore.setIsLoading(false);
    };

    public onToggleColumnView = () => {
      this.view.value = AppConst.VIEW.columnView;
    };

    public onToggleListView = () => {
      this.view.value = AppConst.VIEW.listView;
    };

    public onPageChange = (page: number) => {
      if (page >= 1 && page <= this.totalPages.value) {
        this.pageNumber.value = page;
      }
    };
  },
);
</script>

<style scoped lang="scss">
@import "@/assets/scss/modules";
@import "@/assets/scss/admin";

.jobs-header {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 2rem;

  & .jobs-total {
    flex: 1 0 0%;
    font-size: 1.125rem;
    font-weight: 600;
    line-height: 1.2;
    color: $dark;
  }

  & .nav-segment {
    flex: 0 0 auto;
    width: auto;
    align-items: center;
    position: relative;
    background-color: $light;
    padding: 0.25rem 0.25rem;
    border-radius: 0.5rem;

    & .view-btn {
      color: $dark-variant;
      padding: 0.5rem 0.8125rem;
      border-radius: 0.5rem;
      border: none;
      background-color: transparent;
      transition: all 0.3s;

      &:hover {
        color: $blue;
      }

      &.active {
        color: $dark;
        background-color: $white;
        box-shadow: 0 0.1875rem 0.375rem 0 rgba(140, 152, 164, 0.25);
      }

      & .icon {
        font-size: 0.8125rem;
      }
    }
  }
}

.jobs-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  width: 80%;
  margin: auto;

  & .jobs-item {
    padding: 0 0.75rem;
    margin-bottom: 2rem;
  }
}

.jobs-message {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;

  & .image {
    width: 100%;
    max-width: 16rem;
    height: auto;
    vertical-align: middle;
    margin-bottom: 2rem;
  }

  & .title {
    color: $black;
    font-size: 1.4109375rem;
    font-weight: 600;
    line-height: 1.2;
    margin-top: 0;
    margin-bottom: 0.5rem;
  }

  & .desc {
    margin-top: 0;
    margin-bottom: 1rem;
  }
}

.footer-pagination {
  margin-top: 20px;
}
</style>
