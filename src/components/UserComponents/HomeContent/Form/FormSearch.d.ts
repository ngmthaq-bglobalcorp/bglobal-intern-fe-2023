export type FormSearchProps = {
  isDisableSearchButton?: boolean;
};

export type FormSearchEmits = {
  (e: "getHeight", formHeight: number, elementHeight: number): void;
};
