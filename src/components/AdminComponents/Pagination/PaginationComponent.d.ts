export type PaginationProps = {
  currentPage: number;
  pageSize: number;
  totalCount: number;
};

export type PaginationEmits = {
  (e: "onPageChange", page: number): void;
};
