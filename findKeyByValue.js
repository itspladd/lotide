const assertEqual = function(actual, expected) {
  const actualStr = typeof(actual) === "string" ? `"${actual}"` : actual;
  const expectedStr = typeof(expected) === "string" ? `"${expected}"` : expected;
  
  if (actual === expected) {
    console.log(`✅✅✅Assertion passed: ${actualStr} === ${expectedStr}`);
  } else {
    console.log(`🔴🔴🔴Assertion failed: ${actualStr} !== ${expectedStr}`);
  }
};

const findKeyByValue = function(object, value) {
  const keys = Object.keys(object);
  for (let key of keys) {
    if (object[key] === value) {
      return key;
    }
  }

  return undefined;
};

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Crazy Ex-Girlfriend",
  drama: "Dark",
  kids: "She-Ra and the Princesses of Power"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "Crazy Ex-Girlfriend"), "comedy");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Doctor Who"), undefined);

const rocinanteCrew = {
  captain: "James Holden",
  xo: "Naomi Nagata",
  mechanic: "Amos Burton",
  technician: "Clarissa Mao",
  pilot: "Alex Kamal",
  gunner: "Bobbie Draper",
  angryCargo: "Payne Houston",
};

assertEqual(findKeyByValue(rocinanteCrew, "Payne Houston"), "angryCargo");
assertEqual(findKeyByValue(rocinanteCrew, "Clarissa Mao"), "technician");
assertEqual(findKeyByValue(rocinanteCrew, "Fred Johnson"), undefined);