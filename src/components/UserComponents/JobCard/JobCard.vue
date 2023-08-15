<template>
  <div class="result_search">
    <div class="search_bar" :class="{ hide: !app.isShowFormSearch.value }">
      <FormSearch is-disable-search-button></FormSearch>
      <div class="search-condition" @click="app.onFormSearch()">
        <div class="content" v-if="app.isShowFormSearch.value">
          <i class="bi bi-arrow-up-short" style="font-size: 18px; color: #9f085f"></i>
          <p class="">Close</p>
        </div>
        <div class="content" v-else>
          <i class="bi bi-arrow-down-short" style="font-size: 18px; color: #9f085f"></i>
          <p class="">Current search</p>
        </div>
      </div>
    </div>
  </div>

  <div id="swiper">
    <div
      class="card"
      style="bottom: calc(0% - 25px); transform: translateX(-50%) scale(0.9375); opacity: 1"
      v-for="jobs in app.newsArray.value"
      :key="jobs.id"
    >
      <div class="card_header">
        <div class="card_header_types_const">
          <div class="card_header_button_const">
            <button @click="app.onClickCard(app.newsArray.id)">
              <span>View the detail</span>
              <img src="@/assets/img/ic_arrow_forward.d87012f2877663d0aca7d5168712a610.svg" />
            </button>
          </div>
          <div class="card_header_title">{{ jobs.title }}</div>
        </div>
        <div class="card_header_img_const">
          <img :src="jobs.mainImageUrl" alt="Main image" class="main-img" v-if="jobs.mainImageUrl" />
          <img :src="jobs.subImages[0].url" alt="Main image" class="main-img" v-else-if="jobs.subImages.length > 0" />
          <div class="card_header_hiring_title">
            <div class="card_header_types">
              <div class="card_header_types_item">A</div>
              <div class="card_header_types_item">B</div>
            </div>
            <span>JOBS</span>
          </div>
        </div>
      </div>
      <div class="card_infor">
        <div class="card_infor_item">
          <i class="bi bi-geo-alt"></i>
          <div>{{ jobs.location.name }}</div>
        </div>
        <div class="card_infor_item">
          <i class="bi bi-cash-coin"></i>
          <div>{{ PrimitiveHelper.getSalary(jobs.salary) }}</div>
        </div>
        <div class="card_infor_item">
          <i class="bi bi-clock"></i>
          <div>{{ PrimitiveHelper.getWorkingHours(jobs.workingHours) }}</div>
        </div>
      </div>
      <div class="card_body">{{ jobs.catchText }}</div>
      <div class="card_footer">
        <div class="card_footer_label" v-for="label in app.searchLabels.value" :key="label.id">
          {{ label.name }}
        </div>
      </div>
      <div class="card_period" v-if="jobs.opensAt && jobs.expiresAt">
        {{ PrimitiveHelper.getPostPeriod(jobs.opensAt, jobs.expiresAt) }}
      </div>
    </div>
    <button class="swiper_action_button like_button" style="transform: scale(1); display: block">
      <img src="@/assets/img/img_btn_keep.60a6f70f06cd69caba08.png" class="" />
    </button>
    <button class="swiper_action_button dislike_button" style="transform: scale(1); display: block">
      <img src="@/assets/img/img_btn_ng.964ca4ad01758b786dd4.png" class="" />
    </button>
    <button class="swiper_action_button skip_button" style="transform: translateX(-50%) scale(1); display: block">
      <img src="@/assets/img/img_btn_pass.4480813519e2965312ad.png" class="" />
    </button>
  </div>
  <div class="guide">
    <button class="guide_swipe" tabindex="0" type="button" @click="app.onToggleShowTutorial(true)">
      <svg
        class="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06"
        focusable="false"
        aria-hidden="true"
        viewBox="0 0 24 24"
        data-testid="SwipeOutlinedIcon"
      >
        <path
          d="M20.5 2v2.02C18.18 2.13 15.22 1 12 1S5.82 2.13 3.5 4.02V2H2v5h5V5.5H4.09c2.11-1.86 4.88-3 7.91-3s5.79 1.14 7.91 3H17V7h5V2h-1.5z"
        ></path>
        <path
          d="m18.89 13.77-3.8-1.67c-.13-.06-.28-.1-.44-.1H14V7.63c0-1.32-.96-2.5-2.27-2.62C10.25 4.88 9 6.05 9 7.5v8.15l-1.87-.4c-.19-.03-1.02-.15-1.73.56L4 17.22l5.12 5.19c.37.38.88.59 1.41.59h6.55c.98 0 1.81-.7 1.97-1.67l.92-5.44c.15-.86-.29-1.72-1.08-2.12zM18 15.56 17.08 21h-6.55l-3.7-3.78 4.17.89V7.5c0-.28.22-.5.5-.5s.5.22.5.5v6.18h1.76L18 15.56z"
        ></path>
      </svg>
      <p class="title">Method of operation</p>
    </button>
    <button class="guide_swipe" tabindex="0" type="button" @click="app.onToggleShowUserGuide(true)">
      <svg
        class="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06"
        focusable="false"
        aria-hidden="true"
        viewBox="0 0 24 24"
        data-testid="QuestionMarkIcon"
      >
        <path
          d="M11.07 12.85c.77-1.39 2.25-2.21 3.11-3.44.91-1.29.4-3.7-2.18-3.7-1.69 0-2.52 1.28-2.87 2.34L6.54 6.96C7.25 4.83 9.18 3 11.99 3c2.35 0 3.96 1.07 4.78 2.41.7 1.15 1.11 3.3.03 4.9-1.2 1.77-2.35 2.31-2.97 3.45-.25.46-.35.76-.35 2.24h-2.89c-.01-.78-.13-2.05.48-3.15zM14 20c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z"
        ></path>
      </svg>
      <p class="title">What is keep/NG</p>
    </button>
  </div>
  <div
    class="guide_content_swiper"
    :class="{ hide: !app.isShowTutorial.value }"
    @click="app.onToggleShowTutorial(false)"
  >
    <button tabindex="0" type="button" @click="app.onToggleShowTutorial(false)">
      <i class="bi bi-x-circle" style="font-size: 2rem"></i>

      <span class="MuiTouchRipple-root css-w0pj6f"></span>
    </button>
    <img src="@/assets/img/img_tutorial.20233060d049d814fc33.png" />
  </div>
  <div
    class="guide_content_button"
    :class="{ hide: !app.isShowUserGuild.value }"
    @click="app.onToggleShowUserGuide(false)"
  >
    <button tabindex="0" type="button" @click="app.onToggleShowUserGuide(false)">
      <i class="bi bi-x-circle" style="font-size: 2rem"></i>

      <span class="MuiTouchRipple-root css-w0pj6f"></span>
    </button>
    <img src="@/assets/img/img_user_guide.0c961e271c9fdf1b1fbb.png" />
  </div>
