import React from "react";
import { render } from "@testing-library/react-native";
import FormField from "./../FormField";
import { FormFieldType } from "../../hooks/model";

describe("FormField", () => {
  const onChange = jest.fn();
  it("renders text input correctly", () => {
    const { getByText, getAllByDisplayValue } = render(
      <FormField label="title" value="" onChange={onChange} type="text" />
    );

    expect(getByText("title")).toBeTruthy();
    expect(getAllByDisplayValue("")).toBeTruthy();
  });

  it("renders text input when type is text", () => {
    const { getByTestId } = render(
      <FormField
        label="title"
        value=""
        onChange={() => {}}
        type={FormFieldType.TEXT}
      />
    );

    const formTextItem = getByTestId("text-input-container");
    expect(formTextItem).toBeTruthy();
  });

  it("renders rating when type is rating", () => {
    const { getByTestId } = render(
      <FormField
        label="title"
        value=""
        onChange={() => {}}
        type={FormFieldType.RATING}
      />
    );

    const ratingContainer = getByTestId("rating-container");
    expect(ratingContainer).toBeTruthy();
  });
});
