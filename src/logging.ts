import chalk from "chalk";

export const log = (
  text: string,
  severity: "success" | "warn" | "error" | "info" = "info",
) => {
  let color: chalk.Chalk;
  switch (severity) {
    case "warn":
      color = chalk.yellow;
      break;
    case "success":
      color = chalk.green;
      break;
    case "error":
      color = chalk.red;
      break;
    default:
      color = chalk.white;
  }
  console.log(color(text));
};
