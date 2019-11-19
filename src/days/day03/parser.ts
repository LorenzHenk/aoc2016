import { zip } from "lodash";

export interface Triangle {
  side1: number;
  side2: number;
  side3: number;
}

export const toTriangle = ([side1, side2, side3]: [
  number,
  number,
  number,
]) => ({
  side1,
  side2,
  side3,
});

export type Parser = (input: string) => Triangle[];

export const parse = (input: string) =>
  input
    .split("\n")
    .map(v => v.trim())
    .filter(Boolean)
    .map(
      line =>
        line.split(/ +/).map(v => parseInt(v, 10)) as [number, number, number],
    );

export const parseHorizontal: Parser = input => parse(input).map(toTriangle);

export const parseVertical: Parser = input => {
  const parsed = parse(input);
  const result = [];

  for (let i = 2; i < parsed.length; i += 3) {
    result.push(
      ...(zip(parsed[i - 2], parsed[i - 1], parsed[i]) as [
        number,
        number,
        number,
      ][]).map(toTriangle),
    );
  }

  return result;
};
