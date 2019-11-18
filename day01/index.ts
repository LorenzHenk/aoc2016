import { CoordinateSystem } from "./coordinate_system";
import { Wrapper } from "./parser";
import { LocationTracker } from "./location_tracker";

export const first = (input: string) => {
  const system = new CoordinateSystem();
  const wrappedSystem = new Wrapper(system);

  wrappedSystem.run(input);

  return system.Distance;
};

export const second = (input: string) => {
  const system = new LocationTracker();
  const wrappedSystem = new Wrapper(system);

  wrappedSystem.run(input);

  return system.Distance;
};
