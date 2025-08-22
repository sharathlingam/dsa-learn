function powerOfTwo(number: number): boolean {
  if (number === 0 || number < 0) return false;
  if (number === 1) return true;
  if (number % 2 !== 0) return false;

  return powerOfTwo(number / 2);
}

const num = 1;

console.log(
  powerOfTwo(num)
    ? `The given number ${num} is a power of 2`
    : `The given number ${num} is not a power of 2`
);
