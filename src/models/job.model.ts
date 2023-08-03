import { BaseModel } from "./base.model";

export class JobModel extends BaseModel implements IJob {
  public id: number;
  public mainImageUrl: string;
  public mainImageDesc: string;
  public title: string;
  public jobTitleCatchPhrase: string;
  public location: string;
  public salary: number;
  public workingHour: Array<any>;
  public searchLabels: Array<string>;
  public webApplication: string;
  public postScripts: Array<any>;
  public catchText: string;
  public leadText: string;
  public subImages: Array<any>;
  public properties: Array<any>;
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
    this.location = data.location || "";
    this.salary = data.salary || 0;
    this.workingHour = data.workingHour || [];
    this.searchLabels = data.searchLabels || [];
    this.webApplication = data.webApplication || "";
    this.postScripts = data.postScripts || [];
    this.catchText = data.catchText || "";
    this.leadText = data.leadText || "";
    this.subImages = data.subImages || [];
    this.properties = data.properties || [];
    this.companySurvey = data.companySurvey || [];
    this.barometer = data.barometer || [];
    this.photoGallery = data.photoGallery || [];
    this.interview = data.interview || [];
    this.productCode = data.productCode || "";
    this.opensAt = data.opensAt || Date.now();
    this.expiresAt = data.expiresAt || Date.now();
    this.updatedAt = data.updatedAt || Date.now();
    this.createdAt = data.createdAt || Date.now();
  }
}

export interface IJob {
  id: number;
  mainImageUrl: string;
  mainImageDesc: string;
  title: string;
  jobTitleCatchPhrase: string;
  location: string;
  salary: number;
  workingHour: Array<any>;
  searchLabels: Array<string>;
  webApplication: string;
  postScripts: Array<any>;
  catchText: string;
  leadText: string;
  subImages: Array<any>;
  properties: Array<any>;
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