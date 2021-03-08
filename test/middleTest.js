const assertArraysEqual = require("../assertArraysEqual");
const middle = require("../middle");

assertArraysEqual(middle([0,1,2,3,4,5]), [2,3]);
assertArraysEqual(middle([0,3,4,5]), [3,4]);
assertArraysEqual(middle(['0','1','2','3','4','5']), ['2','3']);
assertArraysEqual(middle([0,1,3,4,5]), [3]);
assertArraysEqual(middle([0]), []);
assertArraysEqual(middle([]), []);
assertArraysEqual(middle(), []);