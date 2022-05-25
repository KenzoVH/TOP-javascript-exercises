const palindromes = function (sentence) {
    // Strip all punctiation and whitespace
    sentence = sentence.replace(/[^\w\s=']|/g, "");
    sentence = sentence.replace(/\s/g, "");

    // Split sentence into array and reverse it
    const sentenceArray = sentence.toLowerCase().split('');
    const reverseArray = sentence.toLowerCase().split('').reverse();

    // Assemble back into string without commas
    const sentenceStripped = sentenceArray.join().replace(/,/g, "");
    const reverseStripped = reverseArray.join().replace(/,/g, "");

    return sentenceStripped === reverseStripped;
};

// Do not edit below this line
module.exports = palindromes;
