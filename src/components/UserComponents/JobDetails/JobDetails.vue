<template>
  <div class="body_all">
    <div id="body">
      <div class="display_details" style="height: calc(100% - 183px)">
        <button class="return_btn" tabindex="0" type="button">
          <i class="bi bi-caret-left"></i>
          <p class="">Return</p>
        </button>
        <div class="like_and_dislike_button">
          <button class="button" tabindex="0" type="button" id="like-button-id">
            <i class="bi bi-bookmark"></i>
            <p class="content">Like</p>
          </button>
          <button class="button" tabindex="0" type="button" id="dislike-button-id">
            <i class="bi bi-x-lg"></i>
            <p class="content">Dislike</p>
          </button>
        </div>
        <img class="main_image" :src="app.job.value.mainImageUrl" :alt="app.job.value.mainImageDesc" />
        <div class="details_content">
          <p class="title_1">{{ app.job.value.title }}</p>
          <p class="title_2">{{ app.job.value.jobTitleCatchPhrase }}</p>
          <div class="card_infor">
            <div class="card_infor_item">
              <i class="bi bi-geo-alt"></i>
              <div>{{ app.job.value.location.name }}</div>
            </div>
            <div class="card_infor_item">
              <i class="bi bi-cash-coin"></i>
              <div>{{ PrimitiveHelper.getSalary(app.job.value.salary) }}</div>
            </div>
            <div class="card_infor_item">
              <i class="bi bi-clock"></i>
              <div>{{ PrimitiveHelper.getWorkingHours(app.job.value.workingHours) }}</div>
            </div>
          </div>
          <div class="card_footer" v-if="app.job.value.searchLabels.length > 0">
            <div class="card_footer_label" v-for="label in app.job.value.searchLabels" :key="label.id">
              {{ label.name }}
            </div>
          </div>
          <p class="catch_text" v-if="app.job.value.catchText">
            {{ app.job.value.catchText }}
          </p>
          <p class="lead_text" v-if="app.job.value.leadText">
            {{ app.job.value.leadText }}
          </p>
          <hr class="" v-if="app.job.value.subImages.length > 0" />
          <div class="sub_images" v-if="app.job.value.subImages.length > 0">
            <div class="sub_image" v-for="subImage in app.job.value.subImages" :key="subImage.id">
              <img class="image" :src="subImage.url" alt="Sub Image" />
              <p class="description">{{ subImage.description }}</p>
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
      <div class="" id="fixed-area-id">
        <a class="link" :href="app.job.value.webApplication" target="_blank">Web</a>
        <div class="information"></div>
        <p class="MuiTypography-root MuiTypography-body1 jss310 css-9l3uo3">
          {{ PrimitiveHelper.getPostPeriod(app.job.value.opensAt, app.job.value.expiresAt) }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { BaseComponent, defineClassComponent } from "@/plugins/component.plugin";
import type { JobDetailProps } from "./JobDetails";
import type { JobModel } from "@/models/job.model";
import type { Ref } from "vue";
import { PrimitiveHelper } from "@/helpers/primitive.helper";

const props = defineProps<JobDetailProps>();

const app = defineClassComponent(
  class Component extends BaseComponent {
    public job: Ref<JobModel> = this.computed(() => props.data);

    public constructor() {
      super();
    }
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
    padding: 20px 12px;

    & .display_details {
      width: 100%;
      position: relative;
      overflow-y: scroll;
      border-radius: 25px;
      background-color: #fff;

      & .return_btn {
        top: 10px;
        left: 10px;
        color: #9f085f;
        border: 2px solid #9f085f;
        position: absolute;
        min-width: 78px;
        background: rgba(255, 255, 255, 0.5);
        border-radius: 24px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        outline: 0px;
        margin: 0px;
        cursor: pointer;
        user-select: none;
        vertical-align: middle;
        appearance: none;
        text-decoration: none;
        font-family: Roboto, Helvetica, Arial, sans-serif;
        letter-spacing: 0.02857em;
        text-transform: uppercase;
        transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
          box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
          color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

        & i {
          user-select: none;
          display: inline-block;
          fill: currentcolor;
          flex-shrink: 0;
          transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
          font-size: 1rem;
        }

        & p {
          font-size: 13px;
          font-weight: 400;
          line-height: 14px;
          margin: 0;
        }
      }

      & .return_btn:hover {
        background-color: #9f085f;
        color: white;
      }

      & .like_and_dislike_button {
        top: 10px;
        right: 10px;
        display: flex;
        position: absolute;
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
          cursor: pointer;
          user-select: none;
          vertical-align: middle;
          appearance: none;
          text-decoration: none;
          font-weight: 500;
          font-size: 0.8125rem;
          line-height: 1.75;
          letter-spacing: 0.02857em;
          text-transform: uppercase;
          transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
            box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
            color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

          &#like-button-id {
            color: #000;
            margin-right: 10px;
            background-color: #fff;

            &.active {
              background-color: #9f085f;
              color: white;
            }
          }

          &#dislike-button-id {
            color: #000;
            background-color: #fff;
          }

          & i {
            user-select: none;
            display: inline-block;
            fill: currentcolor;
            flex-shrink: 0;
            transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
            font-size: 1rem;
          }

          & p {
            padding: 7px 2px;
            font-size: 10px;
            font-weight: 700;
            line-height: 10px;
            margin: 0;
          }
        }
      }

      & .main_image {
        width: 100%;
        height: auto;
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
            font-weight: 700;
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

    & .display_details::-webkit-scrollbar {
      display: none;
    }

    & #fixed-area-id {
      left: 0;
      width: 100%;
      bottom: 0;
      padding-top: 30px;
      position: relative;

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

      & p {
        color: #000;
        font-size: 11px;
        text-align: center;
        font-weight: 400;
        line-height: 16px;
      }
    }
  }
}
</style>
