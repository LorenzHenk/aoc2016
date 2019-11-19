import { solve } from "./solver";

describe("Part One README example succeeds", () => {
  test("Example fails", () => {
    const input = "5 10 25";

    expect(solve(input)).toEqual(0);
  });
});
