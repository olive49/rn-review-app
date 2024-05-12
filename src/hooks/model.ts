export interface FormConfig {
  fields: FormFieldVals[];
}

interface FormBase {
  label: string;
  type: FormFieldOption;
}

export interface FormFieldVals extends FormBase {
  name: string;
  initialValue: string | number;
  validation: (value: string | number) => boolean;
}

export interface FormFieldProps extends FormBase {
  value: any;
  onChange: (updatedVal: string | number) => void;
}

type FormFieldOption = "text" | "rating";

export enum FormFieldType {
  TEXT = "text",
  RATING = "rating",
}
