const findKey = function(object, callback) {
  if (!object || !callback) {
    return undefined;
  }
  
  for (let key in object) {
    if (callback(object[key])) {
      return key;
    }
  }

  return undefined;
};


module.exports = findKey;