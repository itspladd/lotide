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
  for (let key in object) {
    if(callback(object[key])) {
      return key;
    }
  }
};

const test1 = { a: "1", b: "2", c: "3"};
const test2 = { a: 1, b: 3, c: 2};
const test3 = { "c2here": { c: 2 }, "a3here": { a: 3 }, "d6here": { d: 6 } };

assertEqual(findKey(test1, x => x === "3"), "c");
assertEqual(findKey(test2, x => x >= 3), "b");
assertEqual(findKey(test3, x => x.a === 3), "a3here");

/* let test4 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma" */

//console.log(test4);