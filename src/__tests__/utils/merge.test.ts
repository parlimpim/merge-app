import { mergeSortedArray } from "../../utils";

it("merge 3 sorted arrays", () => {
  const arr1 = [2, 4, 6];
  const arr2 = [1, 3, 9];
  const arr3 = [5, 10];
  const merge = [1, 2, 3, 4, 5, 6, 9, 10];

  const result = mergeSortedArray(arr1, arr2, arr3);
  expect(result).toEqual(merge);
});
