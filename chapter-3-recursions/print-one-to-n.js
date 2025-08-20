const num = 10;

function printOneToN(n) {
  if (n > num) return;

  console.log(n++);

  printOneToN(n);
}

printOneToN(1);
