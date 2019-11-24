import { zip } from "lodash";

export const transform = (input: string[][]) => zip(...input);
