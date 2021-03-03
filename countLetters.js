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

//const testStr = "the quick brown fox jumped over the lazy dog"; maybe don't do this one yet
const testStr = "a b cbba";
const resultStr = countLetters(testStr);

assertEqual(resultStr.x, undefined);
assertEqual(resultStr.b, 3);