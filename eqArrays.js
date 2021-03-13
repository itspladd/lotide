const eqArrays = function(array1, array2) {
  // Note the requirement of eqObjects here - eqObjects and eqArrays require each other.
  const eqObjects = require('./eqObjects.js');
  //If one or the other isn't an array, return undefined.
  if (!(array1 instanceof Array) || !(array2 instanceof Array)) {
    return undefined;
  }
  // If the two arrays aren't of the same length, return false before we iterate.
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    // If at any point we find an unequal value, return false.
    // First: are the values we're comparing arrays? Or possibly objects?
    const bothArrays = Array.isArray(array1[i]) && Array.isArray(array2[i]);
    const bothObjects = !Array.isArray(array1[i]) &&
      !Array.isArray(array2[i]) &&
      array1[i] instanceof Object &&
      array2[i] instanceof Object;


    if (bothArrays && !eqArrays(array1[i], array2[i])) {
      //They're arrays, but not equal.
      return false;
    } else if (bothObjects && !eqObjects(array1[i], array2[i])) {
      //They're objects, but not equal.
      return false;
    } else if (!bothObjects && !bothArrays && array1[i] !== array2[i]) {
      //They're not both object or both arrays, so we can directly compare them.
      return false;
    }
  }
  // If we make it this far, then all of the values are equal and we can return true.
  return true;
};

module.exports = eqArrays;