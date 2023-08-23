import { Fetch, type HttpRequestInit } from "./fetch.plugin";
import { ApiConst } from "@/const/api.const";
import { KeyConst } from "@/const/key.const";
import { PathConst } from "@/const/path.const";
import { StorageHelper } from "@/helpers/storage.helper";

export class Api extends Fetch {
  public onBeforeSend(configs: HttpRequestInit): HttpRequestInit {
    const data: any = StorageHelper.getLocalStorage(KeyConst.keys.currentUser);
    if (data) {
      configs.headers.append("Authorization", `Bearer ${data.token}`);
    }
    return configs;
  }

  public async onFailure(response: Response): Promise<Response> {
    if (response.status === ApiConst.status.unauthorized) {
      if (!window.location.href.includes("/signin")) {
        StorageHelper.removeLocalStorage(KeyConst.keys.currentUser);
        if (window.location.href.includes("/admin")) {
          window.location.replace(PathConst.adminSignin.path);
        } else {
          window.location.replace(PathConst.userSignin.path);
        }
      }
    } else if (response.status === ApiConst.status.forbidden) {
      if (window.location.href.includes("/admin")) {
        window.location.assign(PathConst.adminDashboard.path);
      } else {
        window.location.assign(PathConst.home.path);
      }
    } else if (response.status === ApiConst.status.internalError) {
      // window.location.assign(PathConst.internalError.path);
    }
    return response;
  }
}
