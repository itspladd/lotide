const assertEqual = function(actual, expected) {
  const actualStr = typeof(actual) === "string" ? `"${actual}"` : actual;
  const expectedStr = typeof(expected) === "string" ? `"${expected}"` : expected;
  
  if (actual === expected) {
    console.log(`✅✅✅Assertion passed: ${actualStr} === ${expectedStr}`);
  } else {
    console.log(`🔴🔴🔴Assertion failed: ${actualStr} !== ${expectedStr}`);
  }
};

const findKey = function(object, callback) {
  let key = undefined;

  return key;
};

const test1 = { a: "1", b: "2", c: "3"};
const test2 = { a: 1, b: 3, c: 2};
const test3 = { "c2here": { c: 2 }, "a3here": { a: 3 }, "d6here": { d: 6 } };

assertEqual(findKey(test1, x => x === "c"), "c");
assertEqual(findKey(test1, x => x.b >= 3), "c");
assertEqual(findKey(test3, x => x.a === "3"), "c");
