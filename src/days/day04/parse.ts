export interface Room {
  letters: string[];
  id: number;
  checksum: string;
  name: string;
}

const lineRegex = /(\w+(?:-\w+)+)-(\d+)\[(\w{5})\]/;

export const parseLine = (input: string): Room => {
  const matches = input.match(lineRegex)?.slice(1);
  if (!matches) {
    throw new Error("Line is not valid");
  }
  return {
    letters: matches[0].split("").filter(c => c !== "-"),
    id: parseInt(matches[1], 10),
    checksum: matches[2],
    name: matches[0],
  };
};

export const parser = (input: string) => input.split("\n").map(parseLine);
