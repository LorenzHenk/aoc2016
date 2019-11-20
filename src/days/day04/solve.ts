import { parser } from "./parse";
import { checker } from "./check";
import { caesar } from "./decipher";

export const solvePartOne = (input: string) => {
  const rooms = parser(input);
  const correctRooms = rooms.filter(checker);
  return correctRooms.reduce((prev, curr) => prev + curr.id, 0);
};

export const solvePartTwo = (input: string) => {
  const rooms = parser(input);
  const correctRooms = rooms.filter(checker);

  const results = correctRooms.map(room => ({
    decrypted: caesar(room.letters, room.id),
    id: room.id,
  }));

  const theOne = results.find(res => res.decrypted.startsWith("north"));
  return theOne?.id;
};
