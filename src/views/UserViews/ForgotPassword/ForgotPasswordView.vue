<template>
  <UserLayout :is-auth="true">
    <div class="forgot-container">
      <div class="content">
        <!-- Form -->
        <form @submit.prevent="app.submitForm">
          <div class="content-title">
            <h1 class="title">{{ app.t(`app.forgotPassword`) }}</h1>
            <span>{{ app.t(`app.forgotPasswordTitle`) }}</span>
          </div>

          <div class="success-message" v-if="app.successMessage.value">
            {{ app.successMessage.value }}
          </div>
          <div class="fail-message" v-if="app.failMessage.value">
            {{ app.failMessage.value }}
          </div>

          <!-- Form Group -->
          <div class="form-group">
            <label class="input-label" for="organizationEmail">{{ app.t(`app.organizationEmail`) }}</label>

            <div class="item">
              <input
                type="email"
                :class="['input-form', { 'is-invalid': app.errorEmail.value }]"
                name="email"
                id="organizationEmail"
                placeholder="Email@organization.com"
                v-model="app.email.value"
                @focus="app.focusEmail"
              />

              <button class="g-btn send-btn" @click.prevent="app.sendOtp" :disabled="app.seconds.value > 0">
                <span v-if="app.seconds.value > 0">{{ app.seconds.value }}</span>
                <span v-else>{{ app.t(`app.sendOtp`) }}</span>
              </button>
            </div>

            <div class="invalid-feedback" v-if="app.errorEmail.value">{{ app.errorEmail.value }}</div>
          </div>
          <!-- End Form Group -->

          <!-- Form Group -->
          <div class="form-group">
            <label class="input-label" for="emailOtp">{{ app.t(`app.emailOtp`) }}</label>

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

          <!-- Form Group -->
          <div class="form-group">
            <label class="input-label" for="newPassword">{{ app.t(`app.newPassword`) }}</label>

            <div class="custom-input-group">
              <input
                type="password"
                :class="['input-form', { 'is-invalid': app.errorNewPassword.value }]"
                name="newPassword"
                id="newPassword"
                :placeholder="app.t(`app.enterNewPassword`)"
                v-model="app.newPassword.value"
                @focus="app.focusNewPassword"
              />

              <div class="invalid-feedback" v-if="app.errorNewPassword.value">{{ app.errorNewPassword.value }}</div>
            </div>
          </div>
          <!-- End Form Group -->

          <!-- Form Group -->
          <div class="form-group">
            <label class="input-label" for="confirmNewPassword">{{ app.t(`app.confirmNewPassword`) }}</label>

            <div class="custom-input-group">
              <input
                type="password"
                :class="['input-form', { 'is-invalid': app.errorConfirmNewPassword.value }]"
                name="confirmNewPassword"
                id="confirmNewPassword"
                :placeholder="app.t(`app.confirmNewPassword`)"
                v-model="app.confirmNewPassword.value"
                @focus="app.focusConfirmNewPassword"
              />

              <div class="invalid-feedback" v-if="app.errorConfirmNewPassword.value">
                {{ app.errorConfirmNewPassword.value }}
              </div>
            </div>
          </div>
          <!-- End Form Group -->

          <button type="submit" class="g-btn submit-btn">{{ app.t(`app.submit`) }}</button>
          <div class="back-to-signin">
            <router-link :to="PathConst.userSignin" class="link">
              <i class="bi bi-chevron-left"></i> {{ app.t(`app.backToSignin`) }}
            </router-link>
          </div>
        </form>
        <!-- End Form -->
      </div>
    </div>
  </UserLayout>
</template>

<script setup lang="ts">
import { BaseComponent, defineClassComponent } from "@/plugins/component.plugin";
import UserLayout from "@/layouts/UserLayout/UserLayout.vue";
import { AppConst } from "@/const/app.const";
import { PathConst } from "@/const/path.const";
import { ValidateHelper } from "@/helpers/validate.helper";
import { useAuthStore } from "@/stores/auth.store";
import type { Ref } from "vue";

