<template>
  <BaseLayout id="base-layout">
    <CoverComponent id="cover"></CoverComponent>
    <div class="signup-container">
      <div class="content">
        <!-- Form -->
        <form @submit.prevent="app.submitForm">
          <div class="content-title">
            <h1 class="title">Sign in</h1>
            <span>
              Don't have an account yet?
              <router-link to="/admin/signup" class="link">Sign up here</router-link>
            </span>
          </div>

          <div class="signup-google">
            <button type="button" class="g-btn google-btn" @click.prevent="">
              <span class="item">
                <img class="avatar" src="@\assets\img\svg\google.svg" alt="Google Icon" />
                Sign in with Google
              </span>
            </button>
          </div>

          <div class="content-or">
            <span class="divider text-muted">OR</span>
          </div>

          <!-- Form Group -->
          <div class="form-group">
            <label class="input-label" for="organizationEmail">Organization email</label>

            <input
              type="email"
              :class="['input-form', { 'is-invalid': false, 'is-valid': false }]"
              name="email"
              id="organizationEmail"
              placeholder="Email@organization.com"
              v-model="app.organizationEmail.value"
              required
            />

            <div class="invalid-feedback" v-if="false">Please enter a valid email address.</div>
          </div>
          <!-- End Form Group -->

          <!-- Form Group -->
          <div class="form-group">
            <label class="input-label" for="password">
              <span class="item">
                Password
                <router-link to="" class="link input-label-secondary">Forgot Password?</router-link>
              </span>
            </label>

            <input
              type="password"
              :class="['input-form', { 'is-invalid': false, 'is-valid': false }]"
              name="password"
              id="password"
              placeholder="8+ characters required"
              v-model="app.password.value"
              required
            />

            <div class="invalid-feedback" v-if="false">Your password is invalid. Please try again.</div>
          </div>
          <!-- End Form Group -->

          <!-- Checkbox -->
          <div class="form-group">
            <div class="input-group">
              <input
                type="checkbox"
                :class="['custom-control-input', { 'is-invalid': false, 'is-valid': false }]"
                name="rememberCheckbox"
                id="rememberCheckbox"
              />

              <label class="custom-control-label text-muted" for="rememberCheckbox">Remember me</label>
            </div>
          </div>
          <!-- End Checkbox -->

          <button type="submit" class="g-btn submit-btn">Sign in</button>
        </form>
        <!-- End Form -->
      </div>
    </div>
  </BaseLayout>
</template>

<script setup lang="ts">
import { BaseComponent, defineClassComponent } from "@/plugins/component.plugin";
import BaseLayout from "@/layouts/BaseLayout.vue";
import CoverComponent from "@/components/AdminComponents/Cover/CoverComponent.vue";
import type { Ref } from "vue";

const app = defineClassComponent(
  class Component extends BaseComponent {
    public organizationEmail: Ref<String> = this.ref("");
    public password: Ref<String> = this.ref("");

    public constructor() {
      super();
    }

    public submitForm = () => {
      console.log(this.organizationEmail.value);
      console.log(this.password.value);
      this.organizationEmail.value = "";
      this.password.value = "";
    };
  },
);
</script>

<style scoped lang="scss">
@import "@/assets/scss/modules";

#base-layout {
  display: flex;

  & #cover {
    flex: 1;
  }

  & .signup-container {
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

      & .signup-google {
        margin-bottom: 1.5rem;

        & .google-btn {
          color: var(--color-dark-variant);
          background-color: var(--color-white);
          border: 1px solid var(--color-border);

          &:hover {
            box-shadow: 0 3px 6px -2px rgba(140, 152, 164, 0.25);

            & .item {
              color: var(--color-link);
            }
          }

          & .item {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            color: var(--color-dark-variant);

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
            border-top: 0.0625rem solid var(--color-border);
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

      & .form-group {
        margin-bottom: 1.5rem;

        & .input-label {
          display: block;
          font-size: 0.875rem;

          & .item {
            display: flex;
            align-items: center;
            justify-content: space-between;

            & .input-label-secondary {
              color: #8c98a4 !important;
              font-size: 0.8125rem;
              margin-left: 0.25rem;

              &:hover {
                color: #0052ea !important;
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
          color: var(--color-dark);
          background-color: #fff;
          background-clip: padding-box;
          border: 0.0625rem solid var(--color-border);
          border-radius: 0.3125rem;
          transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

          &::placeholder {
            color: #97a4af;
            opacity: 1;
          }

          &:focus {
            color: var(--color-dark);
            background-color: var(--color-white);
            outline: 0;
            border-color: rgba(55, 125, 255, 0.4);
            box-shadow: 0 0 10px rgba(55, 125, 255, 0.1);
          }
        }

        & .is-invalid,
        & .is-invalid:focus {
          border-color: var(--color-danger);
          box-shadow: 0 0 10px rgba(237, 76, 120, 0.1);
        }

        & .is-valid,
        & .is-valid:focus {
          border-color: var(--color-success);
          box-shadow: 0 0 10px rgba(0, 201, 167, 0.1);
        }

        & .invalid-feedback {
          display: block;
          width: 100%;
          margin-top: 0.25rem;
          font-size: 80%;
          color: var(--color-danger);
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
              background-color: var(--color-white);
              border: 0.0625rem solid #d6dbeb;
              border-radius: 0.25rem;
              transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
                box-shadow 0.15s ease-in-out;
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
            color: #fff;
            border-color: #377dff;
            background-color: #377dff;
          }

          & .custom-control-input:checked ~ .custom-control-label::after {
            background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='110' height='110' viewBox='0 0 110 110'%3e%3cpath fill='%23fff' d='M98.1,16.2c-2.5-2.3-6.4-2.2-8.7,0.2L36.7,70.1l-13-15.5c-2.9-3.5-7.9-4.1-11.1-1.4c-2.9,2.4-3.5,6.6-1.4,10.1 l16.5,28c3.2,5.4,10.8,5.8,14.5,0.8l56.5-67.3C100.7,22.1,100.4,18.5,98.1,16.2z'/%3e%3c/svg%3e");
          }
        }
      }

      & .submit-btn {
        color: var(--color-white);
        background-color: #377dff;
        border-color: #377dff;
        margin-bottom: 0.5rem;

        &:hover {
          background-color: #1164ff;
          border-color: #045cff;
        }
      }
    }
  }
}
</style>
