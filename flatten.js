//TODO: Make this work with arbitrarily nested arrays.

const flatten = function(arrayToFlatten) {
  if (!arrayToFlatten) {
    return [];
  }

  let flattenedArray = [];
  for (let i = 0; i < arrayToFlatten.length; i++) {
    if (Array.isArray(arrayToFlatten[i])) {
      for (let j = 0; j < arrayToFlatten[i].length; j++) {
        flattenedArray.push(arrayToFlatten[i][j]);
      }
    } else {
      flattenedArray.push(arrayToFlatten[i]);
    }
  }
  
  return flattenedArray;
};

module.exports = flatten;