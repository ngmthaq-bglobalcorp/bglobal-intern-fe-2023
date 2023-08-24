<template>
  <div class="job-card-container">
    <LoadingComponent :is-loading="!app.job.value" v-if="!app.job.value" />

    <div id="swiper" v-else>
      <div
        class="card"
        style="bottom: calc(0% + 80px); transform: translateX(-50%) scale(1); opacity: 1"
        @click="app.onClickCard"
      >
        <div class="card_header">
          <div class="card_header_types_const">
            <div class="card_header_button_const">
              <button @click="app.onToggleViewDetail">
                <span>{{ app.t(`jobsApp.jobCard.viewDetail`) }}</span>
                <img src="@/assets/img/ic_arrow_forward.svg" alt="Forward" />
              </button>
            </div>
            <div class="card_header_title" v-if="app.job.value.title">{{ app.job.value.title }}</div>
          </div>
          <div class="card_header_img_const">
            <img :src="app.job.value.mainImageUrl" alt="Main image" v-if="app.job.value.mainImageUrl" />
            <img
              :src="app.job.value.subImages[0].url"
              alt="Main image"
              v-else-if="app.job.value.subImages.length > 0"
            />
            <div class="card_header_hiring_title" v-if="app.isDisplayed.value">
              <div class="card_header_types">
                <div class="card_header_types_item">A</div>
                <div class="card_header_types_item">B</div>
              </div>
              <span>JOBS</span>
            </div>
          </div>
        </div>
        <div class="card_infor">
          <div class="card_infor_item" v-if="app.job.value.location.name">
            <i class="bi bi-geo-alt"></i>
            {{ app.job.value.location.name }}
          </div>
          <div class="card_infor_item" v-if="app.job.value.salary">
            <i class="bi bi-cash-coin"></i>
            {{ PrimitiveHelper.getSalary(app.job.value.salary) }}
          </div>
          <div class="card_infor_item" v-if="app.job.value.workingHours.length > 0">
            <i class="bi bi-clock"></i>
            {{ PrimitiveHelper.getWorkingHours(app.job.value.workingHours) }}
          </div>
        </div>
        <div class="card_body" v-if="app.job.value.catchText">
          {{ app.job.value.catchText }}
        </div>
        <div class="card_footer" v-if="app.job.value.searchLabels.length > 0">
          <div class="card_footer_label" v-for="label in app.job.value.searchLabels" :key="label.id">
            {{ label.name }}
          </div>
        </div>
        <div class="card_period" v-if="app.job.value.opensAt && app.job.value.expiresAt">
          <span>
            {{ PrimitiveHelper.getPostPeriod(app.job.value.opensAt, app.job.value.expiresAt) }}
          </span>
        </div>
      </div>
      <button
        class="swiper_action_button like_button"
        style="transform: scale(1); display: block"
        :disabled="app.isExpired()"
        @click="app.onToggleLikeButton"
      >
        <img src="@/assets/img/img_btn_keep.png" class="" />
      </button>
      <button
        class="swiper_action_button dislike_button"
        style="transform: scale(1); display: block"
        :disabled="app.isExpired()"
        @click="app.onToggleDislikeButton"
      >
        <img src="@/assets/img/img_btn_ng.png" class="" />
      </button>
      <button
        class="swiper_action_button skip_button"
        style="transform: translateX(-50%) scale(1); display: block"
        @click="app.onToggleSkipButton"
      >
        <img src="@/assets/img/img_btn_pass.png" class="" />
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
        <p class="title">{{ app.t(`jobsApp.jobCard.methodOperation`) }}</p>
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
        <p class="title">{{ app.t(`jobsApp.jobCard.whatKeep`) }}</p>
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
      <img src="@/assets/img/img_tutorial.png" />
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
      <img src="@/assets/img/img_user_guide.png" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { BaseComponent, defineClassComponent } from "@/plugins/component.plugin";
import LoadingComponent from "@/components/AppComponents/LoadingComponent/LoadingComponent.vue";
import { PrimitiveHelper } from "@/helpers/primitive.helper";
import { ValidateHelper } from "@/helpers/validate.helper";
import { JobModel } from "@/models/job.model";
import type { JobCardEmits, JobCardProps } from "./JobCard";
import type { Ref } from "vue";

const props = defineProps<JobCardProps>();
const emits = defineEmits<JobCardEmits>();

