<template>
  <div class="profile-update-container">
    <!-- Card -->
    <div id="content" class="custom-card">
      <div class="custom-header">
        <h2 class="card-title">{{ app.t(`app.basicInformation`) }}</h2>
      </div>

      <!-- Body -->
      <div class="custom-body">
        <!-- Form -->
        <form id="changeInfomationForm" action="" @submit.prevent="app.onUpdateInfomation">
          <!-- Form Group -->
          <div class="form-group">
            <label class="input-label" for="organizationName">
              {{ app.t(`app.organizationName`) }}
              <span class="input-label-secondary">*</span>
            </label>

            <div class="custom-input-group">
              <input
                type="text"
                :class="['input-form', { 'is-invalid': app.errorName.value }]"
                name="name"
                id="organizationName"
                :placeholder="app.t(`app.organizationName`)"
                v-model="app.organizationName.value"
                @focus="app.focusName"
              />

              <div class="invalid-feedback" v-if="app.errorName.value">{{ app.errorName.value }}</div>
            </div>
          </div>
          <!-- End Form Group -->

          <!-- Form Group -->
          <div class="form-group">
            <label class="input-label" for="organizationEmail">
              {{ app.t(`app.organizationEmail`) }}
              <span class="input-label-secondary">*</span>
            </label>

            <div class="custom-input-group">
              <input
                type="text"
                :class="['input-form', { 'is-invalid': app.errorEmail.value }]"
                name="name"
                id="organizationEmail"
                placeholder="Email@organization.com"
                v-model="app.organizationEmail.value"
                readonly
              />

              <div class="invalid-feedback" v-if="app.errorEmail.value">{{ app.errorEmail.value }}</div>
            </div>
          </div>
          <!-- End Form Group -->

          <!-- Form Group -->
          <div class="form-group">
            <label class="input-label" for="organizationPhone">
              {{ app.t(`app.phoneNumber`) }}
              <span class="input-label-secondary">*</span>
            </label>

            <div class="custom-input-group">
              <input
                type="text"
                :class="['input-form', { 'is-invalid': app.errorPhoneNumber.value }]"
                name="phoneNumber"
                id="organizationPhone"
                :placeholder="app.t(`app.phoneNumber`)"
                v-model="app.phoneNumber.value"
                @focus="app.focusPhoneNumber"
              />

              <div class="invalid-feedback" v-if="app.errorPhoneNumber.value">{{ app.errorPhoneNumber.value }}</div>
            </div>
          </div>
          <!-- End Form Group -->

          <!-- Form Group -->
          <div class="form-group">
            <label class="input-label" for="organizationWebside">{{ app.t(`app.webside`) }}</label>

            <div class="custom-input-group">
              <input
                type="text"
                class="input-form"
                name="webside"
                id="organizationWebside"
                :placeholder="app.t(`app.webside`)"
                v-model="app.webside.value"
              />
            </div>
          </div>
          <!-- End Form Group -->

          <!-- Form Group -->
          <div class="form-group">
            <label class="input-label" for="organizationAddress">{{ app.t(`app.address`) }}</label>

            <div class="custom-input-group">
              <!-- Select Address -->
              <select class="input-form" id="organizationAddress" v-model="app.address.value">
                <option
                  :value="address"
                  :selected="address === app.address.value"
                  v-for="address in app.addressArray"
                  :key="address"
                >
                  {{ address }}
                </option>
              </select>
              <!-- End Select Address -->
            </div>
          </div>
          <!-- End Form Group -->

          <!-- Form Group -->
          <div class="form-group align-items-start">
            <label class="input-label" for="organizationIntroduction">{{ app.t(`app.introduction`) }}</label>

            <div class="custom-input-group">
              <textarea
                class="input-form"
                name="introduction"
                id="organizationIntroduction"
                v-model="app.introduction.value"
              ></textarea>
            </div>
          </div>
          <!-- End Form Group -->

          <!-- Form Group -->
          <div class="form-group">
            <label class="input-label">{{ app.t(`app.accountType`) }}</label>

            <div class="custom-input-group">
              <div class="group-check">
                <!-- Custom Radio -->
                <label
                  class="input-form"
                  :for="accountType.value"
                  v-for="accountType in app.typeArray"
                  :key="accountType.id"
                  @click="app.onSelectAccountType(accountType.value)"
                >
                  <span class="custom-check">
                    <input
                      type="radio"
                      class="custom-check-input"
                      name="userAccountTypeRadio"
                      :id="accountType.value"
                      :checked="accountType.value === app.organizationType.value"
                    />
                    <span class="custom-check-label">{{ accountType.text }}</span>
                  </span>
                </label>
                <!-- End Custom Radio -->
              </div>
            </div>
          </div>
          <!-- End Form Group -->

          <div class="d-flex justify-content-end">
            <button type="submit" class="small-btn primary-btn">{{ app.t(`app.saveChanges`) }}</button>
          </div>
        </form>
        <!-- End Form -->
      </div>
      <!-- End Body -->
    </div>
    <!-- End Card -->

    <!-- Card -->
    <div id="emailSection" class="custom-card">
      <div class="custom-header">
        <h2 class="card-title">{{ app.t(`app.email`) }}</h2>
      </div>

      <!-- Body -->
      <div class="custom-body">
        <div class="card-text">
          {{ app.t(`app.currentEmail`) }}<span class="font-weight-bold">{{ app.organizationEmail.value }}</span>
        </div>

        <!-- Form -->
        <form id="changeEmailForm" action="" @submit.prevent="app.onUpdateEmail">
          <!-- Form Group -->
          <div class="form-group">
            <label class="input-label" for="newOrganizationEmail">{{ app.t(`app.newEmail`) }}</label>

            <div class="custom-input-group">
              <input
                type="email"
                :class="['input-form', { 'is-invalid': app.errorNewEmail.value }]"
                name="newEmail"
                id="newOrganizationEmail"
                :placeholder="app.t(`app.enterNewEmail`)"
                v-model="app.newEmail.value"
                @focus="app.focusEmail"
              />

              <div class="invalid-feedback" v-if="app.errorNewEmail.value">{{ app.errorNewEmail.value }}</div>
            </div>
          </div>
          <!-- End Form Group -->

          <div class="d-flex justify-content-end">
            <button type="submit" class="small-btn primary-btn">{{ app.t(`app.saveChanges`) }}</button>
          </div>
        </form>
        <!-- End Form -->
      </div>
      <!-- End Body -->
    </div>
    <!-- End Card -->

    <!-- Card -->
    <div id="passwordSection" class="custom-card">
      <div class="custom-header">
        <h2 class="card-title">{{ app.t(`app.changePassword`) }}</h2>
      </div>

      <!-- Body -->
      <div class="custom-body">
        <!-- Form -->
        <form id="changePasswordForm" action="" @submit.prevent="app.onUpdatePassword">
          <!-- Form Group -->
          <div class="form-group">
            <label class="input-label" for="currentPassword">{{ app.t(`app.currentPassword`) }}</label>

            <div class="custom-input-group">
              <input
                type="password"
                :class="['input-form', { 'is-invalid': app.errorCurrentPassword.value }]"
                name="currentPassword"
                id="currentPassword"
                :placeholder="app.t(`app.enterCurrentPassword`)"
                v-model="app.currentPassword.value"
                @focus="app.focusCurrentPassword"
              />

              <div class="invalid-feedback" v-if="app.errorCurrentPassword.value">
                {{ app.errorCurrentPassword.value }}
              </div>
            </div>
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

          <!-- Form Group -->
          <div class="form-group">
            <div class="input-required">
              <h5 class="title">{{ app.t(`app.passwordRequirements`) }}</h5>

              <span>{{ app.t(`app.ensureRequirements`) }}</span>

              <ul>
                <li v-for="(_, index) in 4" :key="index">{{ app.t(`app.requirements.${index}`) }}</li>
              </ul>
            </div>
          </div>
          <!-- End Form Group -->

          <div class="d-flex justify-content-end">
            <button type="submit" class="small-btn primary-btn">{{ app.t(`app.saveChanges`) }}</button>
          </div>
        </form>
        <!-- End Form -->
      </div>
      <!-- End Body -->
    </div>
    <!-- End Card -->

    <!-- Card -->
    <div id="preferencesSection" class="custom-card">
      <div class="custom-header">
        <h2 class="card-title">{{ app.t(`app.preferences`) }}</h2>
      </div>

      <!-- Body -->
      <div class="custom-body">
        <!-- Form -->
        <form id="changePreferencesForm" action="" @submit.prevent="app.onUpdateLanguage">
          <!-- Form Group -->
          <div class="form-group">
            <label class="input-label" for="language">{{ app.t(`app.language`) }}</label>

            <div class="custom-input-group">
              <!-- Select Language -->
              <select class="input-form" id="language" v-model="app.language.value">
                <option :value="lang.lng" v-for="lang in LangConst.LOCALES" :key="lang.iso">{{ lang.text }}</option>
              </select>
              <!-- End Select Language -->
            </div>
          </div>
          <!-- End Form Group -->

          <!-- Form Group -->
          <div class="form-group">
            <label class="input-label" for="timeZone">{{ app.t(`app.timezone`) }}</label>

            <div class="custom-input-group">
              <input
                type="text"
                class="input-form"
                name="timeZone"
                id="timeZone"
                :placeholder="app.t(`app.yourTimezone`)"
                value="UTC+07:00"
                readonly
              />
            </div>
          </div>
          <!-- End Form Group -->

          <div class="d-flex justify-content-end">
            <button type="submit" class="small-btn primary-btn">{{ app.t(`app.saveChanges`) }}</button>
          </div>
        </form>
        <!-- End Form -->
      </div>
      <!-- End Body -->
    </div>
    <!-- End Card -->

    <!-- Card -->
    <div id="deleteAccountSection" class="custom-card">
      <div class="custom-header">
        <h4 class="card-title">{{ app.t(`app.deleteAccount`) }}</h4>
      </div>

      <!-- Body -->
      <div class="custom-body">
        <div class="card-text">{{ app.t(`app.deleteNotice`) }}</div>

        <div class="form-group">
          <!-- Custom Checkbox -->
          <div class="custom-check">
            <input type="checkbox" class="custom-check-input" id="deleteAccount" v-model="app.isConfirmDelete.value" />
            <label class="custom-check-label" for="deleteAccount">{{ app.t(`app.confirmDelete`) }}</label>
          </div>
          <!-- End Custom Checkbox -->
        </div>

        <div class="d-flex justify-content-end">
          <button
            type="submit"
            class="delete-btn small-btn"
            :disabled="!app.isConfirmDelete.value"
            @click.prevent="app.onToggleDeleteAccount"
          >
            {{ app.t(`app.deleteAccount`) }}
          </button>
        </div>
      </div>
      <!-- End Body -->
    </div>
    <!-- End Card -->
  </div>
