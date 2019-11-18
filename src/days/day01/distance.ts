export function toDistance(distance: string): number {
  let result: number = parseInt(distance, 10);
  if (isNaN(result) || result < 0) {
    throw new Error(`${distance} is not a number`);
  }
  return result;
}

export type Distance = number;
