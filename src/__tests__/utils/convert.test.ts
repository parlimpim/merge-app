import { stringToListOfNumber } from "../../utils";

it("convert string to list of number", () => {
  // valid case
  const str = "1, 2, 3, 4";
  const nums = [1, 2, 3, 4];

  const result = stringToListOfNumber(str);
  expect(result).toEqual(nums);

  // invalid case
  const invalidStr = "1, 2, 3, a";
  const invalidNums = false;

  const invalidResult = stringToListOfNumber(invalidStr);
  expect(invalidResult).toEqual(invalidNums);
});
