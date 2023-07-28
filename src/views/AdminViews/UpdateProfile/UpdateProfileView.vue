<template>
  <AdminLayout>
    <PageHeader route="settings" />
    <div class="update-profile-container">
      <!-- Navbar -->
      <div class="profile-nav custom-card">
        <!-- Navbar Nav -->
        <ul class="nav-list list">
          <li class="nav-item">
            <a class="nav-link active" href="#content">
              <i class="bi bi-person icon"></i>
              {{ app.t(`app.basicInformation`) }}
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#emailSection">
              <i class="bi bi-envelope icon"></i>
              {{ app.t(`app.email`) }}
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#passwordSection">
              <i class="bi bi-key icon"></i>
              {{ app.t(`app.password`) }}
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#preferencesSection">
              <i class="bi bi-gear icon"></i>
              {{ app.t(`app.preferences`) }}
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#deleteAccountSection">
              <i class="bi bi-trash icon"></i>
              {{ app.t(`app.deleteAccount`) }}
            </a>
          </li>
        </ul>
        <!-- End Navbar Nav -->
      </div>
      <!-- End Navbar -->

      <!-- Content -->
      <div class="profile-content">
        <ProfileHeader :isUpdate="true" />
        <ProfileUpdate :profile="app.profile" />
      </div>
      <!-- End Content -->
    </div>
  </AdminLayout>
</template>

<script setup lang="ts">
import { BaseComponent, defineClassComponent } from "@/plugins/component.plugin";
import AdminLayout from "@/layouts/AdminLayout/AdminLayout.vue";
import PageHeader from "@/components/AdminComponents/PageHeader/PageHeaderComponent.vue";
import ProfileHeader from "@/components/AdminComponents/ProfileHeader/ProfileHeaderComponent.vue";
import ProfileUpdate from "@/components/AdminComponents/ProfileUpdate/ProfileUpdateComponent.vue";
import type { OrganizationModel } from "@/models/organization.model";

const app = defineClassComponent(
  class Component extends BaseComponent {
    public profile: OrganizationModel = {
      id: 1,
      username: "minhduc",
      name: "Minh Duc",
      email: "minhduc.mll@gmail.com",
      phone_number: "0912345678",
      webside: "",
      adress: "Ha Noi",
      introduction:
        "............... ............... ............... ............... ............... ............... ............... ............... ............... ............... ............... ............... ............... ............... ............... ............... ............... ............... ............... ...............",
      organizationType: "B",
      status: 0,
      createdAt: new Date("2023-07-01"),
      updatedAt: new Date("2023-07-01"),
    };

    public constructor() {
      super();
    }
  },
);
</script>

<style scoped lang="scss">
@import "@/assets/scss/modules";
@import "@/assets/scss/admin";

.update-profile-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  & .profile-nav {
    flex: 3;
    margin-bottom: 1.5rem;

    & .nav-list {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding: 1rem;

      & .nav-link {
        padding: 0.5rem 1.5rem;
        margin-top: 1rem;
        margin-bottom: 1rem;
        margin-left: -1rem;
        border-left: 0.1875rem solid transparent;

        & .icon {
          font-size: 1rem;
          margin-right: 0.5rem;
          opacity: 0.7;
        }

        &.active {
          color: $blue;
          border-color: $blue;
        }

        &:hover {
          color: $blue;
        }
      }
    }
  }

  & .profile-content {
    flex: 9;
    margin-left: 1.5rem;
  }
}
</style>
