const eqArrays = require("./eqArrays");

const eqObjects = function(object1, object2) {
  // Are they both even objects?
  if (!(object1 instanceof Object) || !(object2 instanceof Object)) {
    return undefined;
  }
  
  const obj1Keys = Object.keys(object1);
  const obj2Keys = Object.keys(object2);
  //If they're not the same size, then they're defintely not equal.
  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }
  //Assume that the objects match. Return false as soon as we find a single difference.
  //Since the keys must be identical, then we must be able to access object2 data with the key from object1.
  //And since the values must be identical, then the value at object2[key1] must be the same as the value at val1.
  //So if they're not the same, the objects aren't equal.
  for (let key1 of obj1Keys) {
    const val1 = object1[key1];
    const val2 = object2[key1];

    //Are they both non-array objects, or arrays?
    const bothObjects = !Array.isArray(val1) && !Array.isArray(val2) && (val1 instanceof Object) && (val2 instanceof Object);
    const bothArrays = Array.isArray(val1) && Array.isArray(val2);
    if (bothObjects && !eqObjects(val1, val2)) {
      return false;
    } else if (bothArrays && !eqArrays(val1, val2)) {
      return false;
    } else if (!bothObjects && !bothArrays && val1 !== val2) {
      return false;
    }
  }

  return true;
};

module.exports = eqObjects;