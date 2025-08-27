/**
 * @param {string} sentence 
 */
function reverseWords(sentence) {


    let returnSentence = ""

    for (let i = sentence.length - 1; i >= 0; i--) {

        returnSentence += sentence[i];

    }


    return returnSentence;

}

//For the purpose of user debugging.
console.log(reverseWords("Hello World"))

module.exports = reverseWords