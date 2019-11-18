import {
  checkLocationEqual,
  Location,
  LocationTracker,
} from "./location_tracker";

const LOCATIONS: Location[] = [
  { x: 0, y: 0 },
  { x: 1, y: 0 },
  { x: 1, y: 1 },
  { x: 1, y: 2 },
];

describe("Test checkLocationEqual", () => {
  test("Find equal location", () => {
    expect(checkLocationEqual(LOCATIONS, 1, 1)).toBeTruthy();
    expect(checkLocationEqual(LOCATIONS, 1, 2)).toBeTruthy();
    expect(checkLocationEqual(LOCATIONS, 0, 0)).toBeTruthy();
  });

  test("Return false if no equal location is found", () => {
    expect(checkLocationEqual(LOCATIONS, 1, 7)).toBeFalsy();
    expect(checkLocationEqual(LOCATIONS, 4, 4)).toBeFalsy();
  });
});

describe("Test LocationTracker", () => {
  test("Move forward", () => {
    const locationTracker = new LocationTracker();

    expect(locationTracker.Distance).toEqual(0);

    locationTracker.move(2);

    expect(locationTracker.Distance).toEqual(2);

    locationTracker.move(3);

    expect(locationTracker.X).toEqual(0);
    expect(locationTracker.Y).toEqual(5);
  });

  test("Move forward, then go back", () => {
    const locationTracker = new LocationTracker();

    const startLocation: Location = {
      x: locationTracker.X,
      y: locationTracker.Y,
    };

    locationTracker.move(1);
    locationTracker.turnRight();
    locationTracker.turnRight();
    locationTracker.move(1);

    expect(locationTracker.X).toEqual(startLocation.x);
    expect(locationTracker.Y).toEqual(startLocation.y);

    // additional move, should not change anything
    locationTracker.move(1);

    expect(locationTracker.X).toEqual(startLocation.x);
    expect(locationTracker.Y).toEqual(startLocation.y);
  });
});
