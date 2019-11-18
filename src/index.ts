import program from "commander";

import chalk from "chalk";
import { log } from "./logging";
import { runDay } from "./run";

program
  .version("1.0.0")
  .option("-1, --one", "Run Part One", false)
  .option("-2, --two", "Run Part Two", false)
  .arguments("[day]")
  .description("Advent of Code runner")
  .action((day: string | undefined, options) => {
    // if day is undefined, run all days with all parts
    if (day === undefined) {
      // TODO
      log("Running all days...", "info");
      console.log(chalk.bgRed.bold("NOT IMPLEMENTED"));
    } else {
      // else run the selected day
      const parsedDay = parseInt(day);
      let path = day;
      if (!isNaN(parsedDay)) {
        path = `day${day.padStart(2, "0")}`;
      }

      runDay(path, { runPartOne: options.one, runPartTwo: options.two });
    }
  })
  .parse(process.argv);
