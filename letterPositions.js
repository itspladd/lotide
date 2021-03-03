const eqArrays = function(array1, array2) {
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

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log("✅✅✅Assertion passed: ", array1, " === ", array2);
  } else {
    console.log("🔴🔴🔴Assertion failed: ", array1, " !== ", array2);
  }
};

const letterPositions = function(inputStr) {
  const result = {};
  const noSpaces = inputStr.split(" ").join("");
  for (let i = 0; i < noSpaces.length; i++) {
    if (result[noSpaces[i]]) {
      result[noSpaces[i]].push(i);
    } else {
      result[noSpaces[i]] = [i];
    }
  }
  console.log(result);
  return result;
};

let testStr = "ae io uy boyzzz";
const testResult = letterPositions(testStr);
assertArraysEqual(testResult.a, [0]);
assertArraysEqual(testResult.o, [3, 7]);
assertArraysEqual(testResult.z, [9, 10, 11]);

//assertArraysEqual(testResult.f, undefined);