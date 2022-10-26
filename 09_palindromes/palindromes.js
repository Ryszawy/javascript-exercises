const palindromes = function (word) {
  word = word.toLowerCase().replace(/[^a-z]/g, "");
  word = word.split("");
  for (let i = 0, j = word.length - 1; ; i++, j--) {
    if (i >= j) break;
    if (word[i] != word[j]) return false;
  }

  return true;
};

// Do not edit below this line
module.exports = palindromes;
