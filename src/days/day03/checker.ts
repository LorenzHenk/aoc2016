export const checkSingle = (side1: number, side2: number, side3: number) =>
  side1 + side2 > side3;

export const checkAll = (side1: number, side2: number, side3: number) => {
  return [
    checkSingle(side1, side2, side3),
    checkSingle(side1, side3, side2),
    checkSingle(side2, side3, side1),
  ].every(Boolean);
};
