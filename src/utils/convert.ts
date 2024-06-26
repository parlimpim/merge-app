export const stringToListOfNumber = (numsStr: string) => {
  const arr = numsStr.split(",");
  const nums: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    const s = arr[i].trim();
    if (!s) continue;

    const num = parseInt(s);
    if (num !== 0 && !num) return false;

    nums.push(num);
  }
  return nums;
};
