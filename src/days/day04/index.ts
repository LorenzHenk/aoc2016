import { DaySolver } from "../../types";
import { solvePartOne, solvePartTwo } from "./solve";

export const partOne: DaySolver = input => solvePartOne(input);

export const partTwo: DaySolver = input => solvePartTwo(input);

export { default as input } from "./input";
