import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import Button from "../Button";

describe("<Button />", () => {
  const onPressMock = jest.fn();
  const title = "button title";
  it("should exist", () => {
    const { getByText } = render(
      <Button onPress={onPressMock} title={title} />
    );
    const buttonElement = getByText(title);
    expect(buttonElement).toBeTruthy();
  });

  it("calls onPress when pressed", () => {
    const { getByText } = render(
      <Button onPress={onPressMock} title={title} />
    );
    const buttonElement = getByText(title);
    fireEvent.press(buttonElement);
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });
});
