import { Rotation } from "./rotation";

export enum Direction {
  North,
  East,
  South,
  West,
}

export class CoordinateSystem {
  private x = 0;
  private y = 0;
  private direction = Direction.North;

  public get Direction() {
    return this.direction;
  }

  public get Distance() {
    return Math.abs(this.x) + Math.abs(this.y);
  }

  public get X() {
    return this.x;
  }

  public get Y() {
    return this.y;
  }

  public turnRight() {
    this.direction = (this.direction + 1) % 4;
  }

  public turnLeft() {
    this.direction = (this.direction + 3) % 4;
  }

  public turn(rotation: Rotation) {
    switch (rotation) {
      case Rotation.Left:
        this.turnLeft();
        break;
      case Rotation.Right:
        this.turnRight();
        break;
    }
  }

  public move(steps: number) {
    switch (this.direction) {
      case Direction.North:
        this.y += steps;
        break;
      case Direction.East:
        this.x += steps;
        break;
      case Direction.South:
        this.y -= steps;
        break;
      case Direction.West:
        this.x -= steps;
        break;
    }
  }
}