const app = defineClassComponent(
  class Component extends BaseComponent {
    public authStore = useAuthStore();

    public successMessage: Ref<string> = this.ref("");
    public failMessage: Ref<string> = this.ref("");
    public email: Ref<string> = this.ref("");
    public emailOtp: Ref<string> = this.ref("");
    public newPassword: Ref<string> = this.ref("");
    public confirmNewPassword: Ref<string> = this.ref("");
    public errorEmail: Ref<string> = this.ref("");
    public errorOtp: Ref<string> = this.ref("");
    public errorNewPassword: Ref<string> = this.ref("");
    public errorConfirmNewPassword: Ref<string> = this.ref("");
    public seconds: Ref<number> = this.ref(0);

    public constructor() {
      super();
    }

    public countdown = () => {
      this.seconds.value = AppConst.DEFAULT.countdownSeconds;

      var timer = setInterval(() => {
        this.seconds.value--;
        if (this.seconds.value <= 0) {
          this.seconds.value = 0;
          clearInterval(timer);
        }
      }, 1000);
    };

    public sendOtp = async () => {
      this.failMessage.value = "";
      this.successMessage.value = "";
      if (!this.email.value || !ValidateHelper.isValidEmail(this.email.value)) {
        this.errorEmail.value = this.t(`message.errorEmail`);
      } else {
        this.commonStore.setIsLoading(true);
        // const isSuccess = await this.authStore.fetchForgotPassword(this.email.value);
        const isSuccess = true;
        if (isSuccess) {
          this.successMessage.value = app.t(`message.sendOtpSuccess`);
          this.countdown();
        } else {
          this.failMessage.value = app.t(`message.sendOtpFail`);
        }
        this.commonStore.setIsLoading(false);
      }
    };

    public submitForm = async () => {
      let isValidInput = true;
      if (!this.emailOtp.value) {
        isValidInput = false;
        this.errorOtp.value = this.t(`message.errorOtp`);
      } else {
        this.errorOtp.value = "";
      }
      ValidateHelper.checkValidPassword(this.newPassword.value).forEach((value) => {
        this.errorNewPassword.value += this.t(value) + "\n";
      });
      if (this.errorNewPassword.value) {
        isValidInput = false;
      }
      if (this.confirmNewPassword.value !== this.newPassword.value) {
        isValidInput = false;
        this.errorConfirmNewPassword.value = this.t(`message.errorConfirmPassword`);
      } else {
        this.errorConfirmNewPassword.value = "";
      }
      if (isValidInput) {
        const data = {
          emailOtp: this.emailOtp.value,
          newPassword: this.newPassword.value,
        };
        this.commonStore.setIsLoading(true);
        const isSuccess = await this.authStore.fetchResetPassword(data);
        if (isSuccess) {
          this.successMessage.value = app.t(`message.updateSuccess`);
          this.router.push(PathConst.userSignin);
        } else {
          this.failMessage.value = app.t(`message.errorOtp`);
        }
        this.commonStore.setIsLoading(false);
      }
    };

    public focusEmail = () => {
      if (this.errorEmail.value) {
        this.errorEmail.value = "";
      }
    };

    public focusOtp = () => {
      if (this.errorOtp.value) {
        this.errorOtp.value = "";
        this.emailOtp.value = "";
      }
    };

    public focusNewPassword = () => {
      if (this.errorNewPassword.value) {
        this.errorNewPassword.value = "";
        this.newPassword.value = "";
      }
    };

    public focusConfirmNewPassword = () => {
      if (this.errorConfirmNewPassword.value) {
        this.errorConfirmNewPassword.value = "";
        this.confirmNewPassword.value = "";
      }
    };
  },
);
</script>

<style scoped lang="scss">
@import "@/assets/scss/modules";
@import "@/assets/scss/user";

.forgot-container {
  display: flex;
  align-items: center;
  justify-content: center;

  & .content {
    width: 100%;
    padding: 3rem 1rem;
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

    & .success-message {
      color: $success;
      text-align: center;
      margin-bottom: 0.5rem;
    }

    & .fail-message {
      color: $danger;
      text-align: center;
      margin-bottom: 0.5rem;
    }

    & .form-group {
      margin-bottom: 1.5rem;
      transition: all 0.2s ease-in-out;

      & .item {
        display: flex;
        align-items: center;
        justify-content: space-between;

        & .send-btn {
          width: 20%;
          height: calc(1.5em + 1.875rem);
          color: $white;
          background-color: $user-primary;
          border-color: $user-primary;
          padding: 0;
          margin-left: 0.25rem;

          &:hover {
            background-color: $pink;
            border-color: $pink;
          }
        }
      }

      & .input-label {
        display: block;
        color: $black;
        font-size: 0.875rem;
        margin-bottom: 0.5rem;
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
          border-color: rgba($user-primary, 0.6);
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
        white-space: pre-line;
      }
    }

    & .submit-btn {
      color: $white;
      background-color: $user-primary;
      border-color: $user-primary;
      margin-bottom: 0.5rem;

      &:hover {
        background-color: $pink;
        border-color: $pink;
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
