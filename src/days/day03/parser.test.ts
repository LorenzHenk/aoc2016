import { toTriangle, parse } from "./parser";

describe("Test toTriangle", () => {
  test("Works fine with OK input", () => {
    expect(toTriangle([1, 2, 3])).toEqual({ side1: 1, side2: 2, side3: 3 });
  });
});

describe("Test parse", () => {
  test("Works fine with OK input", () => {
    const input = `
    1 2 3
    4 5 6
    `;

    expect(parse(input)).toEqual([
      { side1: 1, side2: 2, side3: 3 },
      { side1: 4, side2: 5, side3: 6 },
    ]);
  });

  test("Removes unnecessary spaces", () => {
    const input = `

     1     2  3
    4  5           6

     `;

    expect(parse(input)).toEqual([
      { side1: 1, side2: 2, side3: 3 },
      { side1: 4, side2: 5, side3: 6 },
    ]);
  });
});
