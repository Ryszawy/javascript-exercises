const sumAll = function (firstValue, secondValue) {
  let result = 0;

  if (firstValue < 0 || secondValue < 0) return "ERROR";

  if (typeof firstValue === "string" || typeof secondValue === "string")
    return "ERROR";

  if (Array.isArray(firstValue) || Array.isArray(secondValue)) return "ERROR";

  if (firstValue > secondValue) {
    let temp = firstValue;
    firstValue = secondValue;
    secondValue = temp;
  }

  for (let i = firstValue; i <= secondValue; i++) {
    result += i;
  }

  return result;
};

// Do not edit below this line
module.exports = sumAll;
