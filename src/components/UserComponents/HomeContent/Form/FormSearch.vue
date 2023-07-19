<template>
  <div class="form">
    <form class="form-search" id="homepage_search_form_id">
      <div class="select-1">
        <div class="location-time">
          <p>Service</p>
          <select class="first_search_row custom_select" style="width: 136px">
            <option value="_default_selection">Location</option>
            <option value="2,3,4,8,10,5,9,6,11,7">1</option>
            <option value="2">&nbsp; &nbsp;中央区</option>
            <option value="3">&nbsp; &nbsp;北区</option>
            <option value="4">&nbsp; &nbsp;東区</option>
            <option value="8">&nbsp; &nbsp;西区</option>
            <option value="10">&nbsp; &nbsp;手稲区</option>
            <option value="5">&nbsp; &nbsp;白石区</option>
            <option value="9">&nbsp; &nbsp;厚別区</option>
            <option value="6">&nbsp; &nbsp;豊平区</option>
            <option value="11">&nbsp; &nbsp;清田区</option>
            <option value="7">&nbsp; &nbsp;南区</option>
            <option value="22">石狩・当別</option>
            <option value="13">小樽・銭函・余市・倶知安</option>
            <option value="19">江別・岩見沢</option>
            <option value="15">苫小牧・室蘭・登別</option>
            <option value="21">恵庭・千歳・北広島</option>
            <option value="20">滝川・砂川エリア</option>
            <option value="14">旭川・道北エリア</option>
            <option value="12">函館・道南エリア</option>
            <option value="17">帯広・十勝エリア</option>
            <option value="16">釧路・道東エリア</option>
            <option value="18">北見・オホーツクエリア</option>
            <option value="23">複数エリア</option>
          </select>
        </div>
        <svg
          class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-14cq1u6"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="ClearIcon"
        >
          <path
            d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
          ></path>
        </svg>
        <div class="location-time">
          <p>Start time</p>
          <select class="jss86 custom_select">
            <option value="_default_selection">Time</option>
            <option value="0000">00:00</option>
            <option value="0030">00:30</option>
            <option value="0100">01:00</option>
            <option value="0130">01:30</option>
            <option value="0200">02:00</option>
            <option value="0230">02:30</option>
            <option value="0300">03:00</option>
            <option value="0330">03:30</option>
            <option value="0400">04:00</option>
            <option value="0430">04:30</option>
            <option value="0500">05:00</option>
            <option value="0530">05:30</option>
            <option value="0600">06:00</option>
            <option value="0630">06:30</option>
            <option value="0700">07:00</option>
            <option value="0730">07:30</option>
            <option value="0800">08:00</option>
            <option value="0830">08:30</option>
            <option value="0900">09:00</option>
            <option value="0930">09:30</option>
            <option value="1000">10:00</option>
            <option value="1030">10:30</option>
            <option value="1100">11:00</option>
            <option value="1130">11:30</option>
            <option value="1200">12:00</option>
            <option value="1230">12:30</option>
            <option value="1300">13:00</option>
            <option value="1330">13:30</option>
            <option value="1400">14:00</option>
            <option value="1430">14:30</option>
            <option value="1500">15:00</option>
            <option value="1530">15:30</option>
            <option value="1600">16:00</option>
            <option value="1630">16:30</option>
            <option value="1700">17:00</option>
            <option value="1730">17:30</option>
            <option value="1800">18:00</option>
            <option value="1830">18:30</option>
            <option value="1900">19:00</option>
            <option value="1930">19:30</option>
            <option value="2000">20:00</option>
            <option value="2030">20:30</option>
            <option value="2100">21:00</option>
            <option value="2130">21:30</option>
            <option value="2200">22:00</option>
            <option value="2230">22:30</option>
            <option value="2300">23:00</option>
            <option value="2330">23:30</option>
          </select>
        </div>
        <svg
          class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-14cq1u6"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="ClearIcon"
        >
          <path
            d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
          ></path>
        </svg>
        <div class="location-time">
          <p>End time</p>
          <select class="jss86 custom_select">
            <option value="_default_selection">End</option>
            <option value="0000">00:00</option>
            <option value="0030">00:30</option>
            <option value="0100">01:00</option>
            <option value="0130">01:30</option>
            <option value="0200">02:00</option>
            <option value="0230">02:30</option>
            <option value="0300">03:00</option>
            <option value="0330">03:30</option>
            <option value="0400">04:00</option>
            <option value="0430">04:30</option>
            <option value="0500">05:00</option>
            <option value="0530">05:30</option>
            <option value="0600">06:00</option>
            <option value="0630">06:30</option>
            <option value="0700">07:00</option>
            <option value="0730">07:30</option>
            <option value="0800">08:00</option>
            <option value="0830">08:30</option>
            <option value="0900">09:00</option>
            <option value="0930">09:30</option>
            <option value="1000">10:00</option>
            <option value="1030">10:30</option>
            <option value="1100">11:00</option>
            <option value="1130">11:30</option>
            <option value="1200">12:00</option>
            <option value="1230">12:30</option>
            <option value="1300">13:00</option>
            <option value="1330">13:30</option>
            <option value="1400">14:00</option>
            <option value="1430">14:30</option>
            <option value="1500">15:00</option>
            <option value="1530">15:30</option>
            <option value="1600">16:00</option>
            <option value="1630">16:30</option>
            <option value="1700">17:00</option>
            <option value="1730">17:30</option>
            <option value="1800">18:00</option>
            <option value="1830">18:30</option>
            <option value="1900">19:00</option>
            <option value="1930">19:30</option>
            <option value="2000">20:00</option>
            <option value="2030">20:30</option>
            <option value="2100">21:00</option>
            <option value="2130">21:30</option>
            <option value="2200">22:00</option>
            <option value="2230">22:30</option>
            <option value="2300">23:00</option>
            <option value="2330">23:30</option>
          </select>
        </div>
      </div>
      <div class="select-2">
        <div class="location-sub-2-3">
          <p>Service 2</p>
          <select class="custom_select">
            <option value="_default_selection">Location</option>
            <option value="2,3,4,8,10,5,9,6,11,7">札幌市</option>
            <option value="2">&nbsp; &nbsp;中央区</option>
            <option value="3">&nbsp; &nbsp;北区</option>
            <option value="4">&nbsp; &nbsp;東区</option>
            <option value="8">&nbsp; &nbsp;西区</option>
            <option value="10">&nbsp; &nbsp;手稲区</option>
            <option value="5">&nbsp; &nbsp;白石区</option>
            <option value="9">&nbsp; &nbsp;厚別区</option>
            <option value="6">&nbsp; &nbsp;豊平区</option>
            <option value="11">&nbsp; &nbsp;清田区</option>
            <option value="7">&nbsp; &nbsp;南区</option>
            <option value="22">石狩・当別</option>
            <option value="13">小樽・銭函・余市・倶知安</option>
            <option value="19">江別・岩見沢</option>
            <option value="15">苫小牧・室蘭・登別</option>
            <option value="21">恵庭・千歳・北広島</option>
            <option value="20">滝川・砂川エリア</option>
            <option value="14">旭川・道北エリア</option>
            <option value="12">函館・道南エリア</option>
            <option value="17">帯広・十勝エリア</option>
            <option value="16">釧路・道東エリア</option>
            <option value="18">北見・オホーツクエリア</option>
            <option value="23">複数エリア</option>
          </select>
        </div>
        <div class="location-sub-2-3">
          <p>Service 3</p>
          <select class="custom_select">
            <option value="_default_selection">Location</option>
            <option value="2,3,4,8,10,5,9,6,11,7">札幌市</option>
            <option value="2">&nbsp; &nbsp;中央区</option>
            <option value="3">&nbsp; &nbsp;北区</option>
            <option value="4">&nbsp; &nbsp;東区</option>
            <option value="8">&nbsp; &nbsp;西区</option>
            <option value="10">&nbsp; &nbsp;手稲区</option>
            <option value="5">&nbsp; &nbsp;白石区</option>
            <option value="9">&nbsp; &nbsp;厚別区</option>
            <option value="6">&nbsp; &nbsp;豊平区</option>
            <option value="11">&nbsp; &nbsp;清田区</option>
            <option value="7">&nbsp; &nbsp;南区</option>
            <option value="22">石狩・当別</option>
            <option value="13">小樽・銭函・余市・倶知安</option>
            <option value="19">江別・岩見沢</option>
            <option value="15">苫小牧・室蘭・登別</option>
            <option value="21">恵庭・千歳・北広島</option>
            <option value="20">滝川・砂川エリア</option>
            <option value="14">旭川・道北エリア</option>
            <option value="12">函館・道南エリア</option>
            <option value="17">帯広・十勝エリア</option>
            <option value="16">釧路・道東エリア</option>
            <option value="18">北見・オホーツクエリア</option>
            <option value="23">複数エリア</option>
          </select>
        </div>
      </div>
      <div class="condition">
        <p>Discerning condition</p>
        <div class="tag">
          <label for="8264"
            >Holidays<input class="jss185 MuiBox-root css-0" id="8264" type="checkbox" name="8264" value="8264"
          /></label>
          <label for="8272"
            >3 days/week<input class="jss185 MuiBox-root css-0" id="8272" type="checkbox" name="8272" value="8272"
          /></label>
          <label for="8265"
            >The allowance for dependents<input
              class="jss185 MuiBox-root css-0"
              id="8265"
              type="checkbox"
              name="8265"
              value="8265"
          /></label>
          <label for="8274"
            >Around JR/subway stations<input
              class="jss185 MuiBox-root css-0"
              id="8274"
              type="checkbox"
              name="8274"
              value="8274"
          /></label>
          <label for="8263"
            >Commuting by car<input class="jss185 MuiBox-root css-0" id="8263" type="checkbox" name="8263" value="8263"
          /></label>
        </div>
      </div>
      <div class="applicable">
        <div class="suitable">
          <p class="title">Applicable job</p>

          <div class="result">
            <p class="result-match">2</p>
            <p class="jobs">&nbsp;/&nbsp;</p>
            <p class="result-sum">394</p>
            <p class="jobs">Jobs</p>
          </div>
        </div>
        <button class="view-result" tabindex="0" type="submit" form="homepage_search_form_id">
          View search results<span class="MuiTouchRipple-root css-w0pj6f"></span>
        </button>
      </div>
    </form>
    <div class="search-condition">
      <img class="MuiBox-root css-0" src="../../../../assets/img/ic_search.71514682dc7410fdb320ef5038e30837.svg" />
      <p class="MuiTypography-root MuiTypography-body1 css-9l3uo3">Search condition</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { BaseComponent, defineClassComponent } from "../../../../plugins/component.plugin";

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
.form {
  & .form-search {
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
        & p {
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
          background-image: url(../../../../assets/img/ic_expand.9b23fd7b7dbca75cefd0.svg);
          background-position-x: 92%;
          background-position-y: 52%;
          background-repeat: no-repeat;
          background-size: 24px;
        }
      }
      & .css-14cq1u6 {
        user-select: none;
        width: 1em;
        height: 1em;
        display: inline-block;
        fill: currentcolor;
        flex-shrink: 0;
        transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        font-size: 16px;
        margin: 0px 4px;
      }
    }
    & .select-2 {
      display: flex;
      margin-top: 8px;
      align-items: center;
      justify-content: space-between;

      & .location-sub-2-3 {
        width: 100%;
        flex-grow: 5;
        flex-shrink: 1;
        flex-basis: 0%;
        margin-right: 15px;
        & p {
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
          background-image: url(../../../../assets/img/ic_expand.9b23fd7b7dbca75cefd0.svg);
          background-position-x: 92%;
          background-position-y: 52%;
          background-repeat: no-repeat;
          background-size: 24px;
        }
      }
    }
    & .condition {
      margin-top: 15px;
      & p {
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
        & label {
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
          background-color: #fff;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          display: -webkit-box;
          line-break: anywhere;
          overflow: hidden;
          text-overflow: ellipsis;
          cursor: pointer;
          margin: 0 5px 10px 5px;
          & input {
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
        & .tittle {
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
      }
    }
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
    background-image: url(../../../../assets/img/tab.png);
    & p {
      color: #000;
      font-size: 16px;
      font-weight: 400;
      line-height: 23px;
      padding-left: 6px;
    }
  }
}
</style>
