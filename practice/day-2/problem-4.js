function findMissingNumberInArray(nums) {

    if (nums.length <= 0) return -1;

    const n = nums.length + 1;
    let predictedSumOfElements = n * ((n + 1) / 2);

    let currSum = 0;

    for (let i = 0; i < nums.length; i++) {
        currSum += nums[i];
    }

    console.log(predictedSumOfElements - currSum);

}