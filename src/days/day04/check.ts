import { countBy, invertBy } from "lodash";

import { Room } from "./parse";

export const checker = (room: Room): boolean => {
  const counted = countBy(room.letters);

  const checksum = Object.keys(counted)
    .sort((a, b) => {
      const vA = counted[a];
      const vB = counted[b];

      if (vA === vB) {
        if (a > b) {
          return 1;
        } else {
          return -1;
        }
      } else if (vA < vB) {
        return 1;
      } else {
        return -1;
      }
    })
    .slice(0, 5)
    .join("");

  return checksum === room.checksum;
};
