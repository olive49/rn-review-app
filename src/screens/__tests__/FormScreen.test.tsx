import React from "react";
import { render } from "@testing-library/react-native";
import FormScreen from "../FormScreen";

describe("FormScreen", () => {
  const navigationMock: any = {
    navigate: jest.fn(),
  };
  const onFormSubmit = jest.fn();

  it("renders correctly", () => {
    const { getByText } = render(
      <FormScreen onFormSubmit={onFormSubmit} navigation={navigationMock} />
    );

    expect(getByText("Submit Form")).toBeTruthy();
  });

  //TODO: Add tests
  // onFormSubmit called with correct data
  // test activity indicator component style when activityIndicator set to true
});
