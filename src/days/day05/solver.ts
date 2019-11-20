import { prepareHashing } from "./hasher";

export const solvePartOne = (doorId: string) => {
  let next = prepareHashing(doorId);
  const results = [];
  for (; results.length < 8; ) {
    const { hash } = next();
    results.push(hash[5]);
  }
  return results.join("");
};

export const solvePartTwo = (doorId: string) => {
  let next = prepareHashing(doorId);
  const results = Array.from({ length: 8 });
  for (; results.some(v => v === undefined); ) {
    const { hash } = next();
    const position = parseInt(hash[5]);
    const value = hash[6];
    if (position <= 7 && results[position] === undefined) {
      results[position] = value;
    }
  }
  return results.join("");
};
