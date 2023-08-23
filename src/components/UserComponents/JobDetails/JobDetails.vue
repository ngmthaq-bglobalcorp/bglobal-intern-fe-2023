<template>
  <div class="body_all">
    <div id="body" :style="{ height: app.calcHeight.value }">
      <div class="body_button">
        <button class="return_btn" tabindex="0" type="button" @click="app.onToggleReturn">
          <i class="bi bi-caret-left"></i>
          <span class="content">{{ app.t(`jobsApp.jobCard.return`) }}</span>
        </button>
        <div class="like_and_dislike_button">
          <button
            class="button"
            :class="{ active: app.isLike.value }"
            tabindex="0"
            type="button"
            id="like_button_id"
            :disabled="app.isExpired"
            @click="app.onToggleLikeButton"
          >
            <i class="bi bi-bookmark icon"></i>
            <span class="content">{{ app.t(`jobsApp.jobCard.like`) }}</span>
          </button>
          <button
            class="button"
            :class="{ active: app.isDislike.value }"
            tabindex="0"
            type="button"
            id="dislike_button_id"
            :disabled="app.isExpired"
            @click="app.onToggleDislikeButton"
          >
            <i class="bi bi-x-lg icon"></i>
            <span class="content">{{ app.t(`jobsApp.jobCard.dislike`) }}</span>
          </button>
        </div>
      </div>
      <div class="body_details">
        <img :src="app.job.value.mainImageUrl" alt="Main image" class="main_image" v-if="app.job.value.mainImageUrl" />
        <img
          :src="app.job.value.subImages[0].url"
          alt="Main image"
          class="main_image"
          v-else-if="app.job.value.subImages.length > 0"
        />
        <div style="padding: 20px" v-else></div>
        <div class="details_content">
          <div class="title_1" v-if="app.job.value.jobTitleCatchPhrase">{{ app.job.value.jobTitleCatchPhrase }}</div>
          <div class="title_2" v-if="app.job.value.title">{{ app.job.value.title }}</div>
          <div class="card_infor">
            <div class="card_infor_item" v-if="app.job.value.location">
              <i class="bi bi-geo-alt"></i>
              <div>{{ app.job.value.location.name }}</div>
            </div>
            <div class="card_infor_item" v-if="app.job.value.salary">
              <i class="bi bi-cash-coin"></i>
              <div>{{ PrimitiveHelper.getSalary(app.job.value.salary) }}</div>
            </div>
            <div class="card_infor_item" v-if="app.job.value.workingHours.length > 0">
              <i class="bi bi-clock"></i>
              <div>{{ PrimitiveHelper.getWorkingHours(app.job.value.workingHours) }}</div>
            </div>
          </div>
          <div class="card_footer" v-if="app.job.value.searchLabels.length > 0">
            <div class="card_footer_label" v-for="label in app.job.value.searchLabels" :key="label.id">
              {{ label.name }}
            </div>
          </div>
          <div class="catch_text" v-if="app.job.value.catchText">
            {{ app.job.value.catchText }}
          </div>
          <div class="lead_text" v-if="app.job.value.leadText">
            {{ app.job.value.leadText }}
          </div>
          <hr class="" v-if="app.job.value.subImages.length > 0" />
          <div class="sub_images" v-if="app.job.value.subImages.length > 0">
            <div class="sub_image" v-for="subImage in app.job.value.subImages" :key="subImage.id">
              <img class="image" :src="subImage.url" alt="Sub Image" />
              <span class="description">{{ subImage.description }}</span>
            </div>
          </div>
          <div class="properties" v-if="app.job.value.properties.length > 0">
            <hr />

            <div class="property" v-for="property in app.job.value.properties" :key="property.id">
              <div class="title">[{{ property.title }}]</div>
              <div class="content">{{ property.body }}</div>
            </div>
          </div>

          <div class="post_scripts" v-if="app.job.value.postScripts.length > 0">
            <hr />
            <div class="content" v-for="post in app.job.value.postScripts" :key="post.id">
              <i class="bi bi-star icon"></i>
              <span class="body">{{ post.body }}</span>
            </div>
          </div>
          <hr />
          <div
            class="job-photo-wrapper job-flex job-center job-border-bottom"
            v-if="app.job.value.photoGallery.length > 0"
          >
            <ul class="photo-list list">
              <li class="photo-item" v-for="photo in app.job.value.photoGallery" :key="photo.id">
                <img :src="photo.url" alt="Photo gallery" class="photo" />
                <span class="desc">{{ photo.description }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="body_footer" id="footer_area_id">
      <a class="link" :href="app.job.value.webApplication" target="_blank">Web</a>
      <div class="information"></div>
      <span class="post-period">
        {{ PrimitiveHelper.getPostPeriod(app.job.value.opensAt, app.job.value.expiresAt) }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { BaseComponent, defineClassComponent } from "@/plugins/component.plugin";
import { PrimitiveHelper } from "@/helpers/primitive.helper";
import { ValidateHelper } from "@/helpers/validate.helper";
import { useSeekersStore } from "@/stores/seekers.store";
import type { JobDetailEmits, JobDetailProps } from "./JobDetails";
import type { Ref } from "vue";
import type { JobModel } from "@/models/job.model";

const props = defineProps<JobDetailProps>();
const emits = defineEmits<JobDetailEmits>();

const app = defineClassComponent(
  class Component extends BaseComponent {
    public seekersStore = useSeekersStore();

    public calcHeight: Ref<string> = this.ref("");
    public job: Ref<JobModel> = this.computed(() => props.data);
    public isLike: Ref<boolean> = this.computed(() => {
      const job = app.seekersStore.listLikeJobs.find((value) => value.id == props.data.id);
      return job ? true : false;
    });
    public isDislike: Ref<boolean> = this.computed(() => {
      const job = app.seekersStore.listHistoryJobs.find((value) => value.id == props.data.id);
      return job && !this.isLike.value ? true : false;
    });

    public constructor() {
      super();

      this.onMounted(() => {
        const footer = document.getElementById("footer_area_id");
        if (footer) {
          this.calcHeight.value = `calc(100% - ${footer.offsetHeight}px)`;
        }
      });

      this.onUpdated(() => {
        const footer = document.getElementById("footer_area_id");
        if (footer) {
          this.calcHeight.value = `calc(100% - ${footer.offsetHeight}px)`;
        }
      });
    }

    public isExpired = () => {
      if (this.job.value.id > 0) {
        return ValidateHelper.isExpired(this.job.value.opensAt, this.job.value.expiresAt);
      }
    };

    public onToggleReturn = () => {
      emits("onToggleReturn");
    };

    public onToggleLikeButton = () => {
      emits("onToggleLikeButton", this.job.value.id);
    };

    public onToggleDislikeButton = () => {
      emits("onToggleDislikeButton", this.job.value.id);
    };
  },
);
</script>

<style scoped lang="scss">
@import "@/assets/scss/modules";

::-webkit-scrollbar {
  display: none;
}

.body_all {
  height: 100%;

  & #body {
    width: 100%;
    height: 100%;
    position: relative;
    padding: 20px 12px;

    & .body_button {
      width: calc(100% - 24px - 30px);
      position: absolute;
      top: 35px;
      left: 27px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      & .return_btn {
        color: #9f085f;
        background: rgba(255, 255, 255, 0.5);
        border: 2px solid #9f085f;
        border-radius: 24px;
        min-width: 78px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        outline: 0px;
        margin: 0px;
        cursor: pointer;
        transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
          box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
          color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

        &:hover {
          color: $white;
          background-color: #9f085f;
        }

        & .content {
          font-size: 14px;
          font-weight: 400;
          line-height: 10px;
          letter-spacing: 0.02857em;
          text-transform: uppercase;
        }
      }

      & .like_and_dislike_button {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;

        & .button {
          border: 1px solid rgba(178, 178, 178, 0.3);
          opacity: 0.8;
          min-width: 70px;
          border-radius: 24px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          position: relative;
          box-sizing: border-box;
          outline: 0px;
          margin: 0px;
          padding: 7px 14px;
          cursor: pointer;
          user-select: none;
          vertical-align: middle;
          appearance: none;
          text-decoration: none;
          font-size: 14px;
          font-weight: 400;
          line-height: 10px;
          letter-spacing: 0.02857em;
          text-transform: uppercase;
          transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
            box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
            color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

          &#like_button_id {
            color: #000;
            background-color: #fff;
            margin-right: 10px;

            &.active {
              color: white;
              background-color: #9f085f;
            }
          }

          &#dislike_button_id {
            color: #000;
            background-color: #fff;

            &.active {
              color: #000;
              background-color: #b2b2b2;
            }
          }

          &:disabled {
            pointer-events: none;
          }

          & .icon {
            margin-right: 0.25rem;
            transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
          }

          & content {
            font-size: 10px;
            font-weight: 700;
            line-height: 10px;
          }
        }
      }
    }

    & .body_details {
      width: 100%;
      height: 100%;
      overflow-y: scroll;
      border-radius: 25px;
      background-color: #fff;

      & .main_image {
        width: 100%;
        height: auto;
        object-fit: cover;
        overflow-clip-margin: content-box;
      }

      & .details_content {
        padding: 15px;
        padding-bottom: 20px;

        & .title_1 {
          color: #000;
          font-size: 13px;
          font-weight: 400;
          line-height: 19px;
          margin-bottom: 5px;
        }

        & .title_2 {
          color: #000;
          font-size: 18px;
          font-weight: 700;
          line-height: 24px;
          margin-bottom: 15px;
        }

        & .card_infor {
          margin-bottom: 10px;

          & .card_infor_item {
            margin-bottom: 5px;
            align-items: center;
            color: #000;
            display: flex;
            font-size: 13px;
            font-weight: 600;
            justify-content: flex-start;
            line-height: 19px;

            & i {
              font-size: 20px;
              margin-right: 4px;
            }
          }
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

        & .catch_text {
          color: #000;
          font-size: 14px;
          font-weight: 700;
          line-height: 20px;
          white-space: pre-line;
          margin-bottom: 20px;
        }

        & .lead_text {
          color: #000;
          font-size: 11px;
          font-weight: 400;
          line-height: 16px;
          white-space: pre-line;
          margin-bottom: 20px;
        }

        & hr {
          display: block;
          unicode-bidi: isolate;
          margin-block-start: 0.5em;
          margin-block-end: 0.5em;
          margin-inline-start: auto;
          margin-inline-end: auto;
          overflow: hidden;
        }

        & .sub_images {
          display: grid;
          flex-wrap: wrap;
          grid: auto / auto auto auto;
          grid-gap: 20px;
          margin-bottom: 5px;
          justify-content: center;

          & .sub_image {
            flex: 1;
            margin-bottom: 15px;

            & .image {
              width: 100%;
              border: 1px solid #eee;
              height: 100%;
              object-fit: cover;
            }

            & .description {
              font-size: 9px;
              font-weight: 400;
              line-height: 13px;
            }
          }
        }

        & .properties {
          margin-bottom: 20px;

          & .property {
            box-sizing: inherit;

            & .title {
              color: #000;
              font-size: 11px;
              margin-top: 10px;
              font-weight: 700;
              line-height: 16px;
            }

            & .content {
              color: #000;
              font-size: 11px;
              font-weight: 400;
              line-height: 16px;
              white-space: pre-line;
            }
          }
        }

        & .post_scripts {
          margin-bottom: 20px;

          & .content {
            color: #000;
            font-size: 11px;
            margin-top: 10px;
            line-height: 16px;
          }
        }
      }
    }
  }

  & .body_footer {
    width: 100%;
    position: relative;
    left: 0;
    bottom: 0;
    padding: 15px;
    text-align: center;

    & .link {
      color: #fff;
      width: 100%;
      height: 47px;
      display: flex;
      background: linear-gradient(180deg, #e65078 0%, #c0296b 100%);
      box-shadow: 0px 4px 8px rgba(157, 6, 95, 0.3);
      align-items: center;
      border-radius: 30px;
      margin-bottom: 10px;
      justify-content: center;
      text-decoration: none;
    }

    & .information {
      font-size: 13px;
      text-align: center;
      font-weight: 400;
      line-height: 20px;
      margin-bottom: 10px;
    }

    & .post-period {
      color: #000;
      font-size: 11px;
      font-weight: 400;
      line-height: 16px;
    }
  }
}
</style>
