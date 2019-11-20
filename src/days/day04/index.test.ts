import { checker } from "./check";
import { solver } from "./solve";

describe("Part One README", () => {
  test("Sum is 1514", () => {
    const inputs = [
      "aaaaa-bbb-z-y-x-123[abxyz]",
      "a-b-c-d-e-f-g-h-987[abcde]",
      "not-a-real-room-404[oarel]",
      "totally-real-room-200[decoy]",
    ];
    expect(solver(inputs.join("\n"))).toEqual(1514);
  });
});
