import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import FormTextItem from "../FormTextItem";

describe("<FormTextItem />", () => {
  const itemTitle = "mock title";
  const text = "mock text";
  const onChangeTextMock = jest.fn();
  it("should exist", () => {
    const { getByDisplayValue } = render(
      <FormTextItem
        itemTitle={itemTitle}
        text={text}
        onChangeText={onChangeTextMock}
      />
    );
    const formTextItem = getByDisplayValue(text);
    expect(formTextItem).toBeDefined();
  });

  it("calls on change text when text changes", () => {
    const { getByDisplayValue } = render(
      <FormTextItem
        itemTitle={itemTitle}
        text={text}
        onChangeText={onChangeTextMock}
      />
    );

    const input = getByDisplayValue(text);
    fireEvent.changeText(input, "new text");

    expect(onChangeTextMock).toHaveBeenCalledWith("new text");
  });
});
