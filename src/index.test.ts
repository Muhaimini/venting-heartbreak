import { hello } from "./index";

describe("hello", () => {
  it("should return expected result", () => {
    const result = hello(1);
    expect(result).toEqual("expected output");
  });
});
