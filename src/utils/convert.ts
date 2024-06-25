export const stringToListOfNumber = (numsStr: string) => {
    const arr = numsStr.split(",");
    const nums: number[] = []
    for (let i = 0; i < arr.length; i++) {
        const num = parseInt(arr[i].trim());
        if (!num) return false;
        nums.push(num);
    }

    return nums;
}
