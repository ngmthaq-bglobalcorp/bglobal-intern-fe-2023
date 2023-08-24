export type FormSearchProps = {
  isDisableSearchButton?: boolean;
};

export type FormSearchEmits = {
  (e: "onSubmitForm", data: any): void;
  (e: "getHeight", formHeight: number, elementHeight: number): void;
};
