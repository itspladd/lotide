const assertEqual = require('../assertEqual');
const eqObjects = require('../eqObjects');

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
const recur2 = { b: { c : { d: { e: { f : { g: "2" }}}}}, a : { b : 1 }};

assertEqual(eqObjects(recur1, recur2), true);