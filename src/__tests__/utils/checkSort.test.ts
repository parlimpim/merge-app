import { isAscSort, isDescSort } from "../../utils";

it("check is asc sort", () => {
  const sorted = [1, 5, 9];
  expect(isAscSort(sorted)).toBeTruthy();

  const unSorted = [3, 10, 2];
  expect(isAscSort(unSorted)).toBeFalsy();
});

it("check is desc sort", () => {
  const sorted = [8, 5, 2];
  expect(isDescSort(sorted)).toBeTruthy();

  const unSorted = [8, 9, 10];
  expect(isDescSort(unSorted)).toBeFalsy();
});
