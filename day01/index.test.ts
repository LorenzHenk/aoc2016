import { CoordinateSystem } from "./coordinate_system";
import { Wrapper } from "./parser";

test("Following R2, L3 leaves you 2 blocks East and 3 blocks North, or 5 blocks away.", async () => {
  const INPUT = "R2, L3";

  const system = new CoordinateSystem();
  const parser = new Wrapper(system);

  parser.run(INPUT);

  expect(system.X).toEqual(2);
  expect(system.Y).toEqual(3);
  expect(system.Distance).toEqual(5);
});

test("R2, R2, R2 leaves you 2 blocks due South of your starting position, which is 2 blocks away.", async () => {
  const INPUT = "R2, R2, R2";

  const system = new CoordinateSystem();
  const parser = new Wrapper(system);

  parser.run(INPUT);

  expect(system.X).toEqual(0);
  expect(system.Y).toEqual(-2);
  expect(system.Distance).toEqual(2);
});

test("R5, L5, R5, R3 leaves you 12 blocks away.", async () => {
  const INPUT = "R5, L5, R5, R3";

  const system = new CoordinateSystem();
  const parser = new Wrapper(system);

  parser.run(INPUT);

  expect(system.Distance).toEqual(12);
});
