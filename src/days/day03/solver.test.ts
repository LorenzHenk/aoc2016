import { solve } from "./solver";
import { parseHorizontal, parseVertical } from "./parser";

test("Solving Part One works fine", () => {
  const input = `
  1 2  2
  2 2  2
  3 3  6
  1 7 12
  8 0  4
  `;

  expect(solve(input, parseHorizontal)).toEqual(2);
});

test("Solving Part Two works fine", () => {
  const input = `
  1 2  2
  2 2  2
  3 3  6
  1 7 12
  8 0  4
  8 0  4
  `;

  expect(solve(input, parseVertical)).toEqual(2);
});
