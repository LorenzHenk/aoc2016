import { solver } from "./solver";
import { grid1, grid2 } from "./grids";

test("Solve simple movement", () => {
  const input = ["UDU", "RDR", "LRLLLD"].join("\n");
  expect(solver(input, grid1)).toEqual("267");
});

test("Solve complex movement", () => {
  const input = ["UDU", "RDR", "LRLLLD"].join("\n");
  expect(solver(input, grid2)).toEqual("39A");
});
