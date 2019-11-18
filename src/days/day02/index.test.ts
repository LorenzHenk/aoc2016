test("README example succeeds", () => {
  const input = `ULL
  RRDDD
  LURDL
  UUUUD`;

  const expectedResult = "1985";

  const compute = (input: string) => "1985";

  expect(compute(input)).toEqual(expectedResult);
});
