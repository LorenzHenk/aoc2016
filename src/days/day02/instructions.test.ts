import {
  prepareChangePosition,
  Instruction,
  toInstruction,
  checkPosition,
} from "./instructions";
import { grid1, grid2 } from "./grids";

describe("Test checkPosition", () => {
  test("Grid 1 top left is true", () => {
    expect(checkPosition({ x: 0, y: 0 }, grid1)).toBeTruthy();
  });
  test("Grid 2 top left is false", () => {
    expect(checkPosition({ x: 0, y: 0 }, grid2)).toBeFalsy();
  });
});

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
    expect(
      prepareChangePosition(grid1)({ x: 1, y: 1 }, Instruction.Up),
    ).toEqual({ x: 1, y: 0 });
  });

  test("Move Right", () => {
    expect(
      prepareChangePosition(grid1)({ x: 1, y: 1 }, Instruction.Right),
    ).toEqual({ x: 2, y: 1 });
  });

  test("Move Down", () => {
    expect(
      prepareChangePosition(grid1)({ x: 1, y: 1 }, Instruction.Down),
    ).toEqual({ x: 1, y: 2 });
  });

  test("Move Left", () => {
    expect(
      prepareChangePosition(grid1)({ x: 1, y: 1 }, Instruction.Left),
    ).toEqual({ x: 0, y: 1 });
  });
});

describe("Move from top left corner", () => {
  test("Move Up, stay", () => {
    expect(
      prepareChangePosition(grid1)({ x: 0, y: 0 }, Instruction.Up),
    ).toEqual({ x: 0, y: 0 });
  });

  test("Move Right", () => {
    expect(
      prepareChangePosition(grid1)({ x: 0, y: 0 }, Instruction.Right),
    ).toEqual({ x: 1, y: 0 });
  });

  test("Move Down", () => {
    expect(
      prepareChangePosition(grid1)({ x: 0, y: 0 }, Instruction.Down),
    ).toEqual({ x: 0, y: 1 });
  });

  test("Move Left, stay", () => {
    expect(
      prepareChangePosition(grid1)({ x: 0, y: 0 }, Instruction.Left),
    ).toEqual({ x: 0, y: 0 });
  });
});

describe("Move from top right corner", () => {
  test("Move Up, stay", () => {
    expect(
      prepareChangePosition(grid1)({ x: 2, y: 0 }, Instruction.Up),
    ).toEqual({ x: 2, y: 0 });
  });

  test("Move Right, stay", () => {
    expect(
      prepareChangePosition(grid1)({ x: 2, y: 0 }, Instruction.Right),
    ).toEqual({ x: 2, y: 0 });
  });

  test("Move Down", () => {
    expect(
      prepareChangePosition(grid1)({ x: 2, y: 0 }, Instruction.Down),
    ).toEqual({ x: 2, y: 1 });
  });

  test("Move Left", () => {
    expect(
      prepareChangePosition(grid1)({ x: 2, y: 0 }, Instruction.Left),
    ).toEqual({ x: 1, y: 0 });
  });
});

describe("Move from bottom right corner", () => {
  test("Move Up", () => {
    expect(
      prepareChangePosition(grid1)({ x: 2, y: 2 }, Instruction.Up),
    ).toEqual({ x: 2, y: 1 });
  });

  test("Move Right, stay", () => {
    expect(
      prepareChangePosition(grid1)({ x: 2, y: 2 }, Instruction.Right),
    ).toEqual({ x: 2, y: 2 });
  });

  test("Move Down, stay", () => {
    expect(
      prepareChangePosition(grid1)({ x: 2, y: 2 }, Instruction.Down),
    ).toEqual({ x: 2, y: 2 });
  });

  test("Move Left", () => {
    expect(
      prepareChangePosition(grid1)({ x: 2, y: 2 }, Instruction.Left),
    ).toEqual({ x: 1, y: 2 });
  });
});

describe("Move from bottom left corner", () => {
  test("Move Up", () => {
    expect(
      prepareChangePosition(grid1)({ x: 0, y: 2 }, Instruction.Up),
    ).toEqual({ x: 0, y: 1 });
  });

  test("Move Right", () => {
    expect(
      prepareChangePosition(grid1)({ x: 0, y: 2 }, Instruction.Right),
    ).toEqual({ x: 1, y: 2 });
  });

  test("Move Down, stay", () => {
    expect(
      prepareChangePosition(grid1)({ x: 0, y: 2 }, Instruction.Down),
    ).toEqual({ x: 0, y: 2 });
  });

  test("Move Left, stay", () => {
    expect(
      prepareChangePosition(grid1)({ x: 0, y: 2 }, Instruction.Left),
    ).toEqual({ x: 0, y: 2 });
  });
});
