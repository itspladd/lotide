const assertEqual = function(actual, expected) {
  const actualStr = typeof(actual) === "string" ? `"${actual}"` : actual;
  const expectedStr = typeof(expected) === "string" ? `"${expected}"` : expected;
  
  if (actual === expected) {
    console.log(`✅✅✅Assertion passed: ${actualStr} === ${expectedStr}`);
  } else {
    console.log(`🔴🔴🔴Assertion failed: ${actualStr} !== ${expectedStr}`);
  }
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
    if (array1[i] !== array2[i]) {
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
assertEqual(eqArrays([1, 2, [3]], [1, 2, [3]]), true);
assertEqual(eqArrays([{beans : "magical"}] ,[{beans : "magical"}]), true);