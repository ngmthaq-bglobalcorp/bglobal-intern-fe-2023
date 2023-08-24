<template>
  <form class="form-search" id="search_form_id" ref="searchFormRef" @submit.prevent="app.onSubmitForm">
    <div class="select-1">
      <div class="location-time">
        <span class="text">{{ app.t("jobsApp.form.location") }}</span>
        <select class="first_search_row custom_select" v-model="app.firstLocation.value">
          <option :value="AppConst.DEFAULT.location">{{ app.t("jobsApp.form.location") }}</option>
          <option :value="location.name" v-for="location in app.locations.value" :key="location.id">
            {{ location.name }}
          </option>
        </select>
      </div>
      <i class="bi bi-x" style="font-size: 1.5rem"></i>
      <div class="location-time">
        <span class="text">{{ app.t("jobsApp.form.startTime") }}</span>
        <select class="jss86 custom_select" v-model="app.startTime.value">
          <option :value="AppConst.DEFAULT.time">{{ app.t("jobsApp.form.startTime") }}</option>
          <option :value="hour" v-for="hour in PrimitiveHelper.getTime()" :key="hour">{{ hour }}</option>
        </select>
      </div>
      <i class="bi bi-x" style="font-size: 1.5rem"></i>
      <div class="location-time">
        <span class="text">{{ app.t("jobsApp.form.endTime") }}</span>
        <select class="jss86 custom_select" v-model="app.endTime.value">
          <option :value="AppConst.DEFAULT.time">{{ app.t("jobsApp.form.endTime") }}</option>
          <option :value="hour" v-for="hour in PrimitiveHelper.getTime()" :key="hour">{{ hour }}</option>
        </select>
      </div>
    </div>
    <div class="select-2">
      <div class="location-sub-2-3">
        <span class="text">{{ app.t("jobsApp.form.secondLocation") }}</span>
        <select class="custom_select" v-model="app.secondLocation.value">
          <option :value="AppConst.DEFAULT.location">{{ app.t("jobsApp.form.location") }}</option>
          <option :value="location.name" v-for="location in app.locations.value" :key="location.id">
            {{ location.name }}
          </option>
        </select>
      </div>
      <div class="location-sub-2-3">
        <span class="text">{{ app.t("jobsApp.form.thirdLocation") }}</span>
        <select class="custom_select" v-model="app.thirdLocation.value">
          <option :value="AppConst.DEFAULT.location">{{ app.t("jobsApp.form.location") }}</option>
          <option :value="location.name" v-for="location in app.locations.value" :key="location.id">
            {{ location.name }}
          </option>
        </select>
      </div>
    </div>
    <div class="condition">
      <span class="condition-title">{{ app.t("jobsApp.form.conditions.title") }}</span>
      <div class="tag">
        <label
          :for="label.id.toString()"
          class="tag-search"
          :class="{ active: app.searchLabelsArray.value.includes(label.id) }"
          v-for="label in app.filtersSearchLabels.value"
          :key="label.id"
        >
          <template v-if="label.isEnabled">
            {{ label.name }}
            <input
              class="search-input"
              :id="label.id.toString()"
              type="checkbox"
              :name="label.name"
              :value="label.id"
              @click="app.onToggleClickLabel(label.id)"
            />
          </template>
        </label>
      </div>
    </div>
    <div class="applicable" id="applicable_id" ref="applicableRef">
      <div class="suitable">
        <span class="title">{{ app.t("jobsApp.form.applicable.title") }}</span>

        <div class="result">
          <span class="result-match">{{ app.totalJobsWithContion.value }}</span>
          <span class="jobs">&nbsp;/&nbsp;</span>
          <span class="result-sum">{{ app.totalJobsNumber.value }}</span>
          <span class="jobs">{{ app.t("jobsApp.form.applicable.jobs") }}</span>
        </div>
      </div>
      <button
        class="view-result"
        type="submit"
        form="search_form_id"
        tabindex="0"
        :disabled="app.isDisableSearchButton.value"
      >
        {{ app.t("jobsApp.form.applicable.result") }}
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { BaseComponent, defineClassComponent } from "@/plugins/component.plugin";
import { PrimitiveHelper } from "@/helpers/primitive.helper";
import { AppConst } from "@/const/app.const";
import { KeyConst } from "@/const/key.const";
import { PathConst } from "@/const/path.const";
import { StorageHelper } from "@/helpers/storage.helper";
import { useSeekersStore } from "@/stores/seekers.store";
import type { FormSearchEmits, FormSearchProps } from "./FormSearch";
import type { Ref } from "vue";
import type { LocationModel } from "@/models/location.model";
import type { SearchLabelModel } from "@/models/searchLabel.model";

