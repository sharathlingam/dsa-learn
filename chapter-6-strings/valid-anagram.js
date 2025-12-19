/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var validAnagram = function (s, t) {

    if (s.length !== t.length) return false;

    const map = {}

    for (const char of s) {
        if (!map[char]) return map[char] = 1;
        else map[char]++;
    }

    for (const char of t) {
        if (!map[char]) return false;
        map[char]--;
    }


    return true;

};



// Examples / quick tests
const tests = [
    { s: 'anagram', t: 'nagaram', expected: true },
    { s: 'rat', t: 'car', expected: false },
    { s: '', t: '', expected: true },
    { s: 'aabbcc', t: 'abcabc', expected: true },
    { s: 'a', t: 'aa', expected: false },
    { s: 'déjà', t: 'jàdé', expected: true } // unicode example
];

for (const { s, t, expected } of tests) {
    const result = validAnagram(s, t);
    console.log(`${JSON.stringify(s)} vs ${JSON.stringify(t)} -> ${result} (expected: ${expected})`);
}