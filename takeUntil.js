const takeUntil = function(array, callback) {
  if(!array || !callback) {
    return [];
  }
  
  const result = [];
  for (let item of array) {
    if (callback(item)) {
      return result;
    } else {
      result.push(item);
    }
  }

  return result;
};

module.exports = takeUntil;