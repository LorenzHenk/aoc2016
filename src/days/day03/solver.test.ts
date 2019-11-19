import { solve } from "./solver";

test("Solving works fine", () => {
  const input = `
  1 2  2
  2 2  2
  3 3  6
  1 7 12
  8 0  4
  `;

  expect(solve(input)).toEqual(2);
});
