import { toDistance } from "./distance";

describe("Test toDistance", () => {
  test("Correctly parses single-digit number", () => {
    const input = "2";
    const rotation = toDistance(input);

    expect(rotation).toEqual(2);
  });

  test("Correctly parses multi-digit number", () => {
    const input = "123";
    const rotation = toDistance(input);

    expect(rotation).toEqual(123);
  });

  test("Throws on invalid input", () => {
    const input = "X";
    const rotation = () => toDistance(input);

    expect(rotation).toThrow();
  });
});
