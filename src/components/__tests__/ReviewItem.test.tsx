import React from "react";
import { render } from "@testing-library/react-native";
import ReviewItem from "../ReviewItem";

describe("<ReviewItem />", () => {
  const title = "mock title";
  const content = "mock content";
  const rating = 5;
  const id = 1;

  it("should display the right text", () => {
    const { getByText } = render(
      <ReviewItem title={title} content={content} rating={rating} id={id} />
    );

    expect(getByText(`ID: ${id}`)).toBeTruthy();
    expect(getByText(`Title: ${title}`)).toBeTruthy();
    expect(getByText(`Content: ${content}`)).toBeTruthy();
  });
});
