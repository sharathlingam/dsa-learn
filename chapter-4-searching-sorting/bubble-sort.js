function bubbleSort(nums) {

    let isSwapped = false;
    for (let i = 0; i < nums.length - 1; i++) {
        isSwapped = false;
        console.log({ nums, i });

        for (let j = 0; j < nums.length - 1 - i; j++) {

            if (nums[j] > nums[j + 1]) {
                const temp = nums[j + 1];
                nums[j + 1] = nums[j];
                nums[j] = temp;
                isSwapped = true;
            }

        }
        if (!isSwapped) return nums;
    }

    return nums;
}

console.log(bubbleSort([1, 2, 3, 4, 5, 6, 7, 8, 9]));
