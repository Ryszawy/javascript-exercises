const reverseString = function (originalString) {
  let result = "";

  for (let i = originalString.length; i >= 0; i--) {
    result += originalString.charAt(i);
  }

  return result;
};

// Do not edit below this line
module.exports = reverseString;
