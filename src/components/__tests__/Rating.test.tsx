import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import Rating from "../Rating";
import { RATING_LENGTH } from "../../constants/global";

describe("<Rating />", () => {
  const onPress = jest.fn();
  describe("interactive rating", () => {
    it("should exist", () => {
      const { getAllByRole } = render(
        <Rating rating={0} readOnly={false} onPress={onPress} />
      );
      const circles = getAllByRole("radio");
      expect(circles).toHaveLength(RATING_LENGTH);
    });
    it("calls onPress callback when a circle is pressed", () => {
      const { getAllByRole } = render(
        <Rating rating={0} readOnly={false} onPress={onPress} />
      );
      const circles = getAllByRole("radio");
      fireEvent.press(circles[2]);

      expect(onPress).toHaveBeenCalledWith(3);
    });
  });
  describe("readOnly rating", () => {
    it("should exist", () => {
      const { getAllByTestId } = render(
        <Rating rating={4} readOnly={true} onPress={onPress} />
      );
      const circles = getAllByTestId(/^circle-/);
      expect(circles).toHaveLength(RATING_LENGTH);
    });
  });
});
