function removeDuplicates(nums) {
  let x = 0;
  for (let index = 0; index < nums.length; index++) {
    if (nums[index] > nums[x]) {
      x++;
      nums[x] = nums[index];
    }
  }

  console.log({ nums });

  return x + 1;
}

// const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
// const expectedNums = [0, 1, 2, 3, 4];
const nums = [1, 2, 2];
const expectedNums = [1, 2];

const k = removeDuplicates(nums);

console.log({ k });

for (let i = 0; i < k; i++) {
  if (nums[i] === expectedNums[i]) {
    console.log(true);
  }
}
