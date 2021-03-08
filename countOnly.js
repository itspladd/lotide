const assertEqual = function(actual, expected) {
  const actualStr = typeof(actual) === "string" ? `"${actual}"` : actual;
  const expectedStr = typeof(expected) === "string" ? `"${expected}"` : expected;
  
  if (actual === expected) {
    console.log(`✅✅✅Assertion passed: ${actualStr} === ${expectedStr}`);
  } else {
    console.log(`🔴🔴🔴Assertion failed: ${actualStr} !== ${expectedStr}`);
  }
};

const countOnly = function(arrayToCount, countableItems) {
  const result = {};
  //Iterate through each item in the input array
  //If the key for that item has a truthy value, add or increment the appropriate key in the results
  for (let item of arrayToCount) {
    if (countableItems[item]) {
      if (result[item]) {
        result[item]++;
      } else {
        result[item] = 1;
      }
    }
  }

  return result;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna" : false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

module.exports = countOnly;