export type JobCardProps = {
  data: any;
};

export type JobCardEmits = {
  (e: "onClickCard", id: number): void;
  (e: "onToggleUpdateButton", id: number): void;
  (e: "onToggleDeleteButton", id: number): void;
};
