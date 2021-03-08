const eqArrays = function(array1, array2) {
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
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  // If we make it this far, then all of the values are equal and we can return true.
  return true;
};

const eqObjects = function(object1, object2) {
  const obj1Keys = Object.keys(object1);
  const obj2Keys = Object.keys(object2);
  //If they're not the same size, then they're defintely not equal.
  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }

  //Assume that the objects match. Return false as soon as we find a single difference.
  //Since the keys must be identical, then we must be able to access object2 data with the key from object1.
  //And since the values must be identical, then the value at object2[key1] must be the same as the value at object1[key1].
  //So if they're not the same, the objects aren't equal.
  for (let key1 of obj1Keys) {
    if (object1[key1] !== object2[key1] && !eqArrays(object1[key1], object2[key1])) {
      return false;
    }
  }

  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion passed: ${inspect(actual)}, === ${inspect(expected)}`);
  } else {
    console.log(`🔴🔴🔴 Assertion failed: ${inspect(actual)}, === ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;