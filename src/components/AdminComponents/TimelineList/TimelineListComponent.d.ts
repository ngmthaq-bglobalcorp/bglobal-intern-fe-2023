export type TimelineListProps = {
  target: string;
  data: Array<any>;
  limit: number;
};

export type TimelineListEmits = {
  (e: "onToggleEditButton", id: number): void;
  (e: "onToggleDeleteButton", id: number): void;
};
