import { DaySolver } from "../../types";
import { solver } from "./solver";
import { grid1, grid2 } from "./grids";

export { default as input } from "./input";

export const partOne: DaySolver = input => solver(input, grid1);

export const partTwo: DaySolver = input => solver(input, grid2);
