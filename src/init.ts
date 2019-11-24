import { writeFileSync, mkdirSync } from "fs";

import { join } from "path";

import axios from "axios";
import { JSDOM } from "jsdom";
import turndown from "turndown";

import { log } from "./logging";

const turner = new turndown({
  fence: "```",
  headingStyle: "atx",
  codeBlockStyle: "fenced",
  bulletListMarker: "-",
  emDelimiter: "**" as any, // format italic as bold too
});

export default async (day: string) => {
  const value = (day.match(/day(\d+)/) ?? day.match(/(\d+)/))?.[1];
  if (!value) {
    log.error(`Invalid input "${day}"`);
    return;
  }

  const parsedDay = parseInt(value);

  const directoryName = `day${parsedDay.toString().padStart(2, "0")}`;

  log.info("Fetching README");
  // retrieve README for that day
  const { data: readmeData } = await axios.get(
    `https://adventofcode.com/${process.env.YEAR}/day/${parsedDay}`,
  );

  log.verbose("Transforming README");
  const dom = new JSDOM(readmeData);

  const article = dom.window.document.getElementsByClassName("day-desc")[0];

  const markdown = turner.turndown(article.innerHTML) + "\n";

  const basePath = join(__dirname, "days", directoryName);
  mkdirSync(basePath);

  writeFileSync(join(basePath, "README.md"), markdown);
  log.log("success", "Saved instructions in README.md");

  log.info("Retrieve input data");
  if (process.env.SESSION) {
    const { data: inputData } = await axios.get(
      `https://adventofcode.com/2016/day/${parsedDay}/input`,
      {
        headers: {
          Cookie: `session=${process.env.SESSION}`,
        },
      },
    );

    writeFileSync(
      join(basePath, "input.ts"),
      `export default \`${inputData}\``,
    );
    log.log("success", "Saved input data");
  } else {
    log.warn(
      "Environment variable `SESSION` missing, cannot retrieve input data",
    );
  }
};
