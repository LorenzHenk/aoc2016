import { Grid } from "./grids";

export enum Instruction {
  Up,
  Down,
  Left,
  Right,
}

export const toInstruction = (text: string): Instruction => {
  let instruction: Instruction;
  switch (text) {
    case "U":
      instruction = Instruction.Up;
      break;
    case "D":
      instruction = Instruction.Down;
      break;
    case "L":
      instruction = Instruction.Left;
      break;
    case "R":
      instruction = Instruction.Right;
      break;
    default:
      throw new Error("Invalid character");
  }
  return instruction;
};

interface Position {
  x: number;
  y: number;
}

export const checkPosition = (position: Position, grid: Grid) =>
  grid[position.y]?.[position.x] !== undefined;

export const changePosition = (
  currentPosition: Position,
  instruction: Instruction,
  grid: Grid,
) => {
  let newPosition: Position;

  switch (instruction) {
    case Instruction.Up:
      newPosition = { ...currentPosition, y: currentPosition.y - 1 };
      break;
    case Instruction.Down:
      newPosition = { ...currentPosition, y: currentPosition.y + 1 };
      break;
    case Instruction.Left:
      newPosition = { ...currentPosition, x: currentPosition.x - 1 };
      break;
    case Instruction.Right:
      newPosition = { ...currentPosition, x: currentPosition.x + 1 };
      break;
  }
  return checkPosition(newPosition, grid) ? newPosition : currentPosition;
};

export const prepareChangePosition = (grid: Grid) => (
  currentPosition: Position,
  instruction: Instruction,
) => changePosition(currentPosition, instruction, grid);
