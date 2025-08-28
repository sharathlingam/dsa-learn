function moveZeroesToEnd(nums) {

    if(nums.length <= 0) return;

    let variablePos = 0;

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !==0) {
            nums[variablePos] = nums[i];
            variablePos++;
        }
    }

    while(variablePos < nums.length) {
        nums[variablePos] = 0;
        variablePos++;
    }

}

console.log("Test case 1:", [0,1,0,3,12]);
let arr1 = [0,1,0,3,12];
moveZeroesToEnd(arr1);
console.log("Result:", arr1);

console.log("Test case 2:", [0,0,0,0]);
let arr2 = [0,0,0,0];
moveZeroesToEnd(arr2);
console.log("Result:", arr2);

console.log("Test case 3:", [1,2,3,4]);
let arr3 = [1,2,3,4];
moveZeroesToEnd(arr3);
console.log("Result:", arr3);

console.log("Test case 4:", []);
let arr4 = [];
moveZeroesToEnd(arr4);
console.log("Result:", arr4);

console.log("Test case 5:", [0,0,1]);
let arr5 = [0,0,1];
moveZeroesToEnd(arr5);
console.log("Result:", arr5);