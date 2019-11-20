import { checker } from "./check";

describe("Test checker", () => {
  test("Checker works", () => {
    expect(
      checker({
        id: 1,
        letters: ["a", "a", "b", "c", "a", "e", "d"],
        checksum: "abcde",
      }),
    ).toBeTruthy();
  });
});
