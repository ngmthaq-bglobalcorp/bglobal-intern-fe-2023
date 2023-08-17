export type PageHeaderProps = {
  target: string;
  button?: string;
  icon?: string;
};

export type PageHeaderEmits = {
  (e: "onToggleButton"): void;
};
