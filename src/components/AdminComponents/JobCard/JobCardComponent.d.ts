import type { JobModel } from "@/models/job.model";

export type JobCardProps = {
  job: JobModel;
};

export type JobCardEmits = {
  (e: "onClickCard", id: number): void;
  (e: "onToggleDeleteButton", id: number): void;
};
