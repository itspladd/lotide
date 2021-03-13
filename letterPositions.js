const letterPositions = function(inputStr) {
  if(!inputStr) {
    return {};
  }

  const result = {};
  const noSpaces = inputStr.split(" ").join("");
  for (let i = 0; i < noSpaces.length; i++) {
    if (result[noSpaces[i]]) {
      result[noSpaces[i]].push(i);
    } else {
      result[noSpaces[i]] = [i];
    }
  }
  return result;
};

module.exports = letterPositions;