</template>

<script setup lang="ts">
import { BaseComponent, defineClassComponent } from "@/plugins/component.plugin";
import { PrimitiveHelper } from "@/helpers/primitive.helper";
import FormSearch from "../HomeContent/Form/FormSearch.vue";
import type { Ref } from "vue";
import type { JobModel } from "@/models/job.model";
import type { JobsListEmits, JobsListProps } from "./JobCard";
import { useCommonStore } from "@/stores/common.store";
import type { LocationModel } from "@/models/location.model";
import type { SearchLabelModel } from "@/models/searchLabel.model";
import { PathConst } from "@/const/path.const";
const props = defineProps<JobsListProps>();
const emits = defineEmits<JobsListEmits>();

const app = defineClassComponent(
  class Component extends BaseComponent {
    public isShowTutorial: Ref<boolean> = this.ref(false);
    public isShowUserGuild: Ref<boolean> = this.ref(false);
    public isShowFormSearch: Ref<boolean> = this.ref(false);
    public commonStore = useCommonStore();
    public newsArray: Ref<Array<JobModel>> = this.computed(() => props.newsArray);
    public startTime: Ref<string> = this.ref("_default_selection");
    public endTime: Ref<string> = this.ref("_default_selection");
    public searchLabelsArray: Ref<Array<number>> = this.ref([]);

    public locations: Ref<Array<LocationModel>> = this.computed(() => this.commonStore.locations);
    public searchLabels: Ref<Array<SearchLabelModel>> = this.computed(() => this.commonStore.searchLabels);
    public constructor() {
      super();

      this.onBeforeMount(() => {
        this.commonStore.fetchAllLocations();
        this.commonStore.fetchAllSearchLabels();
      });
    }

    public onToggleShowTutorial = (isShow: boolean) => {
      this.isShowTutorial.value = isShow;
    };
    public onToggleShowUserGuide = (isShow: boolean) => {
      this.isShowUserGuild.value = isShow;
    };
    public onFormSearch = () => {
      this.isShowFormSearch.value = !this.isShowFormSearch.value;
      if (this.isShowFormSearch.value) {
        // Enable button
        this.commonStore.eventBus.emit("showFormSearch", null);
      } else {
        // Disable button
        this.commonStore.eventBus.emit("hideFormSearch", null);
      }
      return this.isShowFormSearch.value;
    };

    public onClickCard = (id: number) => {
      emits("onClickCard", id);
      this.router.push({ ...PathConst.userJobDetails, params: { jobId: id } });
      console.log(id);
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
    transition: all 0.2s linear 0s;
    position: absolute;
    z-index: 2;
    top: 0px;

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
  & .search_bar.hide {
    top: -200px;
    width: 100%;
    transition: all 0.2s linear 0s;
    position: absolute;
    z-index: 2;
  }
}

#swiper {
  position: relative;
  touch-action: none;
  width: 100%;
  height: calc(100% - 104px) !important;

  & .card {
    height: 70vh;
    padding: 35px 25px 15px;
    background-color: #fff;
    border-radius: 25px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    left: 50%;
    overflow: hidden;

    & .card_header {
      align-items: flex-start;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 100%;
      & .card_header_types_const {
        margin-bottom: 12px;
        width: 100%;
        & .card_header_button_const {
          display: flex;
          justify-content: flex-end;
          margin-bottom: 10px;
          & button {
            padding: 4px 16px;

            align-items: center;
            background-color: transparent;
            border: 2px solid #9f085f;
            border-radius: 24px;
            color: #9f085f;
            display: flex;
            font-size: 14px;
            font-weight: 400;
            justify-content: center;
            line-height: 14px;
            padding: 8px 10px 8px 20px;

            & img {
              height: 14px;
              margin-right: 0;
              width: 14px;
            }
          }
        }
        & .card_header_title {
          font-size: 16px;
          font-weight: 700;
          line-height: 21px;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          color: #000;
          display: -webkit-box;
          line-break: anywhere;
          margin: 0;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
      & .card_header_img_const {
        margin-bottom: 10px;
        align-items: flex-start;
        display: flex;
        height: 100%;
        & img {
          height: 60px;
          margin-right: 15px;
          object-fit: cover;
          width: 100px;
        }
        & .card_header_hiring_title {
          display: flex;
          flex-direction: column;
          height: 100%;
          justify-content: space-between;
          & .card_header_types {
            display: flex;
            flex-wrap: wrap;
            margin-bottom: 4px;
            & .card_header_types_item {
              align-items: center;
              background: #e5d8cc;
              border-radius: 3px;
              color: #000;
              display: flex;
              font-size: 10px;
              font-weight: 500;
              height: 18px;
              justify-content: center;
              line-height: 14px;
              margin-right: 5px;
              width: 18px;
            }
          }
          & span {
            font-size: 13px;
            font-weight: 400;
            line-height: 19px;
            width: 100%;
          }
        }
      }
    }
    & .card_infor {
      margin-bottom: 10px;
      & .card_infor_item {
        margin-bottom: 2px;
        align-items: center;
        color: #000;
        display: flex;
        font-size: 13px;
        font-weight: 700;
        justify-content: flex-start;
        line-height: 19px;
        & i {
          font-size: 20px;
          margin-right: 4px;
        }
      }
    }
    & .card_body {
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      color: #000;
      display: -webkit-box;
      font-size: 13px;
      font-weight: 400;
      line-break: anywhere;
      line-height: 19px;
      margin-bottom: 10px;
      overflow: hidden;
      overflow-wrap: break-word;
      text-overflow: ellipsis;
      white-space: pre-line;
    }
    & .card_footer {
      margin: 10px 0;
      align-items: center;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      & .card_footer_label {
        border: 1px solid #378182;
        border-radius: 4px;
        color: #378182;
        font-size: 10px;
        font-weight: d500;
        line-height: 14px;
        margin-bottom: 4px;
        padding: 2px 6px;
      }
    }
    & .card_period {
      color: #000;
      font-size: 11px;
      font-weight: 400;
      line-height: 16px;
    }
  }
  & .swiper_action_button {
    background-color: transparent;
    border: none;
    border-radius: 50%;

    height: 90px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 90px;
    z-index: 1;
  }
  & .swiper_action_button.like_button {
    bottom: 100px;
    box-shadow: 0 4px 8px rgba(157, 6, 95, 0.3);
    left: 4px;

    & img {
      height: 100%;
      object-fit: contain;
      width: 100%;
    }
  }
  & .swiper_action_button.dislike_button {
    bottom: 100px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    right: 4px;

    & img {
      height: 100%;
      object-fit: contain;
      width: 100%;
    }
  }

  & .swiper_action_button.skip_button {
    height: 45px;
    left: 50%;
    padding: 0;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    width: 45px;
    bottom: 80px;

    & img {
      -webkit-filter: drop-shadow(2px 2px 20px rgba(0, 0, 0, 0.5));
      filter: drop-shadow(2px 2px 20px rgba(0, 0, 0, 0.5));
      height: 100%;
      object-fit: contain;
      vertical-align: middle;
      width: 100%;
    }
  }
}

.guide {
  left: 0;
  width: 100%;
  bottom: 24px;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;

  & button {
    color: #9f085f;
    border: 2px solid #9f085f;
    height: 30px;
    padding: 0 4px;
    font-size: 14px;
    min-width: 140px;
    background: transparent;
    font-weight: 500;
    line-height: 24px;
    margin-right: 8px;
    border-radius: 40px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    vertical-align: middle;
    appearance: none;
    text-decoration: none;
    font-family: Roboto, Helvetica, Arial, sans-serif;
    letter-spacing: 0.02857em;
    text-transform: uppercase;

    & svg {
      user-select: none;
      width: 1em;
      height: 1em;
      display: inline-block;
      fill: currentcolor;
      flex-shrink: 0;
      transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      font-size: 1.25rem;
    }
    & p {
      font-weight: 500;
      margin-left: 4px;
      margin: 0px;
      font-family: Roboto, Helvetica, Arial, sans-serif;
      font-weight: 400;
      font-size: 14px;
      line-height: 1.5;
      letter-spacing: 0.00938em;
    }
  }
}
.guide_content_swiper {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9000;
  position: absolute;
  background: rgba(255, 255, 255, 0.7);

  & button {
    top: 8px;
    right: 8px;
    position: absolute;
    background-color: transparent;
    cursor: pointer;
    outline: 0px;
    border: 0px;
  }
  & img {
    top: 50%;
    left: 50%;
    width: 80%;
    height: auto;
    position: absolute;
    transform: translate(-50%, -50%);
  }
}
.guide_content_swiper.hide {
  display: none;
}
.guide_content_button {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9000;
  position: absolute;
  background-color: rgba(255, 255, 255, 0.7);

  & button {
    top: 8px;
    right: 8px;
    position: absolute;
    background-color: transparent;
    cursor: pointer;
    outline: 0px;
    border: 0px;
  }
  & img {
    top: 50%;
    left: 50%;
    width: 80%;
    height: auto;
    position: absolute;
    transform: translate(-50%, -50%);
  }
}
.guide_content_button.hide {
  display: none;
}
</style>
