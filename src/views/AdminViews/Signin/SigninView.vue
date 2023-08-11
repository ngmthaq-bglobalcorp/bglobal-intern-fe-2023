<template>
  <CoverLayout>
    <div class="signin-container">
      <div class="content">
        <!-- Form -->
        <form @submit.prevent="app.submitForm">
          <div class="content-title">
            <h1 class="title">{{ app.t(`app.signin`) }}</h1>
            <span>
              {{ app.t(`app.dontHaveAccount`) }}
              <router-link :to="PathConst.adminSignup" class="link">{{ app.t(`app.signupHere`) }}</router-link>
            </span>
          </div>

          <div class="signin-google" v-if="app.isSigninGoogle.value">
            <button type="button" class="g-btn google-btn" @click.prevent="">
              <span class="item">
                <img src="@\assets\img\google.svg" alt="Google" class="image avatar" />
                {{ app.t(`app.signinGoogle`) }}
              </span>
            </button>
          </div>

          <div class="content-or" v-if="app.isSigninGoogle.value">
            <span class="divider text-muted">{{ app.t(`app.or`) }}</span>
          </div>

          <div class="invalid-input" v-if="app.errorUsernameOrPassword.value">
            {{ app.errorUsernameOrPassword.value }}
          </div>

          <!-- Form Group -->
          <div class="form-group">
            <label class="input-label" for="username">{{ app.t(`app.username`) }}</label>

            <input
              type="text"
              :class="['input-form', { 'is-invalid': app.errorUsername.value }]"
              name="username"
              id="username"
              :placeholder="app.t(`app.username`)"
              v-model="app.username.value"
              @focus="app.focusUsername"
            />

            <div class="invalid-feedback" v-if="app.errorUsername.value">{{ app.errorUsername.value }}</div>
          </div>
          <!-- End Form Group -->

          <!-- Form Group -->
          <div class="form-group">
            <label class="input-label" for="password">
              <span class="item">
                {{ app.t(`app.password`) }}
                <router-link :to="PathConst.adminForgot" class="link input-label-secondary">
                  {{ app.t(`app.forgotPassword`) }}
                </router-link>
              </span>
            </label>

            <input
              type="password"
              :class="['input-form', { 'is-invalid': app.errorPassword.value }]"
              name="password"
              id="password"
              :placeholder="app.t(`app.passwordRequired`)"
              v-model="app.password.value"
              @focus="app.focusPassword"
            />

            <div class="invalid-feedback" v-if="app.errorPassword.value">{{ app.errorPassword.value }}</div>
          </div>
          <!-- End Form Group -->

          <!-- Checkbox -->
          <div class="form-group" v-if="app.isRemember.value">
            <div class="input-group">
              <input
                type="checkbox"
                class="custom-control-input"
                name="rememberCheckbox"
                id="rememberCheckbox"
                v-model="app.remember.value"
              />

              <label class="custom-control-label text-muted" for="rememberCheckbox">
                {{ app.t(`app.rememberMe`) }}
              </label>
            </div>
          </div>
          <!-- End Checkbox -->

          <button type="submit" class="g-btn submit-btn">{{ app.t(`app.signin`) }}</button>
        </form>
        <!-- End Form -->
      </div>
    </div>
  </CoverLayout>
</template>

<script setup lang="ts">
import CoverLayout from "@/layouts/CoverLayout/CoverLayout.vue";
import { BaseComponent, defineClassComponent } from "@/plugins/component.plugin";
import { PathConst } from "@/const/path.const";
import { PrimitiveHelper } from "@/helpers/primitive.helper";
import { useAuthStore } from "@/stores/auth.store";
import type { Ref } from "vue";

