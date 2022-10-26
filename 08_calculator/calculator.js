const add = function (x, y) {
  return x + y;
};

const subtract = function (x, y) {
  return x - y;
};

const sum = function (values) {
  return values.reduce((sum, x) => sum + x, 0);
};

const multiply = function (values) {
  return values.reduce((mul, x) => mul * x, 1);
};

const power = function (x, y) {
  return Math.pow(x, y);
};

const factorial = function (exp) {
  if (exp === 0) return 1;

  let fact = 1;
  for (let i = 1; i <= exp; i++) {
    fact *= i;
  }

  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
