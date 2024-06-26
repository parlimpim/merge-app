export const mergeSortedArray = (arr1: number[], arr2: number[], arr3: number[]) => {
  let i = 0, j = 0, k = 0;
  let val1, val2, val3;
  const MAX = 2**31 - 1;
  const result: number[] = [];
  
  while (i < arr1.length || j < arr2.length || k < arr3.length) {
    val1 = i >= arr1.length ? MAX : arr1[i];
    val2 = j >= arr2.length ? MAX : arr2[j];
    val3 = k >= arr3.length ? MAX : arr3[k];

    if (val1 < val2 && val1 < val3) {
      result.push(val1);
      i += 1;
    } else if (val2 < val1 && val2 < val3) {
      result.push(val2);
      j += 1;
    } else {
      result.push(val3);
      k += 1;
    } 
  }

  return result;
};
