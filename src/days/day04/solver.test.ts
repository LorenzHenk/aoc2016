import { checker } from "./check";
import { parseLine } from "./parse";
import { solvePartTwo } from "./solve";
import { caesar } from "./decipher";

describe("Part One", () => {
  test("aaaaa-bbb-z-y-x-123[abxyz] is real", () => {
    const input = "aaaaa-bbb-z-y-x-123[abxyz]";
    expect(checker(parseLine(input))).toBeTruthy();
  });

  test("a-b-c-d-e-f-g-h-987[abcde] is real", () => {
    const input = "a-b-c-d-e-f-g-h-987[abcde]";
    expect(checker(parseLine(input))).toBeTruthy();
  });

  test("not-a-real-room-404[oarel] is real", () => {
    const input = "not-a-real-room-404[oarel]";
    expect(checker(parseLine(input))).toBeTruthy();
  });

  test("totally-real-room-200[decoy] is decoy", () => {
    const input = "totally-real-room-200[decoy]";
    expect(checker(parseLine(input))).toBeFalsy();
  });
});

describe("Part Two", () => {
  test("qzmt-zixmtkozy-ivhz-343 stands for 'very encrypted name'", () => {
    const input = "qzmt-zixmtkozy-ivhz-343[zimth]";
    const room = parseLine(input);
    expect(caesar(room.letters, room.id)).toEqual("veryencryptedname");
  });
});
