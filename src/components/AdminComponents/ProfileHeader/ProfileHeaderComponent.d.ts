export type ProfileHeaderProps = {
  profile: any;
  isUpdate: boolean;
  editable: boolean;
};

export type ProfileHeaderEmits = {
  (e: "onToggleUpdateProfile"): void;
  (e: "onUpdateAvatar", avatarUrl: string): void;
};
