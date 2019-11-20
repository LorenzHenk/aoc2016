import { parseLine, Room } from "./parse";

describe("Test parseLine", () => {
  test("parseLine works fine", () => {
    expect(parseLine("asdf-asdd-1353545[asdfg]")).toEqual({
      id: 1353545,
      checksum: "asdfg",
      letters: ["a", "s", "d", "f", "a", "s", "d", "d"],
    } as Room);
  });

  test("parseLine throws on missing id", () => {
    expect(() => parseLine("asd[asdfg]")).toThrow();
  });

  test("parseLine throws on missing letters", () => {
    expect(() => parseLine("1234[asdfg]")).toThrow();
  });

  test("parseLine throws on missing checksum", () => {
    expect(() => parseLine("asd-123[asdfg]")).toThrow();
  });
});
