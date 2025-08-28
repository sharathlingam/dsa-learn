function mergeSort(nums1, nums2) {
    let final = [];
    let nums1P = 0, nums2P = 0;

    while (nums1P < nums1.length && nums2P < nums2.length) {
        if (nums1[nums1P] < nums2[nums2P]) {
            final.push(nums1[nums1P]);
            nums1P++;
        } else {
            final.push(nums2[nums2P]);
            nums2P++;
        }
    }

    // Add remaining elements from nums1
    while (nums1P < nums1.length) {
        final.push(nums1[nums1P]);
        nums1P++;
    }

    // Add remaining elements from nums2
    while (nums2P < nums2.length) {
        final.push(nums2[nums2P]);
        nums2P++;
    }

    return final;
}

// Test cases
console.log(mergeSort([1,3,5], [2,4,6])); // [1,2,3,4,5,6]
console.log(mergeSort([1,2,3], [4,5,6])); // [1,2,3,4,5,6]
console.log(mergeSort([], [1,2,3])); // [1,2,3]
console.log(mergeSort([1,2,3], [])); // [1,2,3]
console.log(mergeSort([1,1,2], [1,2,2])); // [1,1,1,2,2,2]

