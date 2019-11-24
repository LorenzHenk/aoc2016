import { countBy, invert } from "lodash";

import { transform } from "./transformer";
import { parser } from "./parser";

export const solvePartOne = (input: string) => {
  const transformed = transform(parser(input));

  const counts = transformed.map(letters => countBy(letters));

  const letters = counts.map(c => {
    const inv = invert(c);
    const maximum = Object.keys(inv)
      .map(n => parseInt(n))
      .sort()
      .reverse()[0];
    return inv[maximum];
  });

  return letters.join("");
};

export const solvePartTwo = (input: string) => {
  const transformed = transform(parser(input));

  const counts = transformed.map(letters => countBy(letters));

  const letters = counts.map(c => {
    const inv = invert(c);
    const minimum = Object.keys(inv)
      .map(n => parseInt(n))
      .sort()[0];
    return inv[minimum];
  });

  return letters.join("");
};
