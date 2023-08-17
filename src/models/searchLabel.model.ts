import { BaseModel } from "./base.model";

export class SearchLabelModel extends BaseModel implements ISearchLabel {
  public id: number;
  public name: string;
  public isEnabled: boolean;

  public constructor(data: any) {
    super();
    this.id = data.id || -1;
    this.name = data.name || "";
    this.isEnabled = data.isEnabled || false;
  }
}

export interface ISearchLabel {
  id: number;
  name: string;
  isEnabled: boolean;
}
