const removeFromArray = function (array, ...elements) {
  let result = Array.from(array);

  for (const elem of elements) {
    let tempArr = new Array();
    for (let i = 0; i < result.length; i++) {
      if (result[i] !== elem) {
        tempArr.push(result[i]);
      }
    }

    result = Array.from(tempArr);
    tempArr = [];
  }

  return result;
};

// Do not edit below this line
module.exports = removeFromArray;
