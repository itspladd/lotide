const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');


describe('#findKeyByValue', () => {
  it(`should return the key for a given value`, () => {
    const input = { a: 3, b: "bacon", c: 0};
    const value = 0;
    const expected = "c";
  
  
    assert.strictEqual(findKeyByValue(input, value), expected);
  });
  it(`should return undefined if the value is not found`, () => {
    const input = { a: 2, b: 3, c: 4};
    const value = "3";
    const expected = undefined;
  
    assert.strictEqual(findKeyByValue(input, value), expected);
  });
  it(`should work if the value is an object`, () => {
    const input = { a: { b: 2}, c: { d: 5 }, d: { c: 5 } };
    const value = { d: 5 }
    const expected = "c";
  
    assert.strictEqual(findKeyByValue(input, value), expected);
  });
  it(`should return undefined if there are no inputs`, () => {
    const expected = undefined;
  
    assert.strictEqual(findKeyByValue(), expected);
  });
});



/* const bestTVShowsByGenre = {
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
assertEqual(findKeyByValue(rocinanteCrew, "Fred Johnson"), undefined); */