import { transform } from "./transformer";

test("Transfrom works fine", () => {
  const input = [
    ["a", "b", "c"],
    ["d", "e", "f"],
  ];

  expect(transform(input)).toEqual([
    ["a", "d"],
    ["b", "e"],
    ["c", "f"],
  ]);
});
