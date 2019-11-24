import { parser } from "./parser";

test("Parser parses correctly", () => {
  const input = `abc
def
ghi`;
  expect(parser(input)).toEqual([
    ["a", "b", "c"],
    ["d", "e", "f"],
    ["g", "h", "i"],
  ]);
});
