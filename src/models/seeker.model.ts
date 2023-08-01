import { BaseModel } from "./base.model";

export class SeekerModel extends BaseModel implements ISeeker {
  public id: number;
  public name: string;
  public email: string;
  public phone: string;
  public status: string;
  public isSelected: boolean;

  public constructor(data: any) {
    super();
    this.id = data.id || -1;
    this.name = data.name || "";
    this.email = data.email || "";
    this.phone = data.phone || "";
    this.status = data.status || "";
    this.isSelected = data.isSelected || false;
  }
}

export interface ISeeker {
  id: number;
  name: string;
  email: string;
  phone: string;
  status: string;
  isSelected: boolean;
}
