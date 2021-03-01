const assertEqual = function(actual, expected) {
  const actualStr = typeof(actual) === "string" ? `"${actual}"` : actual;
  const expectedStr = typeof(expected) === "string" ? `"${expected}"` : expected;
  if (actual === expected) {
    console.log(`✅✅✅Assertion passed: ${actualStr} === ${expectedStr}`);
  } else {
    console.log(`🔴🔴🔴Assertion failed: ${actualStr} !== ${expectedStr}`);
  }
};

const tail = function(array) {
  return (array.length <= 1) ? Array() : array.slice(1);
};



let testArray = [1, 2, 3, 4];
let testTarget = [2, 3, 4];
for (let i = 0; i < tail(testArray).length; i++) {
  assertEqual(tail(testArray)[i], testTarget[i]);
}
assertEqual(testArray.length, 4);

testArray = ["Negative", "I", "am", "a", "meat", "popsicle"];
testTarget = ["I", "am", "a", "meat", "popsicle"];

for (let i = 0; i < tail(testArray).length; i++) {
  assertEqual(tail(testArray)[i], testTarget[i]);
}
assertEqual(testArray.length, 6);
assertEqual(tail([1]).length, [].length);
assertEqual(tail([]).length, [].length);