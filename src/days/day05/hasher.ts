import md5 = require("md5");

export interface HashResult {
  hash: string;
  index: number;
}

export const hasher = (doorId: string, index: number = 0): HashResult => {
  let result: string | null = null;
  let i = index - 1;
  while (!result) {
    i++;
    const hash = md5(doorId + i);
    if (hash.startsWith("00000")) {
      result = hash;
    }
  }

  return { hash: result, index: i };
};

export const prepareHashing = (doorId: string, initialIndex: number = 0) => {
  let index = initialIndex;
  return () => {
    const res = hasher(doorId, index);
    index = res.index + 1;
    return res;
  };
};
