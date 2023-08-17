import type { JobModel } from "@/models/job.model";

export type HistoryJobsProps = {
  data: JobModel;
  isLike: boolean;
};

export type HistoryJobsEmits = {
  (e: "onClickCard", id: number): void;
  (e: "onToggleViewDetail", id: number): void;
};
