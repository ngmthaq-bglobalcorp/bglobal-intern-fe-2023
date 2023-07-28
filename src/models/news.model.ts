import { BaseModel } from "./base.model";

export class NewsModel extends BaseModel implements INews {
  public id: number;
  public title: string;
  public subTitle: string;
  public category: string;
  public body: string;
  public eventPageUrl: string;
  public eventStartAt: Date;
  public eventEndAt: Date;
  public opensAt: Date;
  public expiresAt: Date;
  public updatedAt: Date;
  public createdAt: Date;

  public constructor(data: any) {
    super();
    this.id = data.id || -1;
    this.title = data.title || "";
    this.subTitle = data.subTitle || "";
    this.category = data.category || "";
    this.body = data.body || "";
    this.eventPageUrl = data.eventPageUrl || "";
    this.eventStartAt = data.eventStartAt || Date.now();
    this.eventEndAt = data.eventEndAt || Date.now();
    this.opensAt = data.opensAt || Date.now();
    this.expiresAt = data.expiresAt || Date.now();
    this.updatedAt = data.updatedAt || Date.now();
    this.createdAt = data.createdAt || Date.now();
  }
}

export interface INews {
  id: number;
  title: string;
  subTitle: string;
  category: string;
  body: string;
  eventPageUrl: string;
  eventStartAt: Date;
  eventEndAt: Date;
  opensAt: Date;
  expiresAt: Date;
  updatedAt: Date;
  createdAt: Date;
}
