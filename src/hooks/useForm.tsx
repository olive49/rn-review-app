import { useState, useCallback } from "react";
import FormField from "../components/FormField";
import { FormConfig, FormFieldVals } from "./model";
import { initializeFormData } from "./../utils/utils";

interface UseFormResult {
  formData: Record<string, string | number>;
  resetForm: () => void;
  validateForm: () => boolean;
  generateFormComponent: () => React.ReactNode;
}

export default function useForm(config: FormConfig): UseFormResult {
  const [formData, setFormData] = useState<Record<string, string | number>>(
    initializeFormData(config.fields)
  );

  const setFieldValue = useCallback(
    (fieldName: string, value: string | number) => {
      setFormData((prevData) => ({
        ...prevData,
        [fieldName]: value,
      }));
    },
    []
  );

  const validateForm = useCallback((): boolean => {
    let isValid = true;

    config.fields.forEach((field: FormFieldVals) => {
      if (field.validation && !field.validation(formData[field.name])) {
        isValid = false;
      }
    });

    return isValid;
  }, [config.fields, formData]);

  const resetForm = useCallback(() => {
    setFormData(initializeFormData(config.fields));
  }, [config.fields]);

  const generateFormComponent = useCallback((): React.ReactNode => {
    return (
      <>
        {config.fields.map((field: FormFieldVals) => (
          <FormField
            key={field.name}
            label={field.label}
            value={formData[field.name]}
            onChange={(value: string | number) =>
              setFieldValue(field.name, value)
            }
            type={field.type}
          />
        ))}
      </>
    );
  }, [config.fields, formData]);

  return {
    formData,
    resetForm,
    validateForm,
    generateFormComponent,
  };
}
