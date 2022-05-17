const ftoc = function(temp) {
  let tempCelcius;
  tempCelcius = (temp - 32) * (5/9);
  tempCelcius = Math.round(tempCelcius * 10) / 10;
  return tempCelcius; 
};

const ctof = function(temp) {
  let tempFahr;
  tempFahr = temp * (9/5) + 32;
  tempFahr = Math.round(tempFahr * 10) / 10;
  return tempFahr;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
