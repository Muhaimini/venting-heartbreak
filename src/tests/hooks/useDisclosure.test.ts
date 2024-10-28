import { renderHook, act } from "@testing-library/react";
import { useDisclosure } from "~/hooks/index";

describe("useDisclosure hook", () => {
  test("should initialize with default state", () => {
    const { result } = renderHook(() => useDisclosure());
    expect(result.current.isOpened).toBe(false);
  });

  test("should open when calling open function", () => {
    const { result } = renderHook(() => useDisclosure());
    act(() => result.current.open());
    expect(result.current.isOpened).toBe(true);
  });

  test("should close when calling close function", () => {
    const { result } = renderHook(() => useDisclosure({ defaultvalue: true }));
    act(() => result.current.close());
    expect(result.current.isOpened).toBe(false);
  });

  test("should toggle state", () => {
    const { result } = renderHook(() => useDisclosure());
    act(() => result.current.toggle());
    expect(result.current.isOpened).toBe(true);
    act(() => result.current.toggle());
    expect(result.current.isOpened).toBe(false);
  });
});
