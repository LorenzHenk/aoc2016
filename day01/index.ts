import { CoordinateSystem } from "./coordinate_system";
import { Wrapper } from "./parser";

export default (input: string) => {
  const system = new CoordinateSystem();
  const wrappedSystem = new Wrapper(system);

  wrappedSystem.run(input);

  return system.Distance;
};
