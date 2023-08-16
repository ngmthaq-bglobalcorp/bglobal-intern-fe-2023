import { JobModel } from "@/models/job.model";
import { LocationModel } from "@/models/location.model";
import { SearchLabelModel } from "@/models/searchLabel.model";

export class ModelHelper {
  public static getJobModel = (data: any) => {
    const job = {
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
    };
    return new JobModel(job);
  };
}
