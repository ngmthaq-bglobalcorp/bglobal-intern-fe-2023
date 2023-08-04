export type DatatableProps = {
  columns: Array<any>;
  data: Array<any>;
};

export type DatatableEmits = {
  (e: "onDeleteSelected", selectedArray: Array<number>): void;
  (e: "onLockSelected", id: number): void;
  (e: "onUnlockSelected", id: number): void;
};
