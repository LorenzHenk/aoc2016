import { solve } from "./solver";
import { parseHorizontal } from "./parser";

describe("Part One README example succeeds", () => {
  test("Example fails", () => {
    const input = "5 10 25";

    expect(solve(input, parseHorizontal)).toEqual(0);
  });
});
