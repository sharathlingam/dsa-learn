const { swapElInArr } = require('../utils');

let nums = [7, 1, 4, 3, 5, 2];


function insertionSort() {

    for(let i = 1; i < nums.length; i++) {
        const start = i - 1;
        let checkingEl = i;
        for (let j = start; j >= 0; j--) {
           
            swapElInArr(nums, checkingEl, j);
            checkingEl = j;
            if(nums[checkingEl] > nums[j - 1] || j === 0) break;
            
        }
    }

    console.log(nums);

}

insertionSort();