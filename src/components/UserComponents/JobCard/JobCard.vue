<template>
  <div id="swiper">
    <div class="card" style="bottom: calc(4% + 80px); transform: translateX(-50%) scale(0.9375); opacity: 1">
      <div class="card_header">
        <div class="card_header_types_const">
          <div class="card_header_button_const">
            <button>
              <span>View the detail</span>
              <img src="@/assets/img/ic_arrow_forward.d87012f2877663d0aca7d5168712a610.svg" />
            </button>
          </div>
          <div class="card_header_title">CARD HEADER TITLE</div>
        </div>
        <div class="card_header_img_const">
          <img src="@/assets/img/bglobal.png" />
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
          <div>Location</div>
        </div>
        <div class="card_infor_item">
          <i class="bi bi-bus-front"></i>
          <div>Station</div>
        </div>
        <div class="card_infor_item">
          <i class="bi bi-cash-coin"></i>
          <div>Salary</div>
        </div>
        <div class="card_infor_item">
          <i class="bi bi-clock"></i>
          <div>Time</div>
        </div>
      </div>
      <div class="card_body">Card body</div>
      <div class="card_footer">
        <div class="card_footer_label">急なお休み･早退・シフト変更OK</div>
        <div class="card_footer_label">応募前又は面接時職場見学OK</div>
        <div class="card_footer_label">休憩室有</div>
        <div class="card_footer_label">残業原則なし</div>
        <div class="card_footer_label">車通勤OK</div>
        <div class="card_footer_label">扶養控除内OK</div>
        <div class="card_footer_label">履歴書不要</div>
        <div class="card_footer_label">週3日以内の勤務</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { BaseComponent, defineClassComponent } from "@/plugins/component.plugin";

const app = defineClassComponent(
  class Component extends BaseComponent {
    public constructor() {
      super();
    }
  },
);
</script>

<style scoped lang="scss">
@import "@/assets/scss/modules";
#swiper {
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
  }
}
</style>
