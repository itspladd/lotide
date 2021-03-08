const eqArrays = require("./index").eqArrays;

const eqObjects = require("./index").eqObjects;

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion passed: ${inspect(actual)}, === ${inspect(expected)}`);
  } else {
    console.log(`🔴🔴🔴 Assertion failed: ${inspect(actual)}, === ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;