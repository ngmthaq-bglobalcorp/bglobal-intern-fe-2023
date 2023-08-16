import type { JobModel } from "@/models/job.model";

export type JobCardProps = {
  data: JobModel;
};

export type JobCardEmits = {
  (e: "onClickCard", id: number): void;
  (e: "onToggleViewDetail", id: number): void;
  (e: "onToggleLikeButton", id: number): void;
  (e: "onToggleDislikeButton", id: number): void;
  (e: "onToggleSkipButton"): void;
};
