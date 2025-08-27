// const nums = [1, 5, 2, 7, 3, 6, 4, 9];
const nums = [7, 7, 7, 7, 7, 7, 7, 7];

function findSecondLargest(nums) {

    if (nums.length < 2) return -1;

    let firstlargest = -Infinity;
    let secondLargest = -Infinity;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > firstlargest) {
            secondLargest = firstlargest
            firstlargest = nums[i];
        }
    }

    console.log(secondLargest === -Infinity ? -1 : secondLargest);

}

findSecondLargest(nums);