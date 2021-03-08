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

const without = function(source, itemsToRemove) {
  let resultArray = [];
  for (let sourceIndex in source) {
    let removeItem = false;
    for (let itemToRemove of itemsToRemove) {
      if (source[sourceIndex] === itemToRemove) {
        removeItem = true;
      }
    }
    removeItem ? null : resultArray.push(source[sourceIndex]);
  }
  return resultArray;
};

// Test cases
/* assertArraysEqual(without([1,2,'3'],[1,2]), ['3']);
assertArraysEqual(without([1,2,'3', 4, 5, "bananas", false, false, 0],[5, 1,"bananas",2, '3']), [4, false, false, 0]);


const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]); */

module.exports = without;