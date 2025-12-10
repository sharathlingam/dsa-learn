Array.prototype.swap = function (idx1, idx2) {
    if (isNaN(Number(idx1)) || isNaN(Number(idx2))) throw new Error("Both indexes must be of number");
    let temp = this?.[idx1];
    this[idx1] = this?.[idx2]
    this[idx2] = temp;
}

/**
 * 
 * @param {string} s 
 * @param {number} k 
 */
function reverseString2(s, k) {

    s = s.split("");

    const mid = Math.floor(k / 2);

    for (let i = 0; i <= s.length; i += (2 * k)) {

        for (let j = 0; j < mid; j++) {

            s.swap(i + j, i + k - j - 1)

        }

    }

    return s.join("")

}

console.log("abcdefghij", reverseString2("abcdefghij", 2))