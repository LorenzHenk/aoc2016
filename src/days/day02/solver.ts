import { parseInput } from "./parser";
import { changePosition } from "./instructions";

export const solver = (input: string): string => {
  return parseInput(input)
    .reduce(
      (solutions, instructions) => [
        ...solutions,
        instructions.reduce(
          (previous, instruction) => changePosition(previous, instruction),
          solutions[solutions.length - 1],
        ),
      ],
      [5], // initial value; starting in the center
    )
    .slice(1) // remove initial value from the solution
    .join("");
};
