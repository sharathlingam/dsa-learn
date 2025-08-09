function countDigits(number) {
  let counter = 0;
  let n = Math.abs(number);

  if (number === 0) {
    return 1;
  }

  while (n > 0) {
    n = Math.floor(n / 10);
    counter++;
  }

  console.log("Number of digits: ", counter);
}

countDigits(-1);
