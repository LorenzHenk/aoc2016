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
