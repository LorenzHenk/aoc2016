import { solver } from "./solver";

test("Solve simple movement", () => {
  const input = ["UDU", "RDR", "LRLLLD"].join("\n");
  expect(solver(input)).toEqual("267");
});
