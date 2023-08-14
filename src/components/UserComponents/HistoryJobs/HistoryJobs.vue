<template>
  <div class="card" :class="{ disabled: app.isAvailable.value }">
    <div class="header_card">
      <span class="viewed_date">Viewed date: August 4, 2023 15:55</span>
      <div class="button">
        <div class="tag_like">
          <i class="bi bi-bookmark icon"></i>
          <span class="tag_like_text">Like</span>
        </div>
        <button class="show_details" tabindex="0" type="button">
          <span class="details_text">View details</span>
          <i class="bi bi-caret-right icon"></i>
        </button>
      </div>
    </div>
    <div class="body_card">
      <h1 class="title">Title job</h1>
      <div class="main_content">
        <div class="first_content">
          <img src="@/assets/img/bglobal.png" />
          <div class="company_name">
            <div class="card_header_types">
              <div class="card_header_types_item">A</div>
              <div class="card_header_types_item">B</div>
            </div>
            <span>JOBS</span>
          </div>
        </div>
        <div class="second_content">
          <div class="card_infor_item">
            <i class="bi bi-geo-alt"></i>
            <p class="infor_job">Location</p>
          </div>
          <div class="card_infor_item">
            <i class="bi bi-bus-front"></i>
            <p class="infor_job">Station</p>
          </div>
          <div class="card_infor_item">
            <i class="bi bi-cash-coin"></i>
            <p class="infor_job">Salary</p>
          </div>
          <div class="card_infor_item">
            <i class="bi bi-clock"></i>
            <p class="infor_job">Time</p>
          </div>
        </div>
      </div>
      <span class="third_content">Posting period: July 3, 2023 04:00 to July 31, 2023 04:00</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { BaseComponent, defineClassComponent } from "@/plugins/component.plugin";
import type { Ref } from "vue";

const app = defineClassComponent(
  class Component extends BaseComponent {
    public isAvailable: Ref<boolean> = this.ref(false);

    public constructor() {
      super();
    }
  },
);
</script>

<style scoped lang="scss">
@import "@/assets/scss/modules";

.card {
  width: 100%;
  display: flex;
  padding: 15px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  align-items: flex-start;
  border-radius: 20px;
  margin-bottom: 15px;
  background-color: $white;

  &.disabled {
    background: #e0e0e0;
    width: 100%;
    display: flex;
    padding: 15px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    align-items: flex-start;
    border-radius: 20px;
    margin-bottom: 15px;
  }

  & .header_card {
    width: 100%;
    display: flex;
    justify-content: space-between;

    & .viewed_date {
      color: rgba(0, 0, 0, 0.7);
      width: max-content;
      font-size: 11px;
      text-align: left;
      font-weight: 400;
      line-height: 16px;
      white-space: pre-line;
      letter-spacing: 0.00938em;
      margin: 0px;
    }

    & .button {
      height: 34px;
      display: flex;
      min-width: max-content;

      & .tag_like {
        color: $white;
        background-color: #e65078;
        display: flex;
        align-items: center;
        padding: 10px 14px;
        border-radius: 24px;
        cursor: pointer;

        & .icon {
          font-size: 14px;
          margin-right: 0.5rem;
        }

        & .tag_like_text {
          font-size: 10px;
          font-weight: 700;
          line-height: 10px;
        }
      }

      & .show_details {
        color: #9f085f;
        background: $white;
        border: 2px solid #9f085f;
        border-radius: 24px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        position: relative;
        outline: 0px;
        padding: 10px 10px 10px 20px;
        margin-left: 5px;
        cursor: pointer;
        transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
          box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
          color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

        & .details_text {
          font-size: 14px;
          font-weight: 400;
          line-height: 10px;
        }
      }
    }
  }
  & .body_card {
    & .title {
      color: #000;
      font-size: 16px;
      font-weight: 700;
      line-height: 21px;
    }

    & .main_content {
      align-items: flex-start;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 100%;

      & .first_content {
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

        & .company_name {
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

      & .second_content {
        display: flex;
        margin-top: 10px;
        flex-direction: column;

        & .card_infor_item {
          width: 90%;
          display: flex;
          align-items: baseline;
          height: 26px;

          & i {
            font-size: 20px;
            margin-right: 4px;
          }

          & .infor_job {
            color: #000;
            width: 100%;
            font-size: 13px;
            flex-shrink: 0;
            font-weight: 700;
            line-height: 19px;
            margin-top: 5px;
          }
        }
      }
    }

    & .third_content {
      color: #000;
      font-size: 11px;
      margin-top: 14px;
      font-weight: 400;
      line-height: 16px;
    }
  }
}
</style>
