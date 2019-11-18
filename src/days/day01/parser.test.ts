import { parseTask, parseTasks, Task } from "./parser";
import { Rotation } from "./rotation";

describe("Test parseTask", () => {
  test("parse R1", () => {
    const input = "R1";

    const result = parseTask(input);

    const expected: Task[] = [{ rotation: Rotation.Right }, { distance: 1 }];

    expect(result).toEqual(expected);
  });

  test("parse L3", () => {
    const input = "L3";

    const result = parseTask(input);

    const expected: Task[] = [{ rotation: Rotation.Left }, { distance: 3 }];

    expect(result).toEqual(expected);
  });

  test("fail on RR", () => {
    const input = "RR";

    const result = () => parseTask(input);

    expect(result).toThrow();
  });

  test("fail on R1L2", () => {
    const input = "RL2";

    const result = () => parseTask(input);

    expect(result).toThrow();
  });
});

describe("Test parseTasks", () => {
  test("Can parse single taskchain", () => {
    const input = "R1";

    const result = parseTasks(input);

    const expected: Task[] = [{ rotation: Rotation.Right }, { distance: 1 }];

    expect(result).toEqual(expected);
  });

  test("Can parse multiple taskchains", () => {
    const input = "R1, L2";

    const result = parseTasks(input);

    const expected: Task[] = [
      { rotation: Rotation.Right },
      { distance: 1 },
      { rotation: Rotation.Left },
      { distance: 2 },
    ];

    expect(result).toEqual(expected);
  });

  test("Throws on invalid input", () => {
    const input = "invalid";

    const result = () => parseTasks(input);

    expect(result).toThrow();
  });
});
