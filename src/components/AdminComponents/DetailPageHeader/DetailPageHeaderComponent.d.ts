export type DetailPageHeaderProps = {
  data: any;
  editable: boolean;
};

export type DetailPageHeaderEmits = {
  (e: "onToggleUpdateButton"): void;
  (e: "onToggleDeleteButton"): void;
};
