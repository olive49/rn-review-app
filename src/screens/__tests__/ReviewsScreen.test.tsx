import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import ReviewsScreen from "../ReviewsScreen";

describe("ReviewsScreen", () => {
  const mockData = [
    { id: 1, title: "review 1", content: "content 1", rating: 5 },
    { id: 2, title: "review 2", content: "content 2", rating: 4 },
  ];
  const navigationMock: any = {
    navigate: jest.fn(),
  };

  it("renders correctly with reviews", () => {
    const { getByText } = render(
      <ReviewsScreen data={mockData} navigation={navigationMock} />
    );
    expect(getByText("Title: review 1")).toBeTruthy();
    expect(getByText("Content: content 1")).toBeTruthy();
    expect(getByText("Title: review 2")).toBeTruthy();
    expect(getByText("Content: content 2")).toBeTruthy();
  });

  it("displays 'No reviews available' when there are no reviews", () => {
    const { getByText } = render(
      <ReviewsScreen data={[]} navigation={navigationMock} />
    );
    expect(getByText("No reviews available")).toBeTruthy();
  });

  it("navigates to the 'Form' screen when 'Write a review' button is pressed", () => {
    const { getByText } = render(
      <ReviewsScreen data={[]} navigation={navigationMock} />
    );

    fireEvent.press(getByText("Write a review"));
    expect(navigationMock.navigate).toHaveBeenCalledWith("Form");
  });
});
