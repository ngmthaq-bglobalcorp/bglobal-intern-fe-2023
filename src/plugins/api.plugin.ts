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
    configs.headers.append("Content-Type", " application/json");
    return configs;
  }

  public async onFailure(response: Response): Promise<Response> {
    if (response.status === ApiConst.status.badRequest) {
      console.log(response);
    }
    if (response.status === ApiConst.status.unauthorized) {
      console.log(response);
      if (!window.location.href.includes("/signin")) {
        // StorageHelper.removeLocalStorage(KeyConst.keys.currentUser);
        // window.location.replace("/admin/signin");
      }
    }
    if (response.status === ApiConst.status.forbidden) {
      console.log(response);
      // window.location.assign("/admin");
    }
    return response;
  }
}
