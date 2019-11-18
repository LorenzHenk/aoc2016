export const grid1: Grid = [
  ["1", "2", "3"],
  ["4", "5", "6"],
  ["7", "8", "9"],
];

export const grid2: Grid = [
  [undefined, undefined, "1", undefined, undefined],
  [undefined, "2", "3", "4", undefined],
  ["5", "6", "7", "8", "9"],
  [undefined, "A", "B", "C", undefined],
  [undefined, undefined, "D", undefined, undefined],
];

export type Cell = string | undefined;
export type Grid = Cell[][];
