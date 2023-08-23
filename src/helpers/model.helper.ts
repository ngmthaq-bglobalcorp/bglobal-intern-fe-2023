import { JobModel } from "@/models/job.model";
import { LocationModel } from "@/models/location.model";
import { OrganizationModel } from "@/models/organization.model";
import { SearchLabelModel } from "@/models/searchLabel.model";
import { SeekerModel } from "@/models/seeker.model";

export class ModelHelper {
  public static getJobModel = (data: any) => {
    return new JobModel({
      id: data.id,
      mainImageUrl: data.mainImage.url,
      mainImageDesc: data.mainImage.description,
      title: data.title,
      jobTitleCatchPhrase: data.jobTitleCatchPhrase,
      location: new LocationModel({
        id: data.location.id,
        name: data.location.city,
      }),
      salary: data.salary.monthly,
      workingHours: data.workingHours,
      searchLabels: data.searchLabels
        ? data.searchLabels.map((value: any) => {
            return new SearchLabelModel({
              id: value.id,
              name: value.name,
              isEnabled: value.isEnabled,
            });
          })
        : [],
      webApplication: data.webApplication.url,
      catchText: data.catchText,
      leadText: data.leadText,
      subImages: data.subImages,
      properties: data.properties,
      postScripts: data.postScripts,
      companySurvey: data.displayed && data.companySurvey.contents,
      barometer: data.displayed && data.barometer.contents,
      photoGallery: data.photoGallery.contents,
      interview: data.displayed && data.interview.contents,
      productCode: data.productCode,
      opensAt: data.opensAt,
      expiresAt: data.expiresAt,
      updatedAt: data.updatedAt,
      createdAt: data.createdAt,
    });
  };

  public static getSeekerModel = (data: any) => {
    return new SeekerModel({
      id: data.id,
      userId: data.user.id,
      username: data.user.username,
      name: data.name,
      email: data.user.email,
      phoneNumber: data.phoneNumber,
      avatar: data.photo,
      birthday: data.dob,
      address: data.address,
      website: data.website,
      education: data.education,
      experience: data.experience,
      skills: data.skills,
      achievements: data.achievements,
      otherDetails: data.other_details,
      status: data.user.status,
    });
  };

  public static getOrganizationModel = (data: any) => {
    return new OrganizationModel({
      id: data.id,
      userId: data.user.id,
      username: data.user.username,
      name: data.name,
      email: data.user.email,
      phoneNumber: data.phoneNumber,
      avatar: data.photo,
      website: data.website,
      address: data.address,
      introduction: data.introduction,
      organizationType: data.organizationType,
      status: data.user.status,
    });
  };
}
