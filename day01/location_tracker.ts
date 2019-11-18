import { CoordinateSystem } from "./coordinate_system";
import { Distance } from "./distance";
import { Rotation } from "./rotation";

export interface Location {
  x: number;
  y: number;
}

export function checkLocationEqual(
  visitedLocations: Location[],
  x: number,
  y: number,
) {
  const equalLocation = visitedLocations.find(
    location => location.x === x && location.y === y,
  );
  return !!equalLocation;
}

/**
 * A special coordinate-system, that also tracks the location
 * Overwrites the `move` and `turn` functions
 * to stop when the current location was visited before
 *
 * @extends CoordinateSystem
 *
 */
export class LocationTracker extends CoordinateSystem {
  private visitedLocations: Location[];
  private locationEqual: boolean;

  constructor() {
    super();
    this.visitedLocations = [];
    this.locationEqual = false;
  }

  public get LocationEqual() {
    if (!this.locationEqual) {
      this.locationEqual = checkLocationEqual(
        this.visitedLocations,
        this.X,
        this.Y,
      );
    }
    return this.locationEqual;
  }

  private addLocation() {
    this.visitedLocations.push({ x: this.X, y: this.Y });
  }

  public move(distance: Distance) {
    // check if the location is equal
    if (!this.LocationEqual) {
      // add the new location, then move
      // order is important
      // the current location should not be in visitedLocations
      let i = 0;
      for (; i < distance && !this.LocationEqual; i++) {
        this.addLocation();
        super.move(1);
      }
    }
  }

  public turn(rotation: Rotation) {
    if (!this.locationEqual) {
      super.turn(rotation);
    }
  }
}
