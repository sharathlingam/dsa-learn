// =================================================================
// /**
//  *
//  * @param {number[]} arr
//  */

// function returnIndex(arr, findNumber) {
//   // for (let i = 0; i < arr.length; i++) {
//   //   if (arr[i] === findNumber) return i;
//   // }
//   // return -1;
//   return arr.indexOf(findNumber);
// }

// const sampleNumbers = [3, 7, 1, 9, 4, 12, 8, 5, 2, 10];

// console.log(returnIndex(sampleNumbers, 11));
// =================================================================
// /**
//  *
//  * @param {number[]} params
//  */
// function findNegativeCount(params) {
//   // let count = 0;

//   // for (let i = 0; i < params.length; i++) {
//   //   count = params[i] < 0 ? count + 1 : count;
//   // }

//   // return count;

//   return params.reduce((acc, curr) => acc + (curr < 0 ? 1 : 0), 0);
// }

// const mixedNumbers = [5, -3, 12, -7, 0, 8, -1, 4, -9, 2];

// console.log(findNegativeCount(mixedNumbers));
// =================================================================

// /**
//  *
//  * @param {number[]} params
//  */
// function largestNumberInAnArray(params) {
//   return params.reduce(
//     (acc, curr) => (curr > acc ? curr : acc),
//     Number.NEGATIVE_INFINITY
//   );
//   // let max = Number.NEGATIVE_INFINITY;
//   // for (let i = 0; i < params.length; i++) {
//   //   if (params[i] > max) {
//   //     max = params[i];
//   //   }
//   // }
//   // return max;
// }

// const mixedNumbers = [5, -3, 12, -7, 0, 8, -1, 4, -9, 2];

// console.log(largestNumberInAnArray(mixedNumbers));

// /**
//  *
//  * @param {number[]} params
//  */
// function secondLargest(params) {
//   let firstLargestNum = Number.NEGATIVE_INFINITY;
//   let secondLargestNum = Number.NEGATIVE_INFINITY;

//   for (let index = 0; index < params.length; index++) {
//     const element = params[index];
//     if (element > firstLargestNum) {
//       firstLargestNum = element;
//     } else if (element < firstLargestNum && element > secondLargestNum) {
//       secondLargestNum = element;
//     }
//   }
//   return secondLargestNum;
// }

// const mixedNumbers = [5, -3, 12, -7, 0, 8, -1, 4, -9, 2];

// console.log(secondLargest(mixedNumbers));
