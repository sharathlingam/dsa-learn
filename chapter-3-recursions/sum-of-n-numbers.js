function sum(num) {
  if (num < 1) {
    return 0;
  }
  console.log(num);
  return num + sum(num - 1);
}

console.log(sum(10));
