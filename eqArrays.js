const assertEqual = function(actual, expected) {
  const actualStr = typeof(actual) === "string" ? `"${actual}"` : actual;
  const expectedStr = typeof(expected) === "string" ? `"${expected}"` : expected;
  
  if (actual === expected) {
    console.log(`✅✅✅Assertion passed: ${actualStr} === ${expectedStr}`);
  } else {
    console.log(`🔴🔴🔴Assertion failed: ${actualStr} !== ${expectedStr}`);
  }
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

assertEqual(eqArrays([8, 6, 7, 5, 3, 0, 9], [8, 6, 7, 5, 3, 0, 9]), true);
assertEqual(eqArrays([1, 2, 3], ['1', '2', '3']), false);
assertEqual(eqArrays([1, 2, 3], [1, 2, 5]), false);
assertEqual(eqArrays([1, 2, 3], [3, 2, 3]), false);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);

//Tests for non-array values.
assertEqual(eqArrays(1, [1]), undefined);
assertEqual(eqArrays([1], 1), undefined);
assertEqual(eqArrays("a", "b"), undefined);


// Tests for nested arrays or arrays of objects. These should fail until the function is expanded.
console.log("Recursive tests:");
assertEqual(eqArrays([1, [[[[[[2, [3]]]], 4]]]], [1, [[[[[[2, [3]]]], 4]]]]), true);
assertEqual(eqArrays([{beans : ["magical", "fruit", {the: "more", you: [[["eat"]]]}]}] ,[{beans : ["magical", "fruit", {the: "more", you: [[["eat"]]]}]}]), true);