const { swapElInArr } = require('../utils');

function bubbleSort(nums) {

    let isSwapped = false;
    for (let i = 0; i < nums.length - 1; i++) {
        isSwapped = false;
        console.log({ nums, i });

        for (let j = 0; j < nums.length - 1 - i; j++) {

            if (nums[j] > nums[j + 1]) {
                swapElInArr(nums, j + 1, j)
                isSwapped = true;
            }

        }
        if (!isSwapped) return nums;
    }

    return nums;
}

console.log(bubbleSort([7, 5, 2, 6, 1, 3, 4, 9, 8]));
