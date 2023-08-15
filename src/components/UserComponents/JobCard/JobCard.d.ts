import type { JobModel } from "@/models/job.model";

export type JobsListProps = {
  newsArray: JobModel[];
};

export type JobsListEmits = {
  (e: "onClickCard", id: number): void;
};
