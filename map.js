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

const map = (array, callback) => {
  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }

  return results;
};
/*
const test1 = ["ground", "control", "to", "major", "tom"];
const test2 = [1,2,3,4,5];
const test3 = [{ name: "bob" }, { name: "martha" }, { name: "erin" }, { name: "taylor" }];

assertArraysEqual(map(test1, x => x[1]), ["r", "o","o","a","o"]);
assertArraysEqual(map(test2, x => x + 3), [4,5,6,7,8]);
assertArraysEqual(map(test3, x => x.name), ["bob", "martha", "erin", "taylor", ]); */

module.exports = map;