</template>

<script setup lang="ts">
import { BaseComponent, defineClassComponent } from "@/plugins/component.plugin";
import { LangConst } from "@/const/lang.const";
import { PrimitiveHelper } from "@/helpers/primitive.helper";
import type { Ref } from "vue";
import type { ProfileUpdateProps } from "./ProfileUpdateComponent";
import type { OrganizationModel } from "@/models/organization.model";

const props = defineProps<ProfileUpdateProps>();

const app = defineClassComponent(
  class Component extends BaseComponent {
    public addressArray = ["Ha Noi", "Ho Chi Minh", "Hai Phong"];
    public typeArray = [
      { id: 1, value: "B", text: "Type B" },
      { id: 2, value: "C", text: "Type C" },
      { id: 3, value: "E", text: "Type E" },
    ];
    public profile: Ref<OrganizationModel> = this.ref(props.profile);
    public organizationName: Ref<string> = this.ref(this.profile.value.name);
    public organizationEmail: Ref<string> = this.ref(this.profile.value.email);
    public phoneNumber: Ref<string> = this.ref(this.profile.value.phone_number);
    public webside: Ref<string> = this.ref(this.profile.value.webside);
    public address: Ref<string> = this.ref(this.profile.value.adress);
    public introduction: Ref<string> = this.ref(this.profile.value.introduction);
    public organizationType: Ref<string> = this.ref(this.profile.value.organizationType);
    public newEmail: Ref<string> = this.ref("");
    public currentPassword: Ref<string> = this.ref("");
    public newPassword: Ref<string> = this.ref("");
    public confirmNewPassword: Ref<string> = this.ref("");
    public errorName: Ref<string> = this.ref("");
    public errorEmail: Ref<string> = this.ref("");
    public errorPhoneNumber: Ref<string> = this.ref("");
    public errorNewEmail: Ref<string> = this.ref("");
    public errorCurrentPassword: Ref<string> = this.ref("");
    public errorNewPassword: Ref<string> = this.ref("");
    public errorConfirmNewPassword: Ref<string> = this.ref("");
    public language: Ref<string> = this.ref(this.i18n.locale.value);
    public isConfirmDelete: Ref<boolean> = this.ref(false);

    public constructor() {
      super();
    }

    public onSelectAccountType = (accountType: string) => {
      this.organizationType.value = accountType;
    };

    public onUpdateInfomation = () => {
      if (!this.organizationName.value) {
        this.errorName.value = this.t(`message.errorName`);
      } else {
        this.errorName.value = "";
      }
      if (!this.organizationEmail.value || !PrimitiveHelper.isValidEmail(this.organizationEmail.value)) {
        this.errorEmail.value = this.t(`message.errorEmail`);
      } else {
        this.errorEmail.value = "";
      }
      if (!this.phoneNumber.value || !PrimitiveHelper.isValidPhoneNumber(this.phoneNumber.value)) {
        this.errorPhoneNumber.value = this.t(`message.errorPhoneNumber`);
      } else {
        this.errorPhoneNumber.value = "";
      }
      console.log(this.organizationName.value);
      console.log(this.organizationEmail.value);
      console.log(this.phoneNumber.value);
      console.log(this.webside.value);
      console.log(this.address.value);
      console.log(this.introduction.value);
      console.log(this.organizationType.value);
    };

    public onUpdateEmail = () => {
      if (!this.newEmail.value || !PrimitiveHelper.isValidEmail(this.newEmail.value)) {
        this.errorNewEmail.value = this.t(`message.errorEmail`);
      } else {
        this.errorNewEmail.value = "";
      }
      console.log(this.newEmail.value);
    };

    public onUpdatePassword = () => {
      if (!this.currentPassword.value || !PrimitiveHelper.isValidPassword(this.currentPassword.value)) {
        this.errorCurrentPassword.value = this.t(`message.errorPassword`);
      } else {
        this.errorCurrentPassword.value = "";
      }
      if (!this.newPassword.value || !PrimitiveHelper.isValidPassword(this.newPassword.value)) {
        this.errorNewPassword.value = this.t(`message.errorPassword`);
      } else {
        this.errorNewPassword.value = "";
      }
      if (!this.confirmNewPassword.value || !PrimitiveHelper.isValidPassword(this.confirmNewPassword.value)) {
        this.errorConfirmNewPassword.value = this.t(`message.errorConfirmPassword`);
      } else if (this.confirmNewPassword.value !== this.newPassword.value) {
        this.errorConfirmNewPassword.value = this.t(`message.errorConfirmPassword`);
      } else {
        this.errorConfirmNewPassword.value = "";
      }
      console.log(this.currentPassword.value);
      console.log(this.newPassword.value);
      console.log(this.confirmNewPassword.value);
    };

    public onUpdateLanguage = () => {
      this.i18n.locale.value = this.language.value;
      console.log(this.t(`lang`));
    };

    public onToggleDeleteAccount = () => {
      console.log(this.isConfirmDelete.value);
    };

    public focusName = () => {
      if (this.errorName.value) {
        this.errorName.value = "";
        this.organizationName.value = "";
      }
    };

    public focusEmail = () => {
      if (this.errorEmail.value) {
        this.errorEmail.value = "";
        this.organizationEmail.value = "";
      }
    };

    public focusPhoneNumber = () => {
      if (this.errorPhoneNumber.value) {
        this.errorPhoneNumber.value = "";
        this.phoneNumber.value = "";
      }
    };

    public focusCurrentPassword = () => {
      if (this.errorCurrentPassword.value) {
        this.errorCurrentPassword.value = "";
        this.currentPassword.value = "";
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
@import "@/assets/scss/admin";

.profile-update-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;

  & .custom-card {
    margin-bottom: 1.5rem;

    & .custom-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.5rem;
      padding: 1rem 1.3125rem;
      border-bottom: 0.0625rem solid $border;

      & .card-title {
        font-size: 1rem;
        font-weight: 600;
        line-height: 1.2;
        color: $dark;
      }
    }

    & .custom-body {
      padding: 1.3125rem 1.3125rem;

      & .card-text {
        margin-bottom: 1rem;
        font-size: 0.875rem;
      }

      & .form-group {
        display: flex;
        align-items: center;
        margin-bottom: 1.5rem;

        & .input-label {
          flex: 3;
          display: block;
          font-size: 0.875rem;
          padding: 0.6125rem 1rem;

          & .input-label-secondary {
            color: $danger;
          }
        }

        & .custom-input-group {
          flex: 9;

          & .group-check {
            display: flex;
            align-items: center;
          }

          & label.input-form {
            cursor: pointer;
          }

          & .input-form {
            display: block;
            width: 100%;
            padding: 0.6125rem 1rem;
            font-size: 0.875rem;
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
              border-color: rgba($blue, 0.6);
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

        & .custom-check {
          display: flex;
          align-items: center;

          & .custom-check-input {
            width: 0.75rem;
            height: 0.75rem;
            border: 1px solid rgba($border, 0.7);
            margin-right: 0.5rem;
            cursor: pointer;

            &:checked {
              background-color: $blue;
              border-color: $blue;
            }
          }

          & .custom-check-label {
            font-size: 0.875rem;
            cursor: pointer;
          }
        }

        & .input-required {
          width: 70%;
          margin-left: auto;
          font-size: 0.8125rem;

          & .title {
            font-size: 0.875rem;
            font-weight: 600;
          }
        }
      }

      & .delete-btn {
        color: $white;
        background-color: $danger;
        border-color: $danger;

        &:hover {
          background-color: $danger;
          border-color: $danger;
          box-shadow: 0 4px 11px rgba($danger, 0.36);
        }
      }

      & .font-weight-bold {
        font-weight: 600;
      }
    }
  }
}
</style>
