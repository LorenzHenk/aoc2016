import { Rotation, toRotation } from "./rotation";

describe("Test toRotation", () => {
  test("Correctly parses L", () => {
    const input = "L";
    const rotation = toRotation(input);

    expect(rotation).toEqual(Rotation.Left);
  });

  test("Correctly parses R", () => {
    const input = "R";
    const rotation = toRotation(input);

    expect(rotation).toEqual(Rotation.Right);
  });

  test("Throws on invalid input", () => {
    const input = "X";
    const rotation = () => toRotation(input);

    expect(rotation).toThrow();
  });
});
