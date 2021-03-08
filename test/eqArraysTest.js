const assertEqual = require("../assertEqual");
const eqArrays = require("../eqArrays");

assertEqual(eqArrays([8, 6, 7, 5, 3, 0, 9], [8, 6, 7, 5, 3, 0, 9]), true);
assertEqual(eqArrays([1, 2, 3], ['1', '2', '3']), false);
assertEqual(eqArrays([1, 2, 3], [1, 2, 5]), false);
assertEqual(eqArrays([1, 2, 3], [3, 2, 3]), false);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);

//Tests for non-array values.
assertEqual(eqArrays(1, [1]), undefined);
assertEqual(eqArrays([1], 1), undefined);
assertEqual(eqArrays("a", "b"), undefined);


// Tests for nested arrays or arrays of objects. These should fail until the function is expanded.
console.log("Recursive tests:");
assertEqual(eqArrays([1, [[[[[[2, [3]]]], 4]]]], [1, [[[[[[2, [3]]]], 4]]]]), true);
assertEqual(eqArrays([{beans : ["magical", "fruit", {the: "more", you: [[["eat"]]]}]}] ,[{beans : ["magical", "fruit", {the: "more", you: [[["eat"]]]}]}]), true);