export type ProfileHeaderProps = {
  isUpdate: boolean;
  editable: boolean;
};

export type ProfileHeaderEmits = {
  (e: "onToggleUpdateProfile"): void;
};
