const map = (array, callback) => {
  if(!array || !callback) {
    return [];
  }
  
  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }

  return results;
};

module.exports = map;