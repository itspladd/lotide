const assertEqual = function(actual, expected) {
  const actualStr = typeof(actual) === "string" ? `"${actual}"` : actual;
  const expectedStr = typeof(expected) === "string" ? `"${expected}"` : expected;
  
  if (actual === expected) {
    console.log(`✅✅✅Assertion passed: ${actualStr} === ${expectedStr}`);
  } else {
    console.log(`🔴🔴🔴Assertion failed: ${actualStr} !== ${expectedStr}`);
  }
};

const countLetters = function() {
  let result = {};

  return result;
};

//const testStr = "the quick brown fox jumped over the lazy dog";
const testStr = "a b c";
const resultStr = countLetters(testStr);

assertEqual(resultStr.x, undefined);