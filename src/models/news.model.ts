import { BaseModel } from "./base.model";

export class NewsModel extends BaseModel implements INews {
  public id: number;
  public title: string;
  public subtitle: string;
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
    this.subtitle = data.subtitle || "";
    this.category = data.category || "";
    this.body = data.body || "";
    this.eventPageUrl = data.eventPageUrl || "";
    this.eventStartAt = new Date(data.eventStartAt) || new Date();
    this.eventEndAt = new Date(data.eventEndAt) || new Date();
    this.opensAt = new Date(data.opensAt) || new Date();
    this.expiresAt = new Date(data.expiresAt) || new Date();
    this.updatedAt = new Date(data.updatedAt) || new Date();
    this.createdAt = new Date(data.createdAt) || new Date();
  }
}

export interface INews {
  id: number;
  title: string;
  subtitle: string;
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
