<template>
  <CoverLayout>
    <div class="forgot-container">
      <div class="content">
        <!-- Form -->
        <form @submit.prevent="app.submitForm">
          <div class="content-title">
            <h1 class="title">{{ app.t(`app.forgotPassword`) }}</h1>
            <span>{{ app.t(`app.forgotPasswordTitle`) }}</span>
          </div>

          <!-- Form Group -->
          <div class="form-group">
            <label class="input-label" for="organizationEmail">{{ app.t(`app.organizationEmail`) }}</label>

            <input
              type="email"
              :class="['input-form', { 'is-invalid': app.errorEmail.value }]"
              name="email"
              id="organizationEmail"
              placeholder="Email@organization.com"
              v-model="app.organizationEmail.value"
              @focus="app.focusEmail"
            />

            <div class="invalid-feedback" v-if="app.errorEmail.value">{{ app.errorEmail.value }}</div>
          </div>
          <!-- End Form Group -->

          <!-- Form Group -->
          <div class="form-group" v-if="app.isValidEmail.value">
            <label class="input-label" for="emailOtp">
              <span class="item">
                {{ app.t(`app.emailOtp`) }}
                <button class="resend-btn" @click.prevent="app.resendOtp">{{ app.t(`app.resendOtp`) }}</button>
              </span>
            </label>

            <input
              type="text"
              :class="['input-form', { 'is-invalid': app.errorOtp.value }]"
              name="emailOtp"
              id="emailOtp"
              :placeholder="app.t(`app.emailOtp`)"
              v-model="app.emailOtp.value"
              @focus="app.focusOtp"
            />

            <div class="invalid-feedback" v-if="app.errorOtp.value">{{ app.errorOtp.value }}</div>
          </div>
          <!-- End Form Group -->

          <button type="submit" class="g-btn submit-btn">{{ app.t(`app.submit`) }}</button>
          <div class="back-to-signin">
            <router-link to="/admin/signin" class="link">
              <i class="bi bi-chevron-left"></i> {{ app.t(`app.backToSignin`) }}
            </router-link>
          </div>
        </form>
        <!-- End Form -->
      </div>
    </div>
  </CoverLayout>
</template>

<script setup lang="ts">
import CoverLayout from "@/layouts/CoverLayout/CoverLayout.vue";
import { BaseComponent, defineClassComponent } from "@/plugins/component.plugin";
import { PrimitiveHelper } from "@/helpers/primitive.helper";
import type { Ref } from "vue";

const app = defineClassComponent(
  class Component extends BaseComponent {
    public organizationEmail: Ref<string> = this.ref("");
    public emailOtp: Ref<string> = this.ref("");
    public isValidEmail: Ref<Boolean> = this.ref(false);
    public errorEmail: Ref<string> = this.ref("");
    public errorOtp: Ref<string> = this.ref("");

    public constructor() {
      super();
    }

    public resendOtp = () => {
      console.log("Resend OTP");
    };

    public submitForm = () => {
      if (!this.organizationEmail.value || !PrimitiveHelper.isValidEmail(this.organizationEmail.value)) {
        this.errorEmail.value = this.t(`message.errorEmail`);
      } else {
        this.errorEmail.value = "";
        this.isValidEmail.value = true;

        if (!this.emailOtp.value) {
          this.errorOtp.value = this.t(`message.errorOtp`);
        } else {
          this.errorOtp.value = "";
        }
      }
    };

    public focusEmail = () => {
      if (this.errorEmail.value) {
        this.errorEmail.value = "";
        this.organizationEmail.value = "";
      }
    };

    public focusOtp = () => {
      if (this.errorOtp.value) {
        this.errorOtp.value = "";
        this.emailOtp.value = "";
      }
    };
  },
);
</script>

<style scoped lang="scss">
@import "@/assets/scss/modules";
@import "@/assets/scss/admin";

.forgot-container {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;

  & .content {
    width: 100%;
    padding: 3rem 0;
    max-width: 25rem;

    & .content-title {
      text-align: center;
      margin-bottom: 2rem;

      & .title {
        font-size: 1.75rem;
        font-weight: 600;
        line-height: 1.4;
      }

      & span {
        margin-bottom: 1rem;
      }
    }

    & .form-group {
      margin-bottom: 1.5rem;
      transition: all 0.2s ease-in-out;

      & .input-label {
        display: block;
        font-size: 0.875rem;

        & .item {
          display: flex;
          align-items: center;
          justify-content: space-between;

          & .resend-btn {
            color: #8c98a4 !important;
            border: none;
            outline: none;
            background-color: transparent;
            font-size: 0.8125rem;
            margin-left: 0.25rem;

            &:hover {
              color: $blue !important;
            }
          }
        }
      }

      & .input-form {
        display: block;
        width: 100%;
        height: calc(1.5em + 1.875rem);
        padding: 0.875rem 1.09375rem;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        color: $dark;
        background-color: $white;
        background-clip: padding-box;
        border: 0.0625rem solid $border;
        border-radius: 0.3125rem;
        transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

        &::placeholder {
          color: #97a4af;
          opacity: 1;
        }

        &:focus {
          color: $dark;
          background-color: $white;
          outline: 0;
          border-color: rgba(55, 125, 255, 0.4);
          box-shadow: 0 0 10px rgba(55, 125, 255, 0.1);
        }
      }

      & .is-invalid,
      & .is-invalid:focus {
        border-color: $danger;
        box-shadow: 0 0 10px rgba(237, 76, 120, 0.1);
      }

      & .is-valid,
      & .is-valid:focus {
        border-color: $success;
        box-shadow: 0 0 10px rgba(0, 201, 167, 0.1);
      }

      & .invalid-feedback {
        display: block;
        width: 100%;
        margin-top: 0.25rem;
        font-size: 80%;
        color: $danger;
      }
    }

    & .submit-btn {
      color: $white;
      background-color: $blue-light;
      border-color: $blue-light;
      margin-bottom: 0.5rem;

      &:hover {
        background-color: $blue;
        border-color: $blue;
      }
    }

    & .back-to-signin {
      text-align: center;
      margin-top: 0.5rem;
      padding: 0.54688rem 0.875rem;

      & .link {
        font-weight: 600;
      }
    }
  }
}
</style>
