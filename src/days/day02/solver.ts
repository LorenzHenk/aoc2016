import { parseInput } from "./parser";
import { prepareChangePosition } from "./instructions";
import { Grid } from "./grids";

export const solver = (input: string, grid: Grid): string => {
  const changePosition = prepareChangePosition(grid);
  return parseInput(input)
    .reduce(
      (solutions, instructions) => [
        ...solutions,
        instructions.reduce(
          (previous, instruction) => changePosition(previous, instruction),
          solutions[solutions.length - 1],
        ),
      ],
      [{ x: (grid[0].length - 1) / 2, y: (grid.length - 1) / 2 }], // initial value; starting in the center
    )
    .slice(1) // remove initial value from the solution
    .map(position => grid[position.y][position.x])
    .join("");
};
