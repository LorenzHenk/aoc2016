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

export const parse = (input: string): Triangle[] =>
  input
    .split("\n")
    .map(v => v.trim())
    .filter(Boolean)
    .map(
      line =>
        line.split(/ +/).map(v => parseInt(v, 10)) as [number, number, number],
    )
    .map(toTriangle);
