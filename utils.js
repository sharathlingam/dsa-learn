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
  let p1 = 0,
    p2 = 0,
    finalArr = [];

  while (p1 < nums1.length && p2 < nums2.length) {
    if (nums1[p1] > nums2[p2]) {
      finalArr[finalArr.length] = nums2[p2];
      p2++;
    } else {
      finalArr[finalArr.length] = nums1[p1];
      p1++;
    }
  }

  if (!(p1 === nums1.length - 1)) {
    while (p1 < nums1.length) {
      finalArr[finalArr.length] = nums1[p1];
      p1++;
    }
  } else if (!(p2 === nums2.length - 1)) {
    while (p2 < nums1.length) {
      finalArr[finalArr.length] = nums2[p2];
      p2++;
    }
  }

  return finalArr;
}

module.exports = {
  swapElInArr,
  mergeSortedArrays,
};
