import { readFileSync } from "fs";

const day = process.argv[2];

const input = readFileSync(`${day}/INPUT`).toString();

type daySolver = (input: string) => any;

import(`./${day}`).then((value: { first: daySolver; second: daySolver }) =>
  console.log(value.first(input), value.second?.(input)),
);
