import { FormConfig } from "../hooks/model";

export const formConfig: FormConfig = {
  fields: [
    {
      name: "title",
      label: "Title",
      type: "text",
      initialValue: "",
      validation: (value) => value !== "",
    },
    {
      name: "content",
      label: "Content",
      type: "text",
      initialValue: "",
      validation: (value) => value !== "",
    },
    {
      name: "rating",
      label: "Rating",
      initialValue: 0,
      type: "rating",
      validation: (value) =>
        typeof value === "number" && value >= 1 && value <= 5,
    },
  ],
};
