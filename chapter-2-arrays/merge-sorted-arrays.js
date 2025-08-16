function mergeSortedArrays() {
  const nums1 = [1, 2, 6, 0, 0, 0];
  const nums2 = [2, 3, 5];

  const m = 3;
  const n = 3;

  let p1 = m - 1;
  let p2 = n - 1;

  for (let i = m + n - 1; i >= 0; i--) {
    if (p2 < 0) break;

    if (nums1[p1] > nums2[p2] && p1 >= 0) {
      nums1[i] = nums1[p1];
      p1--;
    } else {
      nums1[i] = nums2[p2];
      p2--;
    }
  }

  console.log(nums1);
}

mergeSortedArrays();
