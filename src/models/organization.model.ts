import { BaseModel } from "./base.model";

export class OrganizationModel extends BaseModel implements IOrganization {
  public id: number;
  public name: string;
  public email: string;
  public phone: string;
  public status: string;

  public constructor(data: any) {
    super();
    this.id = data.id || -1;
    this.name = data.name || "";
    this.email = data.email || "";
    this.phone = data.phone || "";
    this.status = data.status || "";
  }
}

export interface IOrganization {
  id: number;
  name: string;
  email: string;
  phone: string;
  status: string;
}
