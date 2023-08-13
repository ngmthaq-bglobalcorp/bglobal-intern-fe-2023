import { AppConst } from "@/const/app.const";
import { BaseModel } from "./base.model";

export class UserModel extends BaseModel implements IUser {
  public id: number;
  public name: string;
  public username: string;
  public avatar: string;
  public email: string;
  public role: string;

  public constructor(data: any) {
    super();
    this.id = data.id || -1;
    this.name = data.name || "";
    this.username = data.username || "";
    this.avatar = data.avatar || "";
    this.email = data.email || "";
    this.role = data.role || AppConst.ROLE.guest;
  }
}

export interface IUser {
  id: number;
  name: string;
  username: string;
  avatar: string;
  email: string;
  role: string;
}
