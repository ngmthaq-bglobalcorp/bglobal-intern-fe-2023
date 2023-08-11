import { AppConst } from "@/const/app.const";
import { BaseModel } from "./base.model";

export class OrganizationModel extends BaseModel implements IOrganization {
  public id: number;
  public username: string;
  public name: string;
  public email: string;
  public phoneNumber: string;
  public avatar: string;
  public webside: string;
  public address: string;
  public introduction: string;
  public organizationType: string;
  public status: string;
  public createdAt: Date;
  public updatedAt: Date;
  public isSelected: boolean;

  public constructor(data: any) {
    super();
    this.id = data.id || -1;
    this.username = data.username || "";
    this.name = data.name || "";
    this.email = data.email || "";
    this.phoneNumber = data.phoneNumber || "";
    this.avatar = data.avatar || "";
    this.webside = data.webside || "";
    this.address = data.address || "";
    this.introduction = data.introduction || "";
    this.organizationType = data.organizationType || AppConst.ORGANIZATION_TYPE.typeB;
    this.status = data.status || AppConst.STATUS.disabled;
    this.createdAt = data.createdAt || Date.now();
    this.updatedAt = data.updatedAt || Date.now();
    this.isSelected = data.isSelected || false;
  }
}

export interface IOrganization {
  id: number;
  username: string;
  name: string;
  email: string;
  phoneNumber: string;
  avatar: string;
  webside: string;
  address: string;
  introduction: string;
  organizationType: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
  isSelected: boolean;
}
