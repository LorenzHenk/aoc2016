import { checkSingle, checkAll } from "./checker";

test("checkSingle works fine", () => {
  expect(checkSingle(1, 2, 3)).toBeFalsy();
  expect(checkSingle(3, 2, 1)).toBeTruthy();
  expect(checkSingle(2, 2, 2)).toBeTruthy();
  expect(checkSingle(25, 22, 100)).toBeFalsy();
});

test("checkAll works fine", () => {
  expect(checkAll(1, 2, 3)).toBeFalsy();
  expect(checkAll(2, 2, 2)).toBeTruthy();
  expect(checkAll(25, 22, 100)).toBeFalsy();
  expect(checkAll(7, 3, 9)).toBeTruthy();
});
