import { Fetch, type HttpRequestInit } from "./fetch.plugin";
import { ApiConst } from "@/const/api.const";
import { KeyConst } from "@/const/key.const";
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
          window.location.replace("/admin/signin");
        } else {
          window.location.replace("/signin");
        }
      }
    }
    if (response.status === ApiConst.status.forbidden) {
      if (window.location.href.includes("/admin")) {
        window.location.assign("/admin");
      } else {
        window.location.assign("/");
      }
    }
    return response;
  }
}
