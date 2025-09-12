/**
 *
 * @param {number} num
 * @returns -1 | boolean
 */
function palindrome(num) {
  if (!num) {
    console.log("Invalid Input Given");
    return -1;
  }

  let tempNum = num;
  let resultNum = 0;

  while (tempNum > 0) {
    resultNum = resultNum * 10 + (tempNum % 10);
    tempNum = Math.floor(tempNum / 10);
  }
  return resultNum === num;
}

console.log(palindrome(121));
