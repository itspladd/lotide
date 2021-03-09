const eqObjects = require("./eqObjects");

const findKeyByValue = function(object, value) {
  //Test for value === undefined because 0 or null or empty string is a valid value to llok for!!
  if (!object || value === undefined) {
    return undefined;
  }
  
  const keys = Object.keys(object);
  for (let key of keys) {
    if (object[key] === value) {
      return key;
    } else if (eqObjects(object[key], value)) {
      return key;
    }
  }

  return undefined;
};

module.exports = findKeyByValue;