let nums = [7, 1, 5, 4, 3, 2, 8];

function selectionSort() {
    for (let i = 0; i < nums.length - 1; i++) {
        let minIdx = i;
        for (let j = i; j < nums.length; j++) {
            if (nums[minIdx] > nums[j]) {
                minIdx = j;
            }
        }
        if (minIdx !== i) {
            let temp = nums[i];
            nums[i] = nums[minIdx];
            nums[minIdx] = temp;
        }
    }
}

selectionSort();

console.log(nums);
