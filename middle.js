const middle = function(array) {
  //Return an empty array if the input is too short or if there's no input
  if (!array || array.length < 3) {
    return [];
  }
  //Divide the length of the array by two and round down to find either the middle index (for an odd-numbered array) or the index right after the middle (for an even-numbered array)
  let middleInt = Math.floor(array.length / 2);
  return (array.length % 2) ? [array[middleInt]] : [array[middleInt - 1], array[middleInt]];
};

module.exports = middle;