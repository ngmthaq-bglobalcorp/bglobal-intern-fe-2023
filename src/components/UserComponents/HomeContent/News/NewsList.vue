<template>
  <div class="news">
    <p class="tittle">News</p>
    <a class="link" target="_blank" href="https://secure.haj.co.jp/event/spsnCF_230728/?mediaid=25&amp;application=pwa"
      ><div class="image">
        <img src="../../../../assets/img/tải xuống (8).png" class="icon" />

        <p class="time">7/26</p>
      </div>
      <div class="describe">
        <p class="type">Seminar</p>
        <p class="topic">【7/26】Job search counseling session for housewives.</p>
        <p class="fee">
          【Free】At Takuhoku Himawari Kaikan, we help housewives (husbands) who are busy with housework and
          child-rearing to find jobs locally.
        </p>
      </div></a
    >
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
.news {
  margin-top: 30px;
  & .tittle {
    color: #000;
    font-size: 18px;
    font-weight: 900;
    line-height: 26px;
    margin-bottom: 6px;
  }
  & .link {
    display: flex;
    padding: 15px 15px 15px 0;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 25px;
    margin-bottom: 10px;
    text-decoration: none;
    background-color: #fff;
    & .image {
      flex: 2;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      & .icon {
        position: relative;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        flex-shrink: 0;
        font-family: Roboto, Helvetica, Arial, sans-serif;
        font-size: 1.25rem;
        line-height: 1;
        border-radius: 50%;
        overflow: hidden;
        user-select: none;
        width: 42px;
        height: 42px;
      }
      & .time {
        color: #378182;
        font-size: 14px;
        margin-top: 5px;
        font-family: Roboto, sans-serif !important;
        font-weight: 700;
        line-height: 16px;
      }
    }
    & .describe {
      flex: 8;
      & .type {
        color: #378182;
        font-size: 12px;
        font-weight: 700;
        line-height: 17px;
      }
      & .topic {
        color: #000;
        font-size: 14px;
        font-weight: 700;
        line-height: 20px;
      }
      & .fee {
        color: #000;
        font-size: 11px;
        font-weight: 500;
        line-height: 16px;
      }
    }
  }
}
</style>
