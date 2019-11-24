export const parser = (input: string) =>
  input
    .split("\n")
    .map(line => line.trim())
    .filter(Boolean)
    .map(line => line.split(""));
