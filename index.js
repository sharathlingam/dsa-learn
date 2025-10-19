/**
 * 
 * @param {number[]} arr 
 */
function isAPalindromeArray(arr) {

    const mid = Math.ceil(arr.length / 2);

    for (let i = 0; i < mid; i++) {
        if (arr[i] !== arr[arr.length - i - 1]) {
            return false;
        }
    }
    return true;
}

// Example/test cases for isAPalindromeArray
const tests = [
    { arr: [1, 2, 3, 3, 2, 1], expected: true, name: 'even-length palindrome' },
    { arr: [1, 2, 3, 2, 1], expected: true, name: 'odd-length palindrome' },
    { arr: [1, 2, 3, 4, 5], expected: false, name: 'not a palindrome' },
    { arr: [], expected: true, name: 'empty array (edge case)' },
    { arr: [42], expected: true, name: 'single element (edge case)' },
    { arr: [1, 2, 2, 1, 0], expected: false, name: 'almost palindrome' },
    { arr: ['a', 'b', 'b', 'a'], expected: true, name: 'string elements palindrome' },
    { arr: [1, 2, '2', 1], expected: false, name: 'type-strict mismatch' }
];

tests.forEach(({ arr, expected, name }, idx) => {
    const result = isAPalindromeArray(arr);
    console.log(`${idx + 1}. ${name}:`, arr, '\n   expected ->', expected, ', actual ->', result, '\n');
});
