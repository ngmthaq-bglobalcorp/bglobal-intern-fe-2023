<template>
  <!-- Card -->
  <div class="form-data-container custom-card">
    <div class="custom-header">
      <h2 class="card-title">{{ props.target }}</h2>
    </div>

    <!-- Body -->
    <div class="custom-body">
      <!-- Form -->
      <form action="">
        <template v-for="group in props.input" :key="group.id">
          <!-- Form Group -->
          <div class="form-group-wrapper" v-if="group.type === 'group'">
            <div class="form-group" v-for="input in group.children" :key="input.id">
              <!-- Image Input -->
              <template v-if="input.type === 'image'">
                <label class="input-label">
                  {{ input.label }}
                  <span class="input-label-secondary" v-if="input.required">*</span>
                </label>

                <div class="custom-input-group">
                  <div class="input-image" v-for="image of input.model" :key="image">
                    <img :src="image" :alt="input.label" class="image" v-if="image" />
                    <button class="delete-btn" @click.prevent="app.onToggleDeleteImage(input, image)">
                      <i class="bi bi-x-circle"></i>
                    </button>
                  </div>
                  <label class="image-uploader" :for="input.name">
                    <div class="input-image">
                      <i class="bi bi-camera icon"></i>
                    </div>
                    <input
                      type="file"
                      :name="input.name"
                      :id="input.name"
                      class="custom-image-input"
                      :multiple="input.multiple"
                      @change="(e) => app.onChangeImages(e, input)"
                    />
                  </label>
                </div>
              </template>
              <!-- End Image Input -->

              <!-- Radio Input -->
              <template v-else-if="input.type === 'radio'">
                <label class="input-label">
                  {{ input.label }}
                  <span class="input-label-secondary" v-if="input.required">*</span>
                </label>

                <div class="custom-input-group">
                  <div class="group-check">
                    <!-- Custom Radio -->
                    <label
                      class="input-form"
                      :for="`radio${child.value}`"
                      v-for="child in input.children"
                      :key="child.id"
                      @click="input.model = child.value"
                    >
                      <img :src="child.image" :alt="child.alt" class="input-img image" v-if="child.image" />
                      <span class="custom-check">
                        <input
                          type="radio"
                          class="custom-check-input"
                          :name="`radio${child.value}`"
                          :id="`radio${child.value}`"
                          :checked="child.value === input.model"
                        />
                        <span class="custom-check-label">{{ child.text }}</span>
                      </span>
                    </label>
                    <!-- End Custom Radio -->
                  </div>
                </div>
              </template>
              <!-- End Radio Input -->

              <!-- Select Input -->
              <template v-else-if="input.type === 'select'">
                <label class="input-label" :for="input.name">
                  {{ input.label }}
                  <span class="input-label-secondary" v-if="input.required">*</span>
                </label>

                <div class="custom-input-group">
                  <!-- Custom Select -->
                  <select :class="['input-form', { 'is-invalid': input.error }]" :id="input.name" v-model="input.model">
                    <option
                      :value="option.value"
                      :selected="option.value === input.model"
                      v-for="option in input.children"
                      :key="option.id"
                    >
                      {{ option.text }}
                    </option>
                  </select>

                  <div class="invalid-feedback" v-if="input.error">{{ input.error }}</div>
                  <!-- End Custom Select -->
                </div>
              </template>
              <!-- Select Input -->

              <!-- Select Multiple Input -->
              <template v-else-if="input.type === 'selectMultiple'">
                <label class="input-label" :for="input.name">
                  {{ input.label }}
                  <span class="input-label-secondary" v-if="input.required">*</span>
                </label>

                <div class="custom-input-group">
                  <!-- Custom Select Multiple -->
                  <ul class="input-multiple list">
                    <li
                      :class="['input-item', { active: input.model.includes(child.value) }]"
                      v-for="child in input.children"
                      :key="child.id"
                      @click.prevent="app.onToggleSelectMultiple(input, child.value)"
                    >
                      {{ child.text }}
                    </li>
                  </ul>
                  <!-- End Custom Select Multiple -->
                </div>
              </template>
              <!-- End Select Multiple Input -->

              <!-- Text Multiple Input -->
              <template v-else-if="input.type === 'inputMultiple'">
                <label class="input-label" :for="input.name">
                  {{ input.label }}
                  <span class="input-label-secondary" v-if="input.required">*</span>
                </label>

                <div class="custom-input-group">
                  <!-- Custom Input -->
                  <template v-for="child in input.children" :key="child.id">
                    <textarea
                      v-if="child.type === 'textarea'"
                      :class="['input-form', { 'is-invalid': child.error }]"
                      :name="input.name + child.name"
                      :id="input.name"
                      v-model="child.model"
                      @focus="app.onFocusInputText(child)"
                    ></textarea>
                    <input
                      v-else
                      :type="child.type"
                      :class="['input-form', { 'is-invalid': child.error }]"
                      :name="input.name + child.name"
                      :id="input.name"
                      :placeholder="child.placeholder"
                      v-model="child.model"
                      @focus="app.onFocusInputText(child)"
                    />

                    <div class="invalid-feedback" v-if="child.error">{{ child.error }}</div>
                  </template>

                  <button class="add-btn small-btn" @click.prevent="app.onToggleAddButton(input)">
                    <i class="bi bi-plus icon"></i>
                    {{ app.t(`app.add`, { value: `` }) }}
                  </button>
                  <!-- End Custom Input -->
                </div>

                <ul class="input-text list" v-if="input.model.length > 0">
                  <li class="input-text-item" v-for="item in input.model" :key="item">
                    <span class="title" v-if="item.title">[{{ item.title }}]</span>
                    <div class="body" v-if="item.body">
                      <i class="bi bi-star icon"></i>
                      {{ item.body }}
                    </div>
                  </li>
                </ul>
              </template>
              <!-- Text Multiple Input -->

              <!-- Text Input -->
              <template v-else>
                <label class="input-label" :for="input.name">
                  {{ input.label }}
                  <span class="input-label-secondary" v-if="input.required">*</span>
                </label>

                <div class="custom-input-group">
                  <!-- Custom Input -->
                  <textarea
                    v-if="input.type === 'textarea'"
                    :class="['input-form', { 'is-invalid': input.error }]"
                    :name="input.name"
                    :id="input.name"
                    v-model="input.model"
                    @focus="app.onFocusInputText(input)"
                  ></textarea>
                  <input
                    v-else
                    :type="input.type"
                    :class="['input-form', { 'is-invalid': input.error }]"
                    :name="input.name"
                    :id="input.name"
                    :placeholder="input.placeholder"
                    v-model="input.model"
                    @focus="app.onFocusInputText(input)"
                  />

                  <div class="invalid-feedback" v-if="input.error">{{ input.error }}</div>
                  <!-- End Custom Input -->
                </div>
              </template>
              <!-- Text Input -->
            </div>
          </div>
          <!-- End Form Group -->
        </template>

        <div class="d-flex justify-content-end">
          <button type="submit" class="small-btn primary-btn" @click.prevent="app.onSubmitForm">
            {{ app.t(`app.saveChanges`) }}
          </button>
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
import type { FormDataEmits, FormDataProps } from "./FormDataComponent";

