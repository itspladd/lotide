const assertEqual = function(actual, expected) {
  const actualStr = typeof(actual) === "string" ? `"${actual}"` : actual;
  const expectedStr = typeof(expected) === "string" ? `"${expected}"` : expected;
  
  if (actual === expected) {
    console.log(`✅✅✅Assertion passed: ${actualStr} === ${expectedStr}`);
  } else {
    console.log(`🔴🔴🔴Assertion failed: ${actualStr} !== ${expectedStr}`);
  }
};

const eqArrays = function(array1, array2) {
  //If one or the other isn't an array, return undefined.
  if (!(array1 instanceof Array) || !(array2 instanceof Array)) {
    return undefined;
  }
  // If the two arrays aren't of the same length, return false before we iterate.
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    // If at any point we find an unequal value, return false.
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  // If we make it this far, then all of the values are equal and we can return true.
  return true;
};

const eqObjects = function(object1, object2) {
  const obj1Keys = Object.keys(object1);
  const obj2Keys = Object.keys(object2);
  //If they're not the same size, then they're defintely not equal.
  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }
  //Assume that the objects match. Return false as soon as we find a single difference.
  //Since the keys must be identical, then we must be able to access object2 data with the key from object1.
  //And since the values must be identical, then the value at object2[key1] must be the same as the value at val1.
  //So if they're not the same, the objects aren't equal.
  for (let key1 of obj1Keys) {
    const val1 = object1[key1];
    const val2 = object2[key1];

    //Are they both non-array objects, or arrays?
    const bothObjects = !Array.isArray(val1) && !Array.isArray(val2) && (val1 instanceof Object) && (val2 instanceof Object);
    const bothArrays = Array.isArray(val1) && Array.isArray(val2);

    if (bothObjects && !eqObjects(val1, val2)) {
      return false;
    } else if (bothArrays && !eqArrays(val1, val2)) {
      return false;
    } else if (!bothObjects && !bothArrays && val1 !== val2) {
      return false;
    }
  }

  return true;
};

console.log("Primitive value tests:");

const rocinanteCrew = {
  captain: "James Holden",
  xo: "Naomi Nagata",
  mechanic: "Amos Burton",
  pilot: "Alex Kamal",
  hitchhiker: "Josephus Miller",
};

const rocinanteCrewSpoilers = {
  captain: "James Holden",
  xo: "Naomi Nagata",
  mechanic: "Amos Burton",
  technician: "Clarissa Mao",
  pilot: "Alex Kamal",
  gunner: "Bobbie Draper",
  angryCargo: "Payne Houston",
};

const a = {a: { a : "1" }};
const b = {a: { a : "1" }};
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abInt = { a: 1, b: "2" };
const abcInt = { a: 1, b: "2", c: 1 };

assertEqual(eqObjects(a, b), true);
assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ba, ab), true);
assertEqual(eqObjects(abInt, ba), false);
assertEqual(eqObjects(abInt, abcInt), false);
assertEqual(eqObjects(rocinanteCrew, rocinanteCrewSpoilers), false);

console.log("Array value tests:");
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);

console.log("Recursive tests:");

const recur1 = { a : 1, b: { c : { d: { e: { f : { g: "2" }}}}}};
const recur2 = { b: { c : { d: { e: { f : { g: "2" }}}}}, a : 1};

assertEqual(eqObjects(recur1, recur2), true);