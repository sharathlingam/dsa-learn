// const strings = ["dog", "racecar", "car"];
const strings = ["flower", "flower", "flower"];

strings.sort();

console.log(strings);

const first = strings[0];
const last = strings[strings.length - 1];
let printStr = "";

for (let i = 0; i < first.length; i++) {
  if (first[i] === last[i]) {
    printStr += first[i];
  } else {
    break;
  }
}

console.log(printStr);
