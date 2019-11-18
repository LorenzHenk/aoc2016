import { readFileSync } from "fs";
import path from "path";

import { DaySolver, Day } from "./types";
import { log } from "./logging";

import * as days from "./days";

export const runDay = (
  day: string,
  options: { runPartOne: boolean; runPartTwo: boolean },
) => {
  log(`Running ${day}`, "info");
  log("Gathering input", "info");

  const theDay: Day = (days as any)[day];
  if (!theDay) {
    log("Day not found", "warn");
    return;
  }
  const { partOne, partTwo, input } = theDay;
  let { runPartOne, runPartTwo } = options;

  if (!options.runPartOne && !options.runPartTwo) {
    log("No part selected, running part one and part two.", "warn");
    runPartOne = true;
    runPartTwo = true;
  }

  if (runPartOne) {
    runPart({ part: partOne, name: "one", input });
  }
  if (runPartTwo) {
    runPart({ part: partTwo, name: "two", input });
  }
};

interface RunPartArgs {
  part?: DaySolver;
  name: string;
  input: string;
}
type RunPart = (args: RunPartArgs) => void;
export const runPart: RunPart = ({ part, name, input }) => {
  if (part) {
    log(`Running part ${name}`, "info");
    const result = part(input);
    log(result, "success");
  } else {
    log(`Part ${name} not found`, "warn");
  }
};
