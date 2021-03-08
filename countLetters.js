const assertEqual = function(actual, expected) {
  const actualStr = typeof(actual) === "string" ? `"${actual}"` : actual;
  const expectedStr = typeof(expected) === "string" ? `"${expected}"` : expected;
  
  if (actual === expected) {
    console.log(`✅✅✅Assertion passed: ${actualStr} === ${expectedStr}`);
  } else {
    console.log(`🔴🔴🔴Assertion failed: ${actualStr} !== ${expectedStr}`);
  }
};

const countLetters = function(stringToCount) {
  let result = {};
  for (let char of stringToCount) {
    if (result[char]) {
      result[char]++;
    } else {
      result[char] = 1;
    }
  }
  return result;
};

let testOne = "a b cbba";
const resultStr = countLetters(testOne);

assertEqual(resultStr.x, undefined);
assertEqual(resultStr.b, 3);
assertEqual(resultStr.a, 2);
assertEqual(testOne, "a b cbba");

let testTwo = "the quick brown fox jumped over the lazy dog";
const resultTwo = countLetters(testTwo);
assertEqual(resultTwo.x, 1);
assertEqual(resultTwo.o, 4);
assertEqual(resultTwo.h, 2);
assertEqual(testTwo, "the quick brown fox jumped over the lazy dog");

module.exports = countLetters;