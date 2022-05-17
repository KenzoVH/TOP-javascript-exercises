const sumAll = function(firstInteger, secondInteger) {
    let totalSum = 0;
    if (firstInteger > secondInteger) {
        let tempInt = firstInteger;
        firstInteger = secondInteger;
        secondInteger = tempInt;
    } else if (
        firstInteger < 0 || secondInteger < 0 ||
        typeof(firstInteger) != "number" || typeof(secondInteger) != "number"
        ) {
            return "ERROR";
    }
    for (let i = firstInteger; i <= secondInteger; i++) {
        totalSum += i;
    }
    return totalSum;
};

// Do not edit below this line
module.exports = sumAll;
