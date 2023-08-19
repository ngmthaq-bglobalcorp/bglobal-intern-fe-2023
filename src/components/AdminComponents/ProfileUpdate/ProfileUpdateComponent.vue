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
        <div class="success-message" v-if="props.messageInfoUpdateSuccess">
          {{ props.messageInfoUpdateSuccess }}
        </div>
        <div class="fail-message" v-if="props.messageInfoUpdateFailed">
          {{ props.messageInfoUpdateFailed }}
        </div>
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
                v-model="app.name.value"
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
                v-model="app.email.value"
                @click="app.onToggleEmail"
                readonly
              />

              <div class="invalid-feedback" v-if="app.errorEmail.value">{{ app.errorEmail.value }}</div>
            </div>
          </div>
          <!-- End Form Group -->

          <!-- Form Group -->
          <div class="form-group">
            <label class="input-label" for="phoneNumber">
              {{ app.t(`app.phoneNumber`) }}
              <span class="input-label-secondary">*</span>
            </label>

            <div class="custom-input-group">
              <input
                type="text"
                :class="['input-form', { 'is-invalid': app.errorPhoneNumber.value }]"
                name="phoneNumber"
                id="phoneNumber"
                :placeholder="app.t(`app.phoneNumber`)"
                v-model="app.phoneNumber.value"
                @focus="app.focusPhoneNumber"
              />
            </div>
          </div>
          <!-- End Form Group -->

          <!-- Form Group -->
          <div class="form-group">
            <label class="input-label" for="website">{{ app.t(`app.website`) }}</label>

            <div class="custom-input-group">
              <input
                type="text"
                class="input-form"
                name="website"
                id="website"
                :placeholder="app.t(`app.website`)"
                v-model="app.website.value"
              />
            </div>
          </div>
          <!-- End Form Group -->

          <!-- Form Group -->
          <div class="form-group">
            <label class="input-label" for="address">
              {{ app.t(`app.address`) }}
              <span class="input-label-secondary">*</span>
            </label>

            <div class="custom-input-group">
              <input
                type="text"
                :class="['input-form', { 'is-invalid': app.errorAddress.value }]"
                name="address"
                id="address"
                :placeholder="app.t(`app.address`)"
                v-model="app.address.value"
                @focus="app.focusAddress"
              />
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
                  :for="accountType"
                  v-for="accountType in app.typeArray.value"
                  :key="accountType"
                  @click="app.onSelectAccountType(accountType)"
                >
                  <span class="custom-check">
                    <input
                      type="radio"
                      class="custom-check-input"
                      name="userAccountTypeRadio"
                      :id="accountType"
                      :checked="accountType === app.organizationType.value"
                    />
                    <span class="custom-check-label">{{ `Type ${accountType}` }}</span>
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
          {{ app.t(`app.currentEmail`) }}<span class="font-weight-bold">{{ app.email.value }}</span>
        </div>

        <!-- Form -->
        <div class="success-message" v-if="props.messageEmailUpdateSuccess">
          {{ props.messageEmailUpdateSuccess }}
        </div>
        <div class="fail-message" v-if="props.messageEmailUpdateFailed">
          {{ props.messageEmailUpdateFailed }}
        </div>
        <form id="changeEmailForm" action="" @submit.prevent="app.onUpdateEmail">
          <!-- Form Group -->
          <div class="form-group">
            <label class="input-label" for="newOrganizationEmail">{{ app.t(`app.newEmail`) }}</label>

            <div class="custom-input-group">
              <input
                type="text"
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
        <div class="success-message" v-if="props.messagePasswordUpdateSuccess">
          {{ props.messagePasswordUpdateSuccess }}
        </div>
        <div class="fail-message" v-if="props.messagePasswordUpdateFailed">
          {{ props.messagePasswordUpdateFailed }}
        </div>
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
                <li v-for="requirement in app.requirementsArray.value" :key="requirement">
                  {{ app.t(`app.requirements.${requirement}`) }}
                </li>
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
    <div id="deleteAccountSection" class="custom-card" v-if="app.isDisplayed.value">
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
import { AppConst } from "@/const/app.const";
import { LangConst } from "@/const/lang.const";
import { ValidateHelper } from "@/helpers/validate.helper";
import type { ProfileUpdateEmits, ProfileUpdateProps } from "./ProfileUpdateComponent";
import type { Ref } from "vue";
import type { OrganizationModel } from "@/models/organization.model";

const props = defineProps<ProfileUpdateProps>();
const emits = defineEmits<ProfileUpdateEmits>();

