import { Fetch, type HttpRequestInit } from "./fetch.plugin";
import { ApiConst } from "@/const/api.const";
import { KeyConst } from "@/const/key.const";
import { StorageHelper } from "@/helpers/storage.helper";

export class Api extends Fetch {
  public onBeforeSend(configs: HttpRequestInit): HttpRequestInit {
    const user: any = StorageHelper.getLocalStorage(KeyConst.localKeys.currentUser);
    configs.headers.append("Authorization", `Bearer ${user.token}`);
    configs.headers.append("Content-Type", "application/json");
    return configs;
  }

  public async onFailure(response: Response): Promise<Response> {
    console.log(response);
    if (response.status === ApiConst.status.unauthorized) {
      //window.location.replace("/admin/signin");
    }
    return response;
  }
}
