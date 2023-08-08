import { AppConst } from "@/const/app.const";
import { BaseModel } from "./base.model";

export class SeekerModel extends BaseModel implements ISeeker {
  public id: number;
  public userId: number;
  public username: string;
  public name: string;
  public email: string;
  public phoneNumber: string;
  public avatar: string;
  public birthday: Date;
  public address: string;
  public website: string;
  public education: string;
  public experience: string;
  public skills: string;
  public achievements: string;
  public otherDetails: string;
  public status: string;
  public createdAt: Date;
  public updatedAt: Date;
  public isSelected: boolean;

  public constructor(data: any) {
    super();
    this.id = data.id || -1;
    this.userId = data.userId || -1;
    this.username = data.username || "";
    this.name = data.name || "";
    this.email = data.email || "";
    this.phoneNumber = data.phoneNumber || "";
    this.avatar = data.avatar || "";
    this.birthday = data.birthday || new Date("2000-01-01");
    this.address = data.address || "";
    this.website = data.website || "";
    this.education = data.education || "";
    this.experience = data.experience || "";
    this.skills = data.skills || "";
    this.achievements = data.achievements || "";
    this.otherDetails = data.otherDetails || "";
    this.status = data.status || AppConst.STATUS.disabled;
    this.createdAt = new Date(data.createdAt) || new Date();
    this.updatedAt = new Date(data.updatedAt) || new Date();
    this.isSelected = data.isSelected || false;
  }
}

export interface ISeeker {
  id: number;
  userId: number;
  username: string;
  name: string;
  email: string;
  phoneNumber: string;
  avatar: string;
  birthday: Date;
  address: string;
  website: string;
  education: string;
  experience: string;
  skills: string;
  achievements: string;
  otherDetails: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
  isSelected: boolean;
}