const props = defineProps<FormSearchProps>();
const emits = defineEmits<FormSearchEmits>();

const app = defineClassComponent(
  class Component extends BaseComponent {
    public seekersStore = useSeekersStore();

    public isDisableSearchButton: Ref<boolean> = this.ref(Boolean(props.isDisableSearchButton));
    public startTime: Ref<string> = this.ref(AppConst.DEFAULT.time);
    public endTime: Ref<string> = this.ref(AppConst.DEFAULT.time);
    public firstLocation: Ref<string> = this.ref(AppConst.DEFAULT.location);
    public secondLocation: Ref<string> = this.ref(AppConst.DEFAULT.location);
    public thirdLocation: Ref<string> = this.ref(AppConst.DEFAULT.location);
    public searchLabelsArray: Ref<Array<number>> = this.ref([]);

    public totalJobsNumber: Ref<number> = this.computed(() => this.seekersStore.totalJobs);
    public totalJobsWithContion: Ref<number> = this.computed(() => this.seekersStore.totalJobsWithCondition);
    public locations: Ref<Array<LocationModel>> = this.computed(() => this.commonStore.locations);
    public filtersSearchLabels: Ref<Array<SearchLabelModel>> = this.computed(() => {
      return this.commonStore.searchLabels.filter((value) => value.isEnabled);
    });

    public constructor() {
      super();

      this.onBeforeMount(async () => {
        const data: any = StorageHelper.getLocalStorage(KeyConst.keys.searchCondition);
        if (data) {
          this.startTime.value = data.startTime || AppConst.DEFAULT.time;
          this.endTime.value = data.endTime || AppConst.DEFAULT.time;
          this.firstLocation.value = data.firstLocation || AppConst.DEFAULT.location;
          this.secondLocation.value = data.secondLocation || AppConst.DEFAULT.location;
          this.thirdLocation.value = data.thirdLocation || AppConst.DEFAULT.location;
          this.searchLabelsArray.value = data.searchLabelsArray || [];
        }
      });

      this.onMounted(() => {
        const searchForm = document.getElementById("search_form_id");
        const applicable = document.getElementById("applicable_id");
        if (searchForm && applicable) {
          emits("getHeight", searchForm.offsetHeight, applicable.offsetHeight);
        }
      });

      this.onUpdated(() => {
        const searchForm = document.getElementById("search_form_id");
        const applicable = document.getElementById("applicable_id");
        if (searchForm && applicable) {
          emits("getHeight", searchForm.offsetHeight, applicable.offsetHeight);
        }
      });

      this.commonStore.eventBus.on("showFormSearch", () => {
        this.isDisableSearchButton.value = false;
      });

      this.commonStore.eventBus.on("hideFormSearch", () => {
        this.isDisableSearchButton.value = true;
      });
    }

    public onToggleClickLabel = (labelId: number) => {
      if (this.searchLabelsArray.value.includes(labelId)) {
        this.searchLabelsArray.value = this.searchLabelsArray.value.filter((value) => value != labelId);
      } else {
        this.searchLabelsArray.value.push(labelId);
      }
    };

    public onSubmitForm = async () => {
      const data = {
        startTime: this.startTime.value,
        endTime: this.endTime.value,
        firstLocation: this.firstLocation.value,
        secondLocation: this.secondLocation.value,
        thirdLocation: this.thirdLocation.value,
        searchLabelsArray: this.searchLabelsArray.value,
      };
      StorageHelper.setLocalStorage(KeyConst.keys.searchCondition, data);
      emits("onSubmitForm", data);
      this.router.push(PathConst.userJobsList);
    };
  },
);
</script>

<style scoped lang="scss">
@import "@/assets/scss/modules";

.form-search {
  padding: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0 0 15px 15px;
  background-color: #fff;

  & .select-1 {
    display: flex;
    align-items: center;
    justify-content: space-between;

    & .location-time {
      flex: 1;

      & .text {
        font-size: 14px;
        font-weight: 700;
        line-height: 20px;
        margin: 0px;
      }

      & .custom_select {
        color: #000;
        width: 100%;
        border: 1px solid #e0e0e0;
        height: 32px;
        padding: 0 8px;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        border-radius: 24px;
        background-color: #fff;
        appearance: none;
        background: transparent;
        background-image: url(@/assets/img/ic_expand.svg);
        background-position-x: 92%;
        background-position-y: 52%;
        background-repeat: no-repeat;
        background-size: 24px;
      }
    }
  }
  & .select-2 {
    display: flex;
    margin-top: 8px;
    align-items: center;
    justify-content: space-between;
    gap: 15px;

    & .location-sub-2-3 {
      width: 100%;
      flex-grow: 5;
      flex-shrink: 1;
      flex-basis: 0%;

      & .text {
        font-size: 14px;
        font-weight: 700;
        line-height: 20px;
        margin: 0px;
      }

      & .custom_select {
        color: #000;
        width: 100%;
        border: 1px solid #e0e0e0;
        height: 32px;
        padding: 0 8px;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        border-radius: 24px;
        background-color: #fff;
        appearance: none;
        background: transparent;
        background-image: url(@/assets/img/ic_expand.svg);
        background-position-x: 92%;
        background-position-y: 52%;
        background-repeat: no-repeat;
        background-size: 24px;
      }
    }
  }

  & .condition {
    margin-top: 15px;

    & .condition-title {
      font-size: 14px;
      font-weight: 700;
      line-height: 20px;
      margin: 0px;
      letter-spacing: 0.00938em;
    }

    & .tag {
      height: 100%;
      margin: 5px 0;
      display: flex;
      flex-wrap: wrap;
      max-height: 150px;
      justify-content: center;
      overscroll-behavior: contain;

      & .tag-search {
        flex: 0 0 30%;
        color: #378182;
        width: 100%;
        border: 1px solid #378182;
        height: 30px;
        padding: 0 4px;
        overflow: hidden;
        position: relative;
        font-size: 10px;
        max-width: 100px;
        text-align: center;
        align-items: center;
        font-weight: 500;
        line-height: 28px;
        border-radius: 24px;
        justify-content: center;
        background-color: $white;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        display: -webkit-box;
        line-break: auto;
        overflow: hidden;
        text-overflow: ellipsis;
        margin: 0 5px 10px 5px;
        cursor: pointer;

        &.active {
          color: $white;
          background-color: #378182;
        }

        & .search-input {
          display: none;
        }
      }
    }
  }

  & .applicable {
    display: flex;
    align-items: center;
    justify-content: space-between;

    & .suitable {
      & .title {
        color: #000;
        font-size: 10px;
        font-weight: 400;
        line-height: 24px;
      }

      & .result {
        display: flex;
        align-items: flex-end;
        justify-content: flex-start;

        & .result-match {
          color: #378182;
          font-size: 24px;
          font-weight: 700;
          line-height: 28px;
          margin-right: 3px;
          margin: 0px;
        }

        & .jobs {
          color: #000;
          font-size: 10px;
          font-weight: 400;
          line-height: 24px;
          margin: 0px;
          margin-left: 1px;
        }

        & .result-sum {
          color: #378182;
          display: flex;
          font-size: 12px;
          font-style: normal;
          align-items: flex-end;
          font-weight: 700;
          line-height: 24px;
          margin: 0px;
        }
      }
    }

    & .view-result {
      color: #fff;
      width: 180px;
      height: 30px;
      background: linear-gradient(180deg, #e65078 0%, #c0296b 100%);
      box-shadow: 0px 4px 8px rgba(157, 6, 95, 0.3);
      border-radius: 30px;
      border: none;

      &:disabled {
        color: #666666;
        background: rgba(0, 0, 0, 0.1);
        box-shadow: none;
      }
    }
  }
}
</style>