const app = defineClassComponent(
  class Component extends BaseComponent {
    public isDisplayed: Ref<boolean> = this.ref(false);
    public isShowTutorial: Ref<boolean> = this.ref(false);
    public isShowUserGuild: Ref<boolean> = this.ref(false);

    public job: Ref<JobModel> = this.ref(new JobModel({}));

    public constructor() {
      super();

      this.watch(
        () => props.data,
        (data) => {
          this.job.value = data;
        },
      );
    }

    public isExpired = () => {
      if (this.job.value.id > 0) {
        return ValidateHelper.isExpired(this.job.value.opensAt, this.job.value.expiresAt);
      }
    };

    public onToggleShowTutorial = (isShow: boolean) => {
      this.isShowTutorial.value = isShow;
    };

    public onToggleShowUserGuide = (isShow: boolean) => {
      this.isShowUserGuild.value = isShow;
    };

    public onClickCard = () => {
      emits("onClickCard", this.job.value.id);
    };

    public onToggleViewDetail = () => {
      emits("onToggleViewDetail", this.job.value.id);
    };

    public onToggleLikeButton = () => {
      emits("onToggleLikeButton", this.job.value.id);
    };

    public onToggleDislikeButton = () => {
      emits("onToggleDislikeButton", this.job.value.id);
    };

    public onToggleSkipButton = () => {
      emits("onToggleSkipButton");
    };
  },
);
</script>

<style scoped lang="scss">
@import "@/assets/scss/modules";

.job-card-container {
  width: 100%;
  height: 100%;

  & #swiper {
    position: relative;
    touch-action: none;
    width: 100%;
    height: calc(100% - 54px);
    overflow: hidden;
    transition: bottom 0.25s linear, opacity 0.25s ease-in 0.2s, -webkit-transform 0.05s linear;
    transition: transform 0.05s linear, bottom 0.25s linear, opacity 0.25s ease-in 0.2s;
    transition: transform 0.05s linear, bottom 0.25s linear, opacity 0.25s ease-in 0.2s, -webkit-transform 0.05s linear;

    & .card {
      position: absolute;
      width: 90%;
      height: calc(95% - 80px);
      padding: 25px 25px 15px;
      background-color: #fff;
      border-radius: 25px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      left: 50%;
      overflow: hidden;
      cursor: pointer;

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

              &:hover {
                color: $white;
                background-color: #9f085f;
              }

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
            line-break: auto;
            margin: 0;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }

        & .card_header_img_const {
          margin-bottom: 12px;
          align-items: flex-start;
          display: flex;
          height: 100%;

          & img {
            height: 90px;
            margin-right: 15px;
            object-fit: cover;
            width: 150px;
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
        margin-bottom: 12px;

        & .card_infor_item {
          margin-bottom: 8px;
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
        line-break: auto;
        line-height: 19px;
        margin-bottom: 12px;
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

      &:disabled {
        pointer-events: none;
      }

      &.like_button {
        bottom: 88px;
        left: 4px;
        box-shadow: 0 4px 8px rgba(157, 6, 95, 0.3);

        & img {
          height: 100%;
          object-fit: contain;
          width: 100%;
        }
      }

      &.dislike_button {
        bottom: 88px;
        right: 4px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

        & img {
          height: 100%;
          object-fit: contain;
          width: 100%;
        }
      }

      &.skip_button {
        width: 45px;
        height: 45px;
        bottom: 56px;
        padding: 0;
        left: 50%;
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%);

        & img {
          width: 100%;
          height: 100%;
          vertical-align: middle;
          object-fit: contain;
          -webkit-filter: drop-shadow(2px 2px 20px rgba(0, 0, 0, 0.5));
          filter: drop-shadow(2px 2px 20px rgba(0, 0, 0, 0.5));
        }
      }
    }
  }

  & .guide {
    left: 0;
    width: 100%;
    bottom: 24px;
    display: flex;
    position: fixed;
    align-items: center;
    justify-content: center;

    & .guide_swipe {
      color: #9f085f;
      border: 2px solid #9f085f;
      height: 30px;
      padding: 0 4px;
      font-size: 14px;
      min-width: 140px;
      background: transparent;
      font-weight: 500;
      line-height: 24px;
      margin-left: 8px;
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

      & .title {
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

  & .guide_content_swiper,
  & .guide_content_button {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9000;
    position: absolute;

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
    &.hide {
      display: none;
    }
  }

  & .guide_content_swiper {
    background: rgba(255, 255, 255, 0.7);
  }

  & .guide_content_button {
    background: white;
  }
}

@media screen and (max-height: $breakpoint-md) {
  .job-card-container {
    & #swiper {
      & .card {
        & .card_header {
          & .card_header_types_const {
            & .card_header_button_const {
              & button {
                padding: 4px 16px;
              }
            }
          }

          & .card_header_img_const {
            & img {
              height: 60px;
              width: 100px;
            }
          }
        }
      }
    }
  }
}
</style>
