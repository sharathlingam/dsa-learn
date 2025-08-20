function printToOne(num) {
  if (num === 0) return;

  console.log(num);
  num -= 1;
  printToOne(num);
}

printToOne(10);
