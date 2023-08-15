export type ProfileUpdateProps = {
  profile: any;
  messageInfoUpdateSuccess?: string;
  messageInfoUpdateFailed?: string;
  messageEmailUpdateSuccess?: string;
  messageEmailUpdateFailed?: string;
  messagePasswordUpdateSuccess?: string;
  messagePasswordUpdateFailed?: string;
};

export type ProfileUpdateEmits = {
  (e: "onUpdateInfomation", data: any): void;
  (e: "onUpdateEmail", email: string): void;
  (e: "onUpdatePassword", data: any): void;
  (e: "onUpdateLanguage", language: string): void;
  (e: "onToggleDeleteAccount"): void;
};
