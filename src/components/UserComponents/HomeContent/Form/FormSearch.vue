<template>
  <div class="form">
    <form class="form-search" id="homepage_search_form_id">
      <div class="select-1">
        <div class="location-time">
          <p>{{ app.t("jobsApp.form.location") }}</p>
          <select class="first_search_row custom_select" style="width: 136px">
            <option value="_default_selection">{{ app.t("jobsApp.form.location") }}</option>
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
        <i class="bi bi-x-lg"></i>
        <div class="location-time">
          <p>{{ app.t("jobsApp.form.startTime") }}</p>
          <select class="jss86 custom_select">
            <option value="_default_selection">{{ app.t("jobsApp.form.startTime") }}</option>
            <option v-for="hour in PrimitiveHelper.time()" :key="hour">{{ hour }}</option>
          </select>
        </div>
        <i class="bi bi-x-lg"></i>
        <div class="location-time">
          <p>{{ app.t("jobsApp.form.endTime") }}</p>
          <select class="jss86 custom_select">
            <option value="_default_selection">{{ app.t("jobsApp.form.endTime") }}</option>
            <option v-for="hour in PrimitiveHelper.time()" :key="hour">{{ hour }}</option>
          </select>
        </div>
      </div>
      <div class="select-2">
        <div class="location-sub-2-3">
          <p>Second {{ app.t("jobsApp.form.location") }}</p>
          <select class="custom_select">
            <option value="_default_selection">{{ app.t("jobsApp.form.location") }}</option>
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
          <p>Third {{ app.t("jobsApp.form.location") }}</p>
          <select class="custom_select">
            <option value="_default_selection">{{ app.t("jobsApp.form.location") }}</option>
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
        <p>{{ app.t("jobsApp.form.conditions.title") }}</p>
        <div class="tag">
          <label for="8264"
            >{{ app.t("jobsApp.form.conditions.holiday")
            }}<input class="" id="8264" type="checkbox" name="8264" value="8264"
          /></label>
          <label for="8272"
            >{{ app.t("jobsApp.form.conditions.rest")
            }}<input class="" id="8272" type="checkbox" name="8272" value="8272"
          /></label>
          <label for="8265"
            >{{ app.t("jobsApp.form.conditions.allowance")
            }}<input class="" id="8265" type="checkbox" name="8265" value="8265"
          /></label>
          <label for="8274"
            >{{ app.t("jobsApp.form.conditions.station")
            }}<input class="" id="8274" type="checkbox" name="8274" value="8274"
          /></label>
          <label for="8263"
            >{{ app.t("jobsApp.form.conditions.commuting")
            }}<input class="" id="8263" type="checkbox" name="8263" value="8263"
          /></label>
        </div>
      </div>
      <div class="applicable">
        <div class="suitable">
          <p class="title">{{ app.t("jobsApp.form.applicable.title") }}</p>

          <div class="result">
            <p class="result-match">2</p>
            <p class="jobs">&nbsp;/&nbsp;</p>
            <p class="result-sum">394</p>
            <p class="jobs">Jobs</p>
          </div>
        </div>
        <button class="view-result" tabindex="0" type="submit" form="homepage_search_form_id">
          {{ app.t("jobsApp.form.applicable.result") }}
        </button>
      </div>
    </form>
    <div class="search-condition">
      <img class="" src="@/assets/img/ic_search.71514682dc7410fdb320ef5038e30837.svg" />
      <p class="">{{ app.t("jobsApp.form.applicable.searchCondition") }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { BaseComponent, defineClassComponent } from "@/plugins/component.plugin";
import { PrimitiveHelper } from "@/helpers/primitive.helper";

const app = defineClassComponent(
  class Component extends BaseComponent {
    public constructor() {
      super();

      PrimitiveHelper.time();
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
          background-image: url(@/assets/img/ic_expand.9b23fd7b7dbca75cefd0.svg);
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
    background-image: url(@/assets/img/tab.png);
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
