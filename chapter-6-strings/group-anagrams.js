/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {

    // if(strs.length === 1) return [[strs[0]]];

    // const map = {}

    // for(let i = 0; i < strs.length; i++) {

    //     const item = strs[i];
    //     const sorted = item.split("").sort().join();

    //     if(map[sorted]) {
    //         map[sorted].push(item);
    //     } else {
    //         map[sorted] = [ item ];
    //     }

    // }

    // return Object.values(map);


    // Better approach: Hashkey approach

    const map = {};

    for (let i = 0; i < strs.length; i++) {

        let freqArray = Array(26).fill(0);
        const s = strs[i];

        for (let j = 0; j < s.length; j++) {

            let index = s[j].charCodeAt() - 'a'.charCodeAt();
            ++freqArray[index];

        }

        let key = "";

        for (let j = 0; j < 26; j++) {

            key += `${String.fromCharCode(j)}${freqArray[j]}`;

        }

        if (map[key]) {
            map[key].push(s);
        } else {
            map[key] = [s];
        }

    }

    return Object.values(map);


};


console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));