import { renderHook, act } from "@testing-library/react-hooks";
import useForm from "../useForm";

describe("useForm", () => {
  it("initializes state variables correctly", () => {
    const { result } = renderHook(() => useForm());

    expect(result.current.title).toBe("");
    expect(result.current.content).toBe("");
    expect(result.current.rating).toBe(0);
  });

  it("updates title state correctly", () => {
    const { result } = renderHook(() => useForm());

    act(() => result.current.handleTitleChange("new title"));

    expect(result.current.title).toBe("new title");
  });

  it("updates content state correctly", () => {
    const { result } = renderHook(() => useForm());

    act(() => result.current.handleContentChange("new content"));

    expect(result.current.content).toBe("new content");
  });
  it("updates rating state correctly", () => {
    const { result } = renderHook(() => useForm());

    act(() => result.current.handleRatingChange(4));

    expect(result.current.rating).toBe(4);
  });
  it("validate form returns true when all values are filled", () => {
    const { result } = renderHook(() => useForm());

    // should be invalid at first
    expect(result.current.validateForm()).toBe(false);

    act(() => {
      result.current.handleTitleChange("new title");
      result.current.handleContentChange("new content");
      result.current.handleRatingChange(4);
    });

    expect(result.current.validateForm()).toBe(true);
  });

  it("validate form returns false when rating is not filled", () => {
    const { result } = renderHook(() => useForm());

    // should be invalid at first
    expect(result.current.validateForm()).toBe(false);

    act(() => {
      result.current.handleTitleChange("new title");
      result.current.handleContentChange("new content");
    });

    expect(result.current.validateForm()).toBe(false);
  });
  it("validate form returns false when title is emtpy", () => {
    const { result } = renderHook(() => useForm());

    // should be invalid at first
    expect(result.current.validateForm()).toBe(false);

    act(() => {
      result.current.handleContentChange("new content");
      result.current.handleRatingChange(4);
    });

    expect(result.current.validateForm()).toBe(false);
  });
  it("validate form returns false when content is empty", () => {
    const { result } = renderHook(() => useForm());

    // should be invalid at first
    expect(result.current.validateForm()).toBe(false);

    act(() => {
      result.current.handleTitleChange("new title");
      result.current.handleRatingChange(4);
    });

    expect(result.current.validateForm()).toBe(false);
  });
});