const app = defineClassComponent(
  class Component extends BaseComponent {
    public profile: Ref<OrganizationModel> = this.computed(() => props.profile);

    public isDisplayed: Ref<boolean> = this.ref(false);
    public typeArray: Ref<Array<string>> = this.ref(Object.values(AppConst.ORGANIZATION_TYPE));
    public requirementsArray: Ref<Array<string>> = this.ref(Object.keys(this.i18n.tm(`app.requirements`)));
    public newEmail: Ref<string> = this.ref("");
    public currentPassword: Ref<string> = this.ref("");
    public newPassword: Ref<string> = this.ref("");
    public confirmNewPassword: Ref<string> = this.ref("");
    public errorName: Ref<string> = this.ref("");
    public errorEmail: Ref<string> = this.ref("");
    public errorPhoneNumber: Ref<string> = this.ref("");
    public errorAddress: Ref<string> = this.ref("");
    public errorNewEmail: Ref<string> = this.ref("");
    public errorCurrentPassword: Ref<string> = this.ref("");
    public errorNewPassword: Ref<string> = this.ref("");
    public errorConfirmNewPassword: Ref<string> = this.ref("");
    public language: Ref<string> = this.ref(this.i18n.locale.value);
    public isConfirmDelete: Ref<boolean> = this.ref(false);
    public name: Ref<string> = this.ref(this.profile.value.name);
    public email: Ref<string> = this.ref(this.profile.value.email);
    public phoneNumber: Ref<string> = this.ref(this.profile.value.phoneNumber);
    public website: Ref<string> = this.ref(this.profile.value.website);
    public address: Ref<string> = this.ref(this.profile.value.address);
    public introduction: Ref<string> = this.ref(this.profile.value.introduction);
    public organizationType: Ref<string> = this.ref(this.profile.value.organizationType);

    public constructor() {
      super();

      this.watch([() => this.profile.value, () => this.profile.value.email], ([profile, email]) => {
        this.name.value = profile.name;
        this.email.value = email;
        this.phoneNumber.value = profile.phoneNumber;
        this.website.value = profile.website;
        this.address.value = profile.address;
        this.introduction.value = profile.introduction;
        this.organizationType.value = profile.organizationType;
      });

      this.watch([() => props.messageEmailUpdateSuccess, () => props.messageEmailUpdateFailed], ([success, failed]) => {
        if (success || failed) {
          this.newEmail.value = "";
        }
      });

      this.watch(
        [() => props.messagePasswordUpdateSuccess, () => props.messagePasswordUpdateFailed],
        ([success, failed]) => {
          if (success || failed) {
            this.currentPassword.value = "";
            this.newPassword.value = "";
            this.confirmNewPassword.value = "";
          }
        },
      );
    }

    public onToggleEmail = () => {
      const element = document.getElementById("emailSection");
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

    public onSelectAccountType = (accountType: string) => {
      this.organizationType.value = accountType;
    };

    public onUpdateInfomation = () => {
      let isValidInput = true;
      if (!this.name.value) {
        this.errorName.value = this.t(`message.errorName`);
        isValidInput = false;
      } else {
        this.errorName.value = "";
      }
      if (!this.email.value || !ValidateHelper.isValidEmail(this.email.value)) {
        isValidInput = false;
        this.errorEmail.value = this.t(`message.errorEmail`);
      } else {
        this.errorEmail.value = "";
      }
      if (!this.phoneNumber.value || !ValidateHelper.isValidPhoneNumber(this.phoneNumber.value)) {
        isValidInput = false;
        this.errorPhoneNumber.value = this.t(`message.errorPhoneNumber`);
      } else {
        this.errorPhoneNumber.value = "";
      }
      if (!this.address.value) {
        this.errorAddress.value = this.t("message.errorAddress");
        isValidInput = false;
      } else {
        this.errorAddress.value = "";
      }

      if (isValidInput) {
        const data = {
          name: this.name.value,
          email: this.email.value,
          phoneNumber: this.phoneNumber.value,
          website: this.website.value,
          address: this.address.value,
          introduction: this.introduction.value,
          organizationType: this.organizationType.value,
        };
        emits("onUpdateInfomation", data);
      }
    };

    public onUpdateEmail = () => {
      let isValidInput = true;
      if (!this.newEmail.value || !ValidateHelper.isValidEmail(this.newEmail.value)) {
        isValidInput = false;
        this.errorNewEmail.value = this.t(`message.errorEmail`);
      } else {
        this.errorNewEmail.value = "";
      }
      if (isValidInput) {
        emits("onUpdateEmail", this.newEmail.value);
      }
    };

    public onUpdatePassword = () => {
      let isValidInput = true;
      ValidateHelper.checkValidPassword(this.currentPassword.value).forEach((value) => {
        this.errorCurrentPassword.value += this.t(value);
      });
      ValidateHelper.checkValidPassword(this.newPassword.value).forEach((value) => {
        this.errorNewPassword.value += this.t(value);
      });
      if (this.errorCurrentPassword.value || this.errorNewPassword.value) {
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
          currentPassword: this.currentPassword.value,
          newPassword: this.newPassword.value,
        };
        emits("onUpdatePassword", data);
      }
    };

    public onUpdateLanguage = () => {
      emits("onUpdateLanguage", this.language.value);
    };

    public onToggleDeleteAccount = () => {
      if (this.isConfirmDelete.value) {
        emits("onToggleDeleteAccount");
      }
    };

    public focusName = () => {
      if (this.errorName.value) {
        this.errorName.value = "";
      }
    };

    public focusEmail = () => {
      if (this.errorEmail.value) {
        this.errorEmail.value = "";
      }
    };

    public focusPhoneNumber = () => {
      if (this.errorPhoneNumber.value) {
        this.errorPhoneNumber.value = "";
      }
    };

    public focusAddress = () => {
      if (this.errorAddress.value) {
        this.errorAddress.value = "";
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

      & .success-message,
      & .fail-message {
        width: 100%;
        display: block;
        text-align: center;
        margin-top: 0.5rem;
        margin-bottom: 1.5rem;
      }

      & .success-message {
        color: $success;
      }

      & .fail-message {
        color: $danger;
      }

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
            white-space: pre-line;
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
