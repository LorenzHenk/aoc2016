import { prepareHashing } from "./hasher";
import { solvePartOne } from "./solver";

describe("Solve README Part One", () => {
  test("Find first char of password with Door ID abc", () => {
    const doorId = "abc";
    const next = prepareHashing(doorId, 3230000);
    const { index, hash } = next();

    expect(index).toEqual(3231929);
    expect(hash).toMatch(/000001/);
  });

  test("Find second char of password with Door ID abc", () => {
    const doorId = "abc";
    const next = prepareHashing(doorId, 5000000);
    const { index, hash } = next();

    expect(index).toEqual(5017308);
    expect(hash).toMatch(/000008f82/);
  });

  test("Find third char of password with Door ID abc", () => {
    const doorId = "abc";
    const next = prepareHashing(doorId, 5260000);
    const { index, hash } = next();

    expect(index).toEqual(5278568);
    expect(hash).toMatch(/00000f/);
  });

  test("Find password with Door ID abc", () => {
    expect(solvePartOne("abc")).toEqual("18f47a30");
  });
});
