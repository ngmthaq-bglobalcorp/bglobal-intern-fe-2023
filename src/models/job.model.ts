import { BaseModel } from "./base.model";
import { LocationModel } from "./location.model";
import type { SearchLabelModel } from "./searchLabel.model";

export class JobModel extends BaseModel implements IJob {
  public id: number;
  public mainImageUrl: string;
  public mainImageDesc: string;
  public title: string;
  public jobTitleCatchPhrase: string;
  public location: LocationModel;
  public salary: number;
  public workingHours: Array<any>;
  public searchLabels: Array<SearchLabelModel>;
  public webApplication: string;
  public catchText: string;
  public leadText: string;
  public subImages: Array<any>;
  public properties: Array<any>;
  public postScripts: Array<any>;
  public companySurvey: Array<string>;
  public barometer: Array<string>;
  public photoGallery: Array<any>;
  public interview: Array<string>;
  public productCode: string;
  public opensAt: Date;
  public expiresAt: Date;
  public updatedAt: Date;
  public createdAt: Date;

  public constructor(data: any) {
    super();
    this.id = data.id || -1;
    this.mainImageUrl = data.mainImageUrl || "";
    this.mainImageDesc = data.mainImageDesc || "";
    this.title = data.title || "";
    this.jobTitleCatchPhrase = data.jobTitleCatchPhrase || "";
    this.location = data.location || new LocationModel({});
    this.salary = data.salary || 0;
    this.workingHours = data.workingHours || [];
    this.searchLabels = data.searchLabels || [];
    this.webApplication = data.webApplication || "";
    this.catchText = data.catchText || "";
    this.leadText = data.leadText || "";
    this.subImages = data.subImages || [];
    this.properties = data.properties || [];
    this.postScripts = data.postScripts || [];
    this.companySurvey = data.companySurvey || [];
    this.barometer = data.barometer || [];
    this.photoGallery = data.photoGallery || [];
    this.interview = data.interview || [];
    this.productCode = data.productCode || "";
    this.opensAt = data.opensAt ? new Date(data.opensAt) : new Date();
    this.expiresAt = data.expiresAt ? new Date(data.expiresAt) : new Date();
    this.updatedAt = data.updatedAt ? new Date(data.updatedAt) : new Date();
    this.createdAt = data.createdAt ? new Date(data.createdAt) : new Date();
  }
}

export interface IJob {
  id: number;
  mainImageUrl: string;
  mainImageDesc: string;
  title: string;
  jobTitleCatchPhrase: string;
  location: LocationModel;
  salary: number;
  workingHours: Array<any>;
  searchLabels: Array<SearchLabelModel>;
  webApplication: string;
  catchText: string;
  leadText: string;
  subImages: Array<any>;
  properties: Array<any>;
  postScripts: Array<any>;
  companySurvey: Array<string>;
  barometer: Array<string>;
  photoGallery: Array<any>;
  interview: Array<string>;
  productCode: string;
  opensAt: Date;
  expiresAt: Date;
  updatedAt: Date;
  createdAt: Date;
}
