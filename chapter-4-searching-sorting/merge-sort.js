const { mergeSortedArrays } = require("../utils");

/**
 * @param {number[]} nums
 */
function mergeSort(nums) {
  const len = nums.length;

  if (len <= 1) return nums;

  const halfLen = Math.floor(len / 2);

  const firstHalf = mergeSort(nums.slice(0, halfLen));

  const secondHalf = mergeSort(nums.slice(halfLen));

  return mergeSortedArrays(firstHalf, secondHalf);
}

console.log("Sorted Array", mergeSort([3, 1, 6, 2, 7]));
