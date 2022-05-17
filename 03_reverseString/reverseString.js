const reverseString = function(string) {
    let stringArray = string.split('');
    stringArray = stringArray.reverse();
    let output = stringArray.join();
    output = output.replace(/,/g, "")
    return output;
};

// Do not edit below this line
module.exports = reverseString;