const app = defineClassComponent(
  class Component extends BaseComponent {
    public authStore = useAuthStore();
    public isSigninGoogle: Ref<boolean> = this.ref(false);
    public isRemember: Ref<boolean> = this.ref(false);
    public username: Ref<string> = this.ref("");
    public password: Ref<string> = this.ref("");
    public remember: Ref<boolean> = this.ref(false);
    public errorUsernameOrPassword: Ref<string> = this.ref("");
    public errorUsername: Ref<string> = this.ref("");
    public errorPassword: Ref<string> = this.ref("");

    public constructor() {
      super();
    }

    public submitForm = async () => {
      if (!this.username.value) {
        this.errorUsername.value = this.t(`message.errorUsername`);
        return false;
      } else {
        this.errorUsername.value = "";
      }
      if (!this.password.value || !PrimitiveHelper.isValidPassword(this.password.value)) {
        this.errorPassword.value = this.t(`message.errorPassword`);
        return false;
      } else {
        this.errorPassword.value = "";
      }
      const isSuccess = await this.authStore.fetchAdminSignIn(this.username.value, this.password.value);
      if (!isSuccess) {
        this.errorUsernameOrPassword.value = this.t(`message.errorUsernameOrPassword`);
      }
    };

    public focusUsername = () => {
      if (this.errorUsername.value) {
        this.errorUsername.value = "";
        this.username.value = "";
      }
    };

    public focusPassword = () => {
      if (this.errorPassword.value) {
        this.errorPassword.value = "";
        this.password.value = "";
      }
    };
  },
);
</script>

<style scoped lang="scss">
@import "@/assets/scss/modules";
@import "@/assets/scss/admin";

.signin-container {
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

    & .signin-google {
      margin-bottom: 1.5rem;

      & .google-btn {
        color: $dark-variant;
        background-color: $white;
        border: 1px solid $border;

        &:hover {
          box-shadow: 0 3px 6px -2px rgba(140, 152, 164, 0.25);

          & .item {
            color: $blue;
          }
        }

        & .item {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          color: $dark-variant;

          & .avatar {
            width: 1rem;
            height: 1rem;
          }
        }
      }
    }

    & .content-or {
      text-align: center;
      margin-bottom: 1.5rem;

      & .divider {
        display: flex;
        align-items: center;

        &::before,
        &::after {
          content: "";
          flex: 1 1 0%;
          border-top: 0.0625rem solid $border;
          margin-top: 0.0625rem;
        }

        &::before {
          margin-right: 1.5rem;
        }

        &::after {
          margin-left: 1.5rem;
        }
      }
    }

    & .invalid-input {
      width: 100%;
      display: block;
      text-align: center;
      margin-top: 0.5rem;
      margin-bottom: 1.5rem;
      color: $danger;
    }

    & .form-group {
      margin-bottom: 1.5rem;

      & .input-label {
        display: block;
        color: $black;
        font-size: 0.875rem;
        margin-bottom: 0.5rem;

        & .item {
          display: flex;
          align-items: center;
          justify-content: space-between;

          & .input-label-secondary {
            color: #8c98a4 !important;
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
        font-size: 0.8125rem;
        color: $danger;
      }

      & .input-group {
        position: relative;
        z-index: 1;
        display: block;
        min-height: 1.4rem;
        padding-left: 1.5rem;

        & .custom-control-input {
          position: absolute;
          left: 0;
          z-index: -1;
          width: 1rem;
          height: 1.2rem;
          opacity: 0;
          border-radius: 0.25rem;
        }

        & .custom-control-label {
          position: relative;
          margin-bottom: 0;
          vertical-align: top;
          cursor: pointer;

          &::before {
            content: "";
            position: absolute;
            display: block;
            top: 0.2rem;
            left: -1.5rem;
            width: 1rem;
            height: 1rem;
            pointer-events: none;
            background-color: $white;
            border: 0.0625rem solid $border;
            border-radius: 0.25rem;
            transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
          }

          &::after {
            content: "";
            position: absolute;
            display: block;
            top: 0.2rem;
            left: -1.5rem;
            width: 1rem;
            height: 1rem;
            background: no-repeat 50%/50% 50%;
          }
        }

        & .custom-control-input:checked ~ .custom-control-label::before {
          color: $white;
          border-color: $blue-light;
          background-color: $blue-light;
        }

        & .custom-control-input:checked ~ .custom-control-label::after {
          background-image: url("@/assets/img/check.svg");
        }
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
  }
}
</style>
