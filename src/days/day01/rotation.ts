export enum Rotation {
  Left = "L",
  Right = "R",
}

export function toRotation(rotation: string): Rotation {
  let result: Rotation;
  switch (rotation) {
    case "L":
      result = Rotation.Left;
      break;
    case "R":
      result = Rotation.Right;
      break;
    default:
      throw new Error("Rotation type is invalid");
  }
  return result;
}
