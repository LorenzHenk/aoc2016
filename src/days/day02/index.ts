import { DaySolver } from "../../types";
import { solver } from "./solver";

export { default as input } from "./input";

export const partOne: DaySolver = input => solver(input);
