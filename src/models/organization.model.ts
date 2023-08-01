import { BaseModel } from "./base.model";

export class OrganizationModel extends BaseModel implements IOrganization {
  public id: number;
  public username: string;
  public name: string;
  public email: string;
  public phone_number: string;
  public webside: string;
  public adress: string;
  public introduction: string;
  public organizationType: number;
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
    this.phone_number = data.phone_number || "";
    this.webside = data.webside || "";
    this.adress = data.adress || "";
    this.introduction = data.introduction || "";
    this.organizationType = data.organizationType || 0;
    this.status = data.status || "active";
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
  phone_number: string;
  webside: string;
  adress: string;
  introduction: string;
  organizationType: number;
  status: string;
  createdAt: Date;
  updatedAt: Date;
  isSelected: boolean;
}
