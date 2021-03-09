const countLetters = function(stringToCount) {
  if (!stringToCount) {
    return { };
  }
  
  const result = {};
  for (let char of stringToCount) {
    if (result[char]) {
      result[char]++;
    } else {
      result[char] = 1;
    }
  }
  return result;
};

module.exports = countLetters;