export const isAscSort = (nums: number[]) => {
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) return false;
  }
  return true;
};

export const isDescSort = (nums: number[]) => {
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) return false;
  }
  return true;
};
