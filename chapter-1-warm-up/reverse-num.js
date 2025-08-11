function reverseNum(n) {
  let temp = Math.abs(n);

  let rev = 0;

  while (temp > 0) {
    rev = rev * 10 + (temp % 10);
    temp = Math.floor(temp / 10);
  }

  return n > 0 ? rev : -rev;
}

console.log(reverseNum(163));
