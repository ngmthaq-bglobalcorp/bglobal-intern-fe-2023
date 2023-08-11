import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUpdated, onUnmounted } from "vue";
import { useRouter, useRoute, onBeforeRouteLeave, onBeforeRouteUpdate } from "vue-router";
import { useI18n } from "vue-i18n";
import { AppConst } from "@/const/app.const";
import { KeyConst } from "@/const/key.const";
import { PathConst } from "@/const/path.const";
import { useCommonStore } from "@/stores/common.store";
import { Vue } from "./vue.plugin";
import { GlobalEvent } from "./event.plugin";
import { SearchParams } from "./params.plugin";
import { StorageHelper } from "@/helpers/storage.helper";

export abstract class BaseComponent extends Vue {
  public readonly router = useRouter();
  public readonly route = useRoute();
  public readonly commonStore = useCommonStore();
  public readonly searchParams = new SearchParams();
  public readonly i18n = useI18n();
  public readonly t = this.i18n.t;
  public readonly onBeforeMount = onBeforeMount;
  public readonly onMounted = onMounted;
  public readonly onBeforeUpdate = onBeforeUpdate;
  public readonly onUpdated = onUpdated;
  public readonly onBeforeUnmount = onBeforeUnmount;
  public readonly onUnmounted = onUnmounted;
  public readonly onBeforeRouteLeave = onBeforeRouteLeave;
  public readonly onBeforeRouteUpdate = onBeforeRouteUpdate;

  public constructor() {
    super();

    this.router.afterEach((to) => {
      if (to.meta.title) {
        document.title = this.t(to.meta.title as any);
      } else {
        document.title = "";
      }
    });

    this.router.beforeEach((to, next) => {
      const user: any = StorageHelper.getLocalStorage(KeyConst.keys.currentUser);
      if (to.meta.auth === AppConst.ROLE.guest) {
        if (window.location.href.includes("/admin") && user) {
          this.router.push(PathConst.adminDashboard);
        } else if (user) {
          window.location.assign("/");
        } else {
          next;
        }
      } else {
        if (window.location.href.includes("/admin") && !user) {
          this.router.push(PathConst.adminSignin);
        } else if (!user) {
          window.location.replace("/signin");
        } else if (!user.role.includes(to.meta.auth) && to.meta.auth != AppConst.ROLE.all) {
          console.log("Don't have permission");
        } else {
          next;
        }
      }
    });
  }
}

export function defineClassComponent<C extends BaseComponent>(component: new () => C): C {
  return new component();
}

export function onError(error: any) {
  GlobalEvent.emit(AppConst.EVENTS.internalError, null);
}