const props = defineProps<FormDataProps>();
const emit = defineEmits<FormDataEmits>();

const app = defineClassComponent(
  class Component extends BaseComponent {
    public constructor() {
      super();
    }

    public onChangeImages = (e: any, input: any) => {
      const files = e.target.files;
      if (files.length) {
        if (input.multiple) {
          for (let file of files) {
            input.model.push(URL.createObjectURL(file));
          }
        } else {
          input.model = [];
          input.model.push(URL.createObjectURL(files[0]));
        }
      }
    };

    public onToggleDeleteImage = (input: any, image: string) => {
      input.model = input.model.filter((value: string) => value != image);
    };

    public onToggleSelectMultiple = (input: any, label: string) => {
      if (input.model.includes(label)) {
        input.model = input.model.filter((value: string) => value != label);
      } else {
        input.model.push(label);
      }
    };

    public onToggleAddButton = (input: any) => {
      let inputObj = {};
      let isValidInput = input.children.every((value: any) => {
        if (value.required && !value.model) {
          value.error = this.t(`app.notBlank`, { value: value.label });
          return false;
        } else {
          inputObj = {
            ...inputObj,
            [value.name]: value.model,
          };
          return true;
        }
      });
      if (isValidInput) {
        input.model.push(inputObj);
        input.children.forEach((value: any) => {
          value.model = "";
        });
      }
    };

    public onFocusInputText = (input: any) => {
      input.error = "";
    };

    public onSubmitForm = () => {
      let data: any = {};
      let isValidInput = true;
      props.input.map((input: any) => {
        input.children.map((value: any) => {
          if (value.required && !value.model) {
            value.error = this.t(`app.notBlank`, { value: value.label });
            isValidInput = false;
          } else {
            if (value.type === "date") {
              data = {
                ...data,
                [value.name]: new Date(value.model),
              };
            } else {
              data = {
                ...data,
                [value.name]: value.model,
              };
            }
          }
        });
      });
      if (isValidInput) {
        emit("onSubmitForm", data);
      }
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
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.5rem;

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

          & .input-image {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 6rem;
            height: 6rem;
            background-color: transparent;

            &:hover {
              & .delete-btn {
                display: block;
              }
            }

            & .image {
              border: 0.0625rem solid rgba($border, 0.3);
            }

            & .delete-btn {
              display: none;
              position: absolute;
              top: 0;
              right: 0;
              border: none;
              outline: none;
              background-color: transparent;

              &:hover {
                color: $blue;
              }
            }
          }

          & .image-uploader {
            display: block;
            cursor: pointer;

            & .input-image {
              background-color: $light;
              border: 0.0625rem solid rgba($border, 0.3);
              border-radius: 0.5rem;

              &:hover {
                & .icon {
                  color: $blue;
                }
              }

              & .icon {
                font-size: 2rem;
                color: $dark;
              }
            }

            & .custom-image-input {
              display: none;
            }
          }

          & .group-check {
            width: 100%;
            display: flex;
            align-items: center;

            & label.input-form {
              text-align: center;
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

          & .input-multiple {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;

            & .input-item {
              color: $blue-light;
              font-size: 0.8125rem;
              border: 0.0625rem solid $blue-light;
              border-radius: 100rem;
              padding: 0.25rem 1rem;
              transition: all 0.3s;
              cursor: pointer;

              &.active {
                color: $white;
                background-color: $blue-light;
              }
            }
          }

          & .add-btn {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: $dark;
            background-color: transparent;
            padding: 0.5rem 1rem;

            &:hover {
              color: $white;
              background-color: $blue-light;
              border-color: $blue-light;
            }

            & .icon {
              font-weight: 600;
              margin-right: 0.25rem;
            }
          }
        }

        & .input-text {
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;
          margin-top: 1rem;

          & .input-text-item {
            display: flex;
            flex-direction: column;
            margin-bottom: 0.5rem;

            & .title {
              font-weight: 600;
              margin-bottom: 0.25rem;
            }

            & .body {
              display: flex;
              align-items: start;

              & .icon {
                font-size: 1rem;
                margin-right: 0.5rem;
              }
            }
          }
        }
      }
    }
  }
}
</style>
