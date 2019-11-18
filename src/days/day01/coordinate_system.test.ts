import { CoordinateSystem, Direction } from "./coordinate_system";

import { Rotation } from "./rotation";

describe("Turning and directions", () => {
  test("Initial direction is North", () => {
    const system = new CoordinateSystem();

    expect(system.Direction).toBe(Direction.North);
  });

  test("After turning right, looking to East", () => {
    const system = new CoordinateSystem();

    system.turnRight();

    expect(system.Direction).toBe(Direction.East);
  });

  test("After turning left, looking to West", () => {
    const system = new CoordinateSystem();

    system.turnLeft();

    expect(system.Direction).toBe(Direction.West);
  });

  test("Turning left twice is the same as turning right twice", () => {
    const leftSystem = new CoordinateSystem();
    const rightSystem = new CoordinateSystem();

    leftSystem.turnLeft();
    leftSystem.turnLeft();

    rightSystem.turnRight();
    rightSystem.turnRight();

    expect(leftSystem.Direction).toEqual(rightSystem.Direction);
  });

  test("Turning left 4 times results in initial direction", () => {
    const system = new CoordinateSystem();

    const initialDirection = system.Direction;

    system.turnLeft();
    system.turnLeft();
    system.turnLeft();
    system.turnLeft();

    expect(system.Direction).toEqual(initialDirection);
  });

  test("Turning right 4 times results in initial direction", () => {
    const system = new CoordinateSystem();

    const initialDirection = system.Direction;

    system.turnRight();
    system.turnRight();
    system.turnRight();
    system.turnRight();

    expect(system.Direction).toEqual(initialDirection);
  });

  test("Use the turn function to turn right", () => {
    const system = new CoordinateSystem();

    system.turn(Rotation.Right);

    expect(system.Direction).toEqual(Direction.East);
  });

  test("Use the turn function to turn left", () => {
    const system = new CoordinateSystem();

    system.turn(Rotation.Left);

    expect(system.Direction).toEqual(Direction.West);
  });
});

describe("Moving and distance", () => {
  test("Not moving", () => {
    const system = new CoordinateSystem();

    expect(system.Distance).toEqual(0);
  });

  test("Moving forward", () => {
    const system = new CoordinateSystem();

    system.move(1);

    expect(system.Distance).toEqual(1);

    system.move(1);

    expect(system.Distance).toEqual(2);
  });

  test("Turning right, then moving forward", () => {
    const system = new CoordinateSystem();

    system.turnRight();
    system.move(1);

    expect(system.Distance).toEqual(1);
  });

  test("Moving forward, turning right, then moving forward", () => {
    const system = new CoordinateSystem();

    system.move(1);
    system.turnRight();
    system.move(1);

    expect(system.Distance).toEqual(2);
  });

  test("Negative X and Y still result in correct absolute distance", () => {
    const system = new CoordinateSystem();

    system.turnLeft();
    system.move(1);
    system.turnLeft();
    system.move(1);

    expect(system.Distance).toEqual(2);
  });

  test("Moving in a circle", () => {
    const system = new CoordinateSystem();

    system.move(1);
    system.turnRight();
    system.move(1);
    system.turnRight();
    system.move(1);
    system.turnRight();
    system.move(1);
    system.turnRight();

    expect(system.Distance).toEqual(0);
  });
});
