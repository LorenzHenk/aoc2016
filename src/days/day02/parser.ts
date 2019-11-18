import { Instruction, toInstruction } from "./instructions";

export const parseLine = (line: string): Instruction[] =>
  line.split("").map(toInstruction);

export const parseInput = (input: string): Instruction[][] =>
  input.split("\n").map(parseLine);
