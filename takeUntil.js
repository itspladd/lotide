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

const takeUntil = function(array, callback) {
  const result = [];
  for (let item of array) {
    if (callback(item)) {
      return result;
    } else {
      result.push(item);
    }
  }
};

//Passing tests:
const test1 = [1, 2, 3, 4, 2, 5, 1000, 6, 7, 8, 3];
const test2 = ["please", "save", "me", "from", "the", "bee", "movie", "script", "According to all known laws of aviation, there is no way a bee should be able to fly."];

assertArraysEqual(takeUntil(test1, x => x >= 1000), [1,2,3,4,2,5]);
assertArraysEqual(takeUntil(test2, x => x === "According to all known laws of aviation, there is no way a bee should be able to fly."), ["please", "save", "me", "from", "the", "bee", "movie", "script"]);


//Failing tests:
//This test will fail until eqArrays can handle arrays of objects.
//assertArraysEqual(takeUntil(test3, x => x.type === "boy"), [{ name: "Hades", type: "dad" }, { name: "Kratos", type: "dad" }]);
//const test3 = [{ name: "Hades", type: "dad" }, { name: "Kratos", type: "dad" }, { name: "Zagreus", type: "boy" }, { name: "Joel", type: "dad" }];
