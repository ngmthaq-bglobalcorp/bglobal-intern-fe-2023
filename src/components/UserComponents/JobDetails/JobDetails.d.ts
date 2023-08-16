export type JobDetailProps = {
  data: any;
};

export type JobDetailEmits = {
  (e: "onToggleReturn"): void;
  (e: "onToggleLikeButton", id: number): void;
  (e: "onToggleDislikeButton", id: number): void;
};
