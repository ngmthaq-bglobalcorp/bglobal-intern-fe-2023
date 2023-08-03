<template>
  <!-- Card -->
  <div class="form-data-container custom-card">
    <div class="custom-header">
      <h2 class="card-title">{{ app.t(`app.add`, { value: `news` }) }}</h2>
    </div>

    <!-- Body -->
    <div class="custom-body">
      <!-- Form -->
      <form action="" @submit.prevent="app.onSubmitForm">
        <template v-for="group in props.input" :key="group.id">
          <!-- Form Group -->
          <div class="form-group-wrapper" v-if="group.type === 'group'">
            <div class="form-group" v-for="input in group.children" :key="input.id">
              <label class="input-label" :for="input.name">
                {{ input.label }}
                <span class="input-label-secondary" v-if="input.required">*</span>
              </label>

              <div class="custom-input-group">
                <textarea
                  v-if="input.type === 'textarea'"
                  class="input-form"
                  :name="input.name"
                  :id="input.name"
                  v-model="input.model"
                ></textarea>
                <input
                  v-else
                  :type="input.type"
                  :class="['input-form', { 'is-invalid': input.error }]"
                  :name="input.name"
                  :id="input.name"
                  :placeholder="input.placeholder"
                  v-model="input.model"
                />

                <div class="invalid-feedback" v-if="input.error">{{ input.error }}</div>
              </div>
            </div>
          </div>
          <!-- End Form Group -->

          <!-- Form Group -->
          <div class="form-group-wrapper" v-if="group.type === 'radio-select'">
            <div class="form-group">
              <label class="input-label">{{ group.label }}</label>

              <div class="custom-input-group">
                <div class="group-check">
                  <!-- Custom Radio -->
                  <label
                    class="input-form"
                    :for="`radio${input.value}`"
                    v-for="input in group.children"
                    :key="input.id"
                    @click="group.model = input.value"
                  >
                    <img :src="input.image" :alt="input.alt" class="input-img image" v-if="input.image" />
                    <span class="custom-check">
                      <input
                        type="radio"
                        class="custom-check-input"
                        :name="`radio${input.value}`"
                        :id="`radio${input.value}`"
                        :checked="input.value === group.model"
                      />
                      <span class="custom-check-label">{{ input.text }}</span>
                    </span>
                  </label>
                  <!-- End Custom Radio -->
                </div>
              </div>
            </div>
          </div>
          <!-- End Form Group -->

          <!-- Form Group -->
          <div class="form-group-wrapper" v-if="group.type === 'option-select'">
            <div class="form-group">
              <label class="input-label" :for="group.name">{{ group.label }}</label>

              <div class="custom-input-group">
                <!-- Select Address -->
                <select class="input-form" :id="group.name" v-model="group.model">
                  <option
                    :value="option.value"
                    :selected="option.value === group.model"
                    v-for="option in group.children"
                    :key="option.id"
                  >
                    {{ option.text }}
                  </option>
                </select>
                <!-- End Select Address -->
              </div>
            </div>
          </div>
          <!-- End Form Group -->
        </template>

        <div class="d-flex justify-content-end">
          <button type="submit" class="small-btn primary-btn">{{ app.t(`app.saveChanges`) }}</button>
        </div>
      </form>
      <!-- End Form -->
    </div>
    <!-- End Body -->
  </div>
  <!-- End Card -->
</template>

<script setup lang="ts">
import { BaseComponent, defineClassComponent } from "@/plugins/component.plugin";
import type { Ref } from "vue";
import type { FormDataEmits, FormDataProps } from "./FormDataComponent";

const props = defineProps<FormDataProps>();
const emit = defineEmits<FormDataEmits>();

const app = defineClassComponent(
  class Component extends BaseComponent {
    public constructor() {
      super();
    }

    public onSubmitForm = () => {
      emit("onSubmitForm");
    };
  },
);
</script>

<style scoped lang="scss">
@import "@/assets/scss/modules";
@import "@/assets/scss/admin";

.form-data-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;

  & .custom-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    padding: 1rem 2.5rem;
    border-bottom: 0.0625rem solid $border;

    & .card-title {
      font-size: 1rem;
      font-weight: 600;
      line-height: 1.2;
      color: $dark;
    }
  }

  & .custom-body {
    padding: 2.5rem;

    & .form-group-wrapper {
      width: 100%;
      display: flex;
      margin-bottom: 1.5rem;

      & .form-group {
        flex: 1 1 0%;
        display: flex;
        flex-direction: column;

        & .input-label {
          display: block;
          font-size: 0.875rem;
          margin-bottom: 0.5rem;

          & .input-label-secondary {
            color: $danger;
          }
        }

        & .custom-input-group {
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
              opacity: 0.7;
            }

            &:focus {
              color: $dark;
              background-color: $white;
              outline: 0;
              border-color: rgba($blue, 0.6);
              box-shadow: 0 0 10px rgba(55, 125, 255, 0.1);
            }

            &.is-invalid,
            &.is-invalid:focus {
              border-color: $danger;
              box-shadow: 0 0 10px rgba(237, 76, 120, 0.1);
            }

            &.is-valid,
            &.is-valid:focus {
              border-color: $success;
              box-shadow: 0 0 10px rgba(0, 201, 167, 0.1);
            }
          }

          & .invalid-feedback {
            display: block;
            width: 100%;
            margin-top: 0.25rem;
            font-size: 80%;
            color: $danger;
          }

          & .group-check {
            display: flex;
            align-items: center;

            & label.input-form {
              cursor: pointer;

              & .input-img {
                width: 6rem;
                height: 6rem;
                margin-left: auto;
                margin-right: auto;
                margin-bottom: 1.5rem;

                ~ .custom-check {
                  justify-content: center;
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
                }
              }
            }
          }

          & .custom-check-input:checked ~ .input-form {
            border-color: $success;
            box-shadow: 0 0 10px rgba(0, 201, 167, 0.1);
          }
        }
      }
    }
  }
}
</style>
