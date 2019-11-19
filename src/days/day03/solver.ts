import { parse } from "./parser";
import { checkAll } from "./checker";

export const solve = (input: string) => {
  const parsed = parse(input);
  const correctTriangles = parsed
    .map(t => checkAll(t.side1, t.side2, t.side3))
    .filter(Boolean);
  return correctTriangles.length;
};
