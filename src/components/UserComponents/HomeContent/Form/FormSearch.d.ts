export type FormSearchProps = {
  isDisableSearchButton?: boolean;
};

export type FormSearchEmits = {
  (e: "onSubmitForm"): void;
  (e: "getHeight", formHeight: number, elementHeight: number): void;
};
