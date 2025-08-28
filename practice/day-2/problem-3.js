function isArraySorted(nums) {

    if (!Array.isArray(nums) || nums.length < 1) return -1;
    if (nums.length === 1) { return true; }

    for (let i = 0; i < nums.length; i++) {

        if (nums[i] > nums[i + 1]) {
            return false;
        }

    }

    return true;

}

console.log(isArraySorted([1, 2, 3, 4]));
console.log(isArraySorted([4, 3, 2, 1]));
console.log(isArraySorted([1, 1, 2, 2, 3]));
console.log(isArraySorted([1]));
console.log(isArraySorted([]));
console.log(isArraySorted([1, 3, 2, 4]));