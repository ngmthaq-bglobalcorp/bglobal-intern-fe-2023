import { Fetch, type HttpRequestInit } from "./fetch.plugin";
import { ApiConst } from "@/const/api.const";
import { KeyConst } from "@/const/key.const";
import { StorageHelper } from "@/helpers/storage.helper";

export class Api extends Fetch {
  public onBeforeSend(configs: HttpRequestInit): HttpRequestInit {
    const user: any = StorageHelper.getLocalStorage(KeyConst.keys.currentUser);
    if (user) {
      configs.headers.append("Authorization", `Bearer ${user.token}`);
    }
    configs.headers.append("Content-Type", "application/json");
    return configs;
  }

  public async onFailure(response: Response): Promise<Response> {
    if (response.status === ApiConst.status.unauthorized) {
      console.log("unauthorized");
      // window.location.replace("/admin/signin");
    }
    if (response.status === ApiConst.status.forbidden) {
      console.log("forbidden");
      window.location.assign("/admin");
    }
    return response;
  }
}
