export type FormDataProps = {
  target: string;
  input: Array<any>;
};

export type FormDataEmits = {
  (e: "onSubmitForm", job: any): void;
};
