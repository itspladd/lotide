const assert = require('chai').assert;
const countLetters = require('../countLetters');


describe('#countLetters', () => {
  it(`should return an accurate count of all characters (including whitespace) in the input string`, () => {
    const input = "a b cbba";
    const expected = { a: 2, b: 3, c: 1, " ": 2};
  
    assert.deepEqual(countLetters(input), expected);
  });
  it(`should count a single instance of whitespace`, () => {
    const input = " ";
    const expected = { " ": 1 };
  
  
    assert.deepEqual(countLetters(input), expected);
  });
  it(`should distinguish between upper- and lower-case letters`, () => {
    const input = "aAaAa";
    const expected = {a: 3, A: 2};
  
    assert.deepEqual(countLetters(input), expected);
  });
  it(`should return an empty object for an empty string`, () => {
    const input = "";
    const expected = { };
  
    assert.deepEqual(countLetters(input), expected);
  });
  it(`should return an empty object for no input`, () => {
    const expected = { };
  
    assert.deepEqual(countLetters(), expected);
  });

});