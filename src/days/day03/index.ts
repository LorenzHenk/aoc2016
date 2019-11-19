import { solve } from "./solver";
import { parseHorizontal, parseVertical } from "./parser";

export const partOne = (input: string) => solve(input, parseHorizontal);

export const partTwo = (input: string) => solve(input, parseVertical);

export { default as input } from "./input";
