import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import Button from "../Button";

describe("<Button />", () => {
  const onPress = jest.fn();
  const title = "button title";
  it("should exist", () => {
    const { getByText } = render(<Button onPress={onPress} title={title} />);
    const buttonElement = getByText(title);
    expect(buttonElement).toBeTruthy();
  });

  it("calls onPress when pressed", () => {
    const { getByText } = render(<Button onPress={onPress} title={title} />);
    const buttonElement = getByText(title);
    fireEvent.press(buttonElement);
    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
