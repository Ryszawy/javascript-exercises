const fibonacci = function (thNumber) {
  if (thNumber < 0) return "OOPS";
  if (thNumber === 0) return 0;
  let a = 0;
  let b = 1;
  for (let i = 1; i < thNumber; i++) {
    const temp = b;
    b = a + b;
    a = temp;
  }
  return b;
};

// Do not edit below this line
module.exports = fibonacci;
