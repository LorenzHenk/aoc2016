import { solvePartOne, solvePartTwo } from "./solver";

test("Part One example works", () => {
  const input = `eedadn
  drvtee
  eandsr
  raavrd
  atevrs
  tsrnev
  sdttsa
  rasrtv
  nssdts
  ntnada
  svetve
  tesnvt
  vntsnd
  vrdear
  dvrsen
  enarar
  `;

  expect(solvePartOne(input)).toEqual("easter");
});

test("Part Two example works", () => {
  const input = `eedadn
  drvtee
  eandsr
  raavrd
  atevrs
  tsrnev
  sdttsa
  rasrtv
  nssdts
  ntnada
  svetve
  tesnvt
  vntsnd
  vrdear
  dvrsen
  enarar
  `;

  expect(solvePartTwo(input)).toEqual("advent");
});
