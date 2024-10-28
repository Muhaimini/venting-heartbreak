"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../src/index");
describe("hello", () => {
    it("should return the correct greeting", () => {
        const result = (0, index_1.hello)(1);
        expect(result).toEqual("Hello, number 1");
    });
});
