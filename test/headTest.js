const head = require('../head');
const assertEqual = require('../assertEqual');

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Negative", "I", "am", "a", "meat", "popsicle"]), "Negative");
assertEqual(head([]), undefined);
assertEqual(head(["beans"]), "beans");