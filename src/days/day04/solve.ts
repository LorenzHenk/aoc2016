import { parser } from "./parse";
import { checker } from "./check";

export const solver = (input: string) => {
  const rooms = parser(input);
  const correctRooms = rooms.filter(checker);
  return correctRooms.reduce((prev, curr) => prev + curr.id, 0);
};
