export type FormDataProps = {
  target: string;
  input: Array<any>;
};

export type FormDataEmits = {
  (e: "onSubmitForm", data: any): void;
};
