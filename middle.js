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
}

const middle = function (array) {
  //Return an empty array if the input is too short or if there's no input
  if (!array || array.length < 3) {
    return [];
  }
  //Divide the length of the array by two and round down to find either the middle index (for an odd-numbered array) or the index right after the middle (for an even-numbered array)
  let middleInt = Math.floor(array.length / 2);
  return (array.length % 2) ? [array[middleInt]] : [array[middleInt-1], array[middleInt]];
}

//Test cases
/*assertArraysEqual(middle([0,1,2,3,4,5]), [2,3]);
assertArraysEqual(middle([0,3,4,5]), [3,4]);
assertArraysEqual(middle(['0','1','2','3','4','5']), ['2','3']);
assertArraysEqual(middle([0,1,3,4,5]), [3]);
assertArraysEqual(middle([0]), []);
assertArraysEqual(middle([]), []);
assertArraysEqual(middle(), []); */