const repeatString = function (repeatString, repetitionNumber) {
  let result = "";

  if (repetitionNumber < 0) return "ERROR";

  for (let i = 0; i < repetitionNumber; i++) {
    result += repeatString;
  }

  return result;
};

// Do not edit below this line
module.exports = repeatString;
