const merge = (arr1: number[], arr2: number[]) => {
    let i = 0;
    let j = 0;
    const result: number[] = [];

    while (i < arr1.length && j < arr2.length) {
        if (arr2[j] > arr1[i]) {
            result.push(arr1[i])
            i += 1
        } else {
            result.push(arr2[j])
            j +=  1
        }
    }

    while (i < arr1.length) {
        result.push(arr1[i])
        i += 1
    }

    while(j < arr2.length) {
        result.push(arr2[j])
        j += 1
    }

    return result
}

export const mergeSort = (nums1: number[], nums2: number[], nums3: number[]) => {
    const mergeNums = merge(nums2, nums3);
    const reversedNums1 = nums1.slice().reverse();

    if (reversedNums1.slice(0)[0] >= mergeNums.slice(-1)[0]) {
        return mergeNums.concat(reversedNums1);
    }

    return merge(mergeNums, reversedNums1);
}
