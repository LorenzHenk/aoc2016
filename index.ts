import { readFileSync } from "fs";

const day = process.argv[2];

const input = readFileSync(`${day}/INPUT`).toString();

import(`./${day}`).then((value: { default: (input: string) => any }) =>
  console.log(value.default(input)),
);
