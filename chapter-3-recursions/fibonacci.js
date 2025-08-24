function fib(num) {
  //   Recursive way
  if (num <= 1) return num;
  return fib(num - 1) + fib(num - 2);
  // Iterative way
  //   let num1 = 0;
  //   let num2 = 1;
  //   if (num <= 1) return num;
  //   let fib = 0;
  //   for (let i = 0; i < num; i++) {
  //     fib = num1 + num2;
  //     num1 = num2;
  //     num2 = fib;
  //   }
  //   return fib;
}

console.log(fib(100));
