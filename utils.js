function swapElInArr(arr, idxOne, idxTwo) {
  const temp = arr[idxOne];
  arr[idxOne] = arr[idxTwo];
  arr[idxTwo] = temp;
  return arr;
}

/**
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 */
function mergeSortedArrays(nums1, nums2) {
  let p1 = 0;
  let p2 = 0;
  const finalArr = [];

  while (p1 < nums1.length && p2 < nums2.length) {
    if (nums1[p1] > nums2[p2]) {
      finalArr.push(nums2[p2]);
      p2++;
    } else {
      finalArr.push(nums1[p1]);
      p1++;
    }
  }

  return [...finalArr, ...nums1.slice(p1), ...nums2.slice(p2)];
}

module.exports = {
  swapElInArr,
  mergeSortedArrays,
};
