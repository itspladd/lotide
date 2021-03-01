const assertEqual = function(actual, expected) {
  const actualStr = typeof(actual) === "string" ? `"${actual}"` : actual;
  const expectedStr = typeof(expected) === "string" ? `"${expected}"` : expected;
  if (actual === expected) {
    console.log(`✅✅✅Assertion passed: ${actualStr} === ${expectedStr}`);
  } else {
    console.log(`🔴🔴🔴Assertion failed: ${actualStr} !== ${expectedStr}`);
  }
};

const head = function(array) {
  return array[0];
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Negative", "I", "am", "a", "meat", "popsicle"]), "Negative");
assertEqual(head([]), undefined);
assertEqual(head(["beans"]), "beans");