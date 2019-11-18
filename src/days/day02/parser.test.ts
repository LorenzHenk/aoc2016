import { Instruction } from "./instructions";
import { parseLine, parseInput } from "./parser";

describe("Test parseLine", () => {
  test("parse UDU", () => {
    const input = "UDU";
    const expected: Instruction[] = [
      Instruction.Up,
      Instruction.Down,
      Instruction.Up,
    ];

    expect(parseLine(input)).toEqual(expected);
  });

  test("fail when parsing UFF", () => {
    expect(() => parseLine("UFF")).toThrow();
  });
});

describe("Test parseInput", () => {
  test("Should parse multiple lines", () => {
    const input = ["UDU", "LRL"].join("\n");
    const expected: Instruction[][] = [
      [Instruction.Up, Instruction.Down, Instruction.Up],
      [Instruction.Left, Instruction.Right, Instruction.Left],
    ];

    expect(parseInput(input)).toEqual(expected);
  });

  test("fail when parsing invalid", () => {
    expect(() => parseInput("UFF")).toThrow();
  });
});
