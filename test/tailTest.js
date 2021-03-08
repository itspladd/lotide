const assertEqual = require("../assertEqual");
const tail = require("../tail");

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