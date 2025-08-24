function linSearch(arr, num) {
  if (!arr || arr?.length === 0) return -1;

  for (i = 0; i < arr.length; i++) {
    if (num === arr[i]) return i;
  }

  return -1;
}

console.log(linSearch([1, 4, 5, 56, 10, 7, 4, 2], 10));
