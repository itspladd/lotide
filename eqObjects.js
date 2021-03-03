const assertEqual = function(actual, expected) {
  const actualStr = typeof(actual) === "string" ? `"${actual}"` : actual;
  const expectedStr = typeof(expected) === "string" ? `"${expected}"` : expected;
  
  if (actual === expected) {
    console.log(`✅✅✅Assertion passed: ${actualStr} === ${expectedStr}`);
  } else {
    console.log(`🔴🔴🔴Assertion failed: ${actualStr} !== ${expectedStr}`);
  }
};

const eqObjects = function(object1, object2) {
  const obj1Keys = Object.keys(object1);
  const obj2Keys = Object.keys(object2);

  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }

  for (let key1 of obj1Keys) {
    let foundMatch = false;
    for(let key2 of obj2Keys) {
      if (key1 === key2 && object1[key1] === object2[key2]) {
        foundMatch = true;
      }
    }
    if (!foundMatch) {
      return false;
    }
  }

  return true;
};

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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abInt = { a: 1, b: "2" };
const abcInt = { a: 1, b: "2", c: 1 };

assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ba, ab), true);
assertEqual(eqObjects(abInt, ba), false);
assertEqual(eqObjects(abInt, abcInt), false);
assertEqual(eqObjects(rocinanteCrew, rocinanteCrewSpoilers), false);