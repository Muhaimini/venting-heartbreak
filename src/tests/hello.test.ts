import { hello } from "~/index";

describe("hello", () => {
  it("should return the correct greeting", () => {
    const result = hello(1);
    expect(result).toEqual("Hello, number 1");
  });
});
