import { formConfig } from "../../config/config";
import { initializeFormData } from "./../utils";

describe("initializeFormData", () => {
  it("initializes form data correctly with text fields", () => {
    const formData = initializeFormData(formConfig.fields);
    expect(formData).toEqual({
      title: "",
      content: "",
      rating: "",
    });
  });
});
