const fibonacci = function(number) {
    // Check for negative numbers
    if (number <= 0) {
        return "OOPS";
    }

    let fibonacciArray = [1, 1];
    for (let i = 1; i <= number; i++) {
        let firstNumber = fibonacciArray[i - 1];
        let secondNumber = fibonacciArray[i];
        let sum = firstNumber + secondNumber;
        fibonacciArray.push(sum);
    }
    return fibonacciArray[number - 1];

};

// Do not edit below this line
module.exports = fibonacci;
