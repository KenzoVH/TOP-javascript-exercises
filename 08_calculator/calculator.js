const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	const totalSum = array.reduce((total, number) => {
    return total + number;
  }, 0);
  return totalSum;
};

const multiply = function(array) {
  const totalMultiplied = array.reduce((total, number) => {
    return total * number;
  }, 1);
  return totalMultiplied;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
	if (a === 0) {
    return 1;
  } else if (a > 0) {
    let num = 1;
    for (let i = a; i > 0; i--) {
      num = num * i;
    }
    return num;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
