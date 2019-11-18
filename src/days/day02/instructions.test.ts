import { changePosition, Instruction, toInstruction } from "./instructions";

describe("Test toInstruction", () => {
  test("Convert U to Up", () => {
    expect(toInstruction("U")).toEqual(Instruction.Up);
  });
  test("Convert R to Right", () => {
    expect(toInstruction("R")).toEqual(Instruction.Right);
  });
  test("Convert D to Down", () => {
    expect(toInstruction("D")).toEqual(Instruction.Down);
  });
  test("Convert L to Left", () => {
    expect(toInstruction("L")).toEqual(Instruction.Left);
  });

  test("Convert F should throw", () => {
    expect(() => toInstruction("F")).toThrow();
  });
});

describe("Move from center", () => {
  test("Move Up", () => {
    expect(changePosition(5, Instruction.Up)).toEqual(2);
  });

  test("Move Right", () => {
    expect(changePosition(5, Instruction.Right)).toEqual(6);
  });

  test("Move Down", () => {
    expect(changePosition(5, Instruction.Down)).toEqual(8);
  });

  test("Move Left", () => {
    expect(changePosition(5, Instruction.Left)).toEqual(4);
  });
});

describe("Move from top left corner", () => {
  test("Move Up, stay", () => {
    expect(changePosition(1, Instruction.Up)).toEqual(1);
  });

  test("Move Right", () => {
    expect(changePosition(1, Instruction.Right)).toEqual(2);
  });

  test("Move Down", () => {
    expect(changePosition(1, Instruction.Down)).toEqual(4);
  });

  test("Move Left, stay", () => {
    expect(changePosition(1, Instruction.Left)).toEqual(1);
  });
});

describe("Move from top right corner", () => {
  test("Move Up, stay", () => {
    expect(changePosition(3, Instruction.Up)).toEqual(3);
  });

  test("Move Right, stay", () => {
    expect(changePosition(3, Instruction.Right)).toEqual(3);
  });

  test("Move Down", () => {
    expect(changePosition(3, Instruction.Down)).toEqual(6);
  });

  test("Move Left", () => {
    expect(changePosition(3, Instruction.Left)).toEqual(2);
  });
});

describe("Move from bottom right corner", () => {
  test("Move Up", () => {
    expect(changePosition(9, Instruction.Up)).toEqual(6);
  });

  test("Move Right, stay", () => {
    expect(changePosition(9, Instruction.Right)).toEqual(9);
  });

  test("Move Down, stay", () => {
    expect(changePosition(9, Instruction.Down)).toEqual(9);
  });

  test("Move Left", () => {
    expect(changePosition(9, Instruction.Left)).toEqual(8);
  });
});

describe("Move from bottom left corner", () => {
  test("Move Up", () => {
    expect(changePosition(7, Instruction.Up)).toEqual(4);
  });

  test("Move Right", () => {
    expect(changePosition(7, Instruction.Right)).toEqual(8);
  });

  test("Move Down, stay", () => {
    expect(changePosition(7, Instruction.Down)).toEqual(7);
  });

  test("Move Left, stay", () => {
    expect(changePosition(7, Instruction.Left)).toEqual(7);
  });
});
