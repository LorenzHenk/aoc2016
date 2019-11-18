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

export const changePosition = (
  currentPosition: number,
  instruction: Instruction,
) => {
  let newPosition: number;
  let newPositionValid: boolean;

  switch (instruction) {
    case Instruction.Up:
      newPosition = currentPosition - 3;
      newPositionValid = newPosition >= 1;
      break;
    case Instruction.Down:
      newPosition = currentPosition + 3;
      newPositionValid = newPosition <= 9;
      break;
    case Instruction.Left:
      newPosition = currentPosition - 1;
      // if going left, we can not be on the right side
      newPositionValid =
        [3, 6, 9].indexOf(newPosition) === -1 && newPosition >= 1;
      break;
    case Instruction.Right:
      newPosition = currentPosition + 1;
      // if going right, we cannot be on the left side
      newPositionValid =
        [1, 4, 7].indexOf(newPosition) === -1 && newPosition <= 9;
  }
  return newPositionValid ? newPosition : currentPosition;
};
