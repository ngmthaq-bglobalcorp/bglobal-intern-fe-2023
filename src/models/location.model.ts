import { BaseModel } from "./base.model";

export class LocationModel extends BaseModel implements ILocation {
  public id: number;
  public name: string;

  public constructor(data: any) {
    super();
    this.id = data.id || -1;
    this.name = data.name || "";
  }
}

export interface ILocation {
  id: number;
  name: string;
}
