import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import FormTextItem from "../FormTextItem";

describe("<FormTextItem />", () => {
  const itemTitle = "mock title";
  const text = "mock text";
  const onChangeText = jest.fn();
  it("should exist", () => {
    const { getByText } = render(
      <FormTextItem
        itemTitle={itemTitle}
        text={text}
        onChangeText={onChangeText}
      />
    );
    const formTextItem = getByText(itemTitle);
    expect(formTextItem).toBeDefined();
  });

  it("calls on change text when text changes", () => {
    const { getByDisplayValue } = render(
      <FormTextItem
        itemTitle={itemTitle}
        text={text}
        onChangeText={onChangeText}
      />
    );

    const input = getByDisplayValue(text);
    fireEvent.changeText(input, "new text");

    expect(onChangeText).toHaveBeenCalledWith("new text");
  });
});
