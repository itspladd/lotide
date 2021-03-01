const assertEqual = function(actual, expected) {
  if(actual === expected) {
    console.log(`Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion failed: ${actual} !== ${expected}`);
  }
};

assertEqual("LighthouseLabs", "Bootcamp");
assertEqual("pladd", "goober");
assertEqual(1, 1);