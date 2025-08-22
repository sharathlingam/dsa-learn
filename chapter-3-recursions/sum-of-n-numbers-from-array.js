// My Solution:
// let n = 0;

// function sum(arr) {
//   if (arr.length === n) {
//     return 0;
//   }

//   if (arr?.length === 1) {
//     return arr[0];
//   }

//   n++;

//   return arr[n - 1] + sum(arr);
// }

// console.log(sum([1, 2, 3, 4, 5]));

// AI Solution:
// Use n based on functional scope and not global scope

function sum(arr, n = 0) {
  if (arr.length === n) {
    return 0;
  }

  return arr[n] + sum(arr, n + 1);
}

console.log(sum([1, 2, 3, 4, 5]));
