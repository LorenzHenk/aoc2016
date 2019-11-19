import { toTriangle, parseHorizontal, parseVertical } from "./parser";

describe("Test toTriangle", () => {
  test("Works fine with OK input", () => {
    expect(toTriangle([1, 2, 3])).toEqual({ side1: 1, side2: 2, side3: 3 });
  });
});

describe("Test parseHorizontal", () => {
  test("Works fine with OK input", () => {
    const input = `
    1 2 3
    4 5 6
    `;

    expect(parseHorizontal(input)).toEqual([
      { side1: 1, side2: 2, side3: 3 },
      { side1: 4, side2: 5, side3: 6 },
    ]);
  });

  test("Removes unnecessary spaces", () => {
    const input = `

     1     2  3
    4  5           6

     `;

    expect(parseHorizontal(input)).toEqual([
      { side1: 1, side2: 2, side3: 3 },
      { side1: 4, side2: 5, side3: 6 },
    ]);
  });
});

describe("Test parseVertical", () => {
  test("Works fine with OK input", () => {
    const input = `
    1 2 3
    4 5 6
    7 8 9
    `;

    expect(parseVertical(input)).toEqual([
      { side1: 1, side2: 4, side3: 7 },
      { side1: 2, side2: 5, side3: 8 },
      { side1: 3, side2: 6, side3: 9 },
    ]);
  });

  test("Removes unnecessary spaces", () => {
    const input = `

     1     2  3
    4  5           6
    7 8 9

     `;

    expect(parseVertical(input)).toEqual([
      { side1: 1, side2: 4, side3: 7 },
      { side1: 2, side2: 5, side3: 8 },
      { side1: 3, side2: 6, side3: 9 },
    ]);
  });
});
