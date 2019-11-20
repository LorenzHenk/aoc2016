import { isLowerCase, normalizeShift, shift, caesar } from "./decipher";

test("isLowerCase works fine", () => {
  expect(isLowerCase("a")).toBeTruthy();
  expect(isLowerCase("m")).toBeTruthy();
  expect(isLowerCase("z")).toBeTruthy();
  expect(isLowerCase("A")).toBeFalsy();
  expect(isLowerCase("M")).toBeFalsy();
  expect(isLowerCase("Z")).toBeFalsy();
});

test("normalizeShift is working fine", () => {
  expect(normalizeShift(1)).toEqual(1);
  expect(normalizeShift(26)).toEqual(0);
  expect(normalizeShift(51)).toEqual(25);
  expect(normalizeShift(-1)).toEqual(25);
  expect(normalizeShift(-25)).toEqual(1);
});

test("shift is working fine", () => {
  expect(shift("a", 1)).toEqual("b");
  expect(shift("a", -1)).toEqual("z");
  expect(shift("z", 1)).toEqual("a");
  expect(shift("z", -1)).toEqual("y");
  expect(shift("a", 0)).toEqual("a");
  expect(shift("a", 5)).toEqual("f");
  expect(shift("z", 5)).toEqual("e");
});

test("caesar is working fine", () => {
  expect(caesar("a", 1)).toEqual("b");
  expect(caesar("aa", -1)).toEqual("zz");
  expect(caesar("zz", 1)).toEqual("aa");
  expect(caesar("", -1)).toEqual("");
  expect(caesar("abc", 0)).toEqual("abc");
  expect(caesar("azby", 5)).toEqual("fegd");
});
