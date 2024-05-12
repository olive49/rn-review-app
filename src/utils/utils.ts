import { FormFieldVals } from "../hooks/model";

export const initializeFormData = (
  fields: FormFieldVals[]
): Record<string, string | number> => {
  const formData: Record<string, string | number> = {};

  fields.forEach((field: FormFieldVals) => {
    formData[field.name] = field.initialValue || "";
  });

  return formData;
};
