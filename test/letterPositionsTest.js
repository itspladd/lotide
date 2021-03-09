const assert = require('chai').assert;
const letterPositions = require('../letterPositions');


describe('#letterPositions', () => {
  it(`should return an object of arrays of the positions of each letter, with spaces omitted`, () => {
    const input = "ae io uy boyzzz";
    const expected = {
      a: [0],
      e: [1],
      i: [2],
      o: [3, 7],
      u: [4],
      y: [5, 8],
      b: [6],
      z: [9, 10, 11],
    };
  
    assert.deepEqual(letterPositions(input), expected);
  });
  it(`should return an empty object if there are only spaces in the string`, () => {
    const input = "              ";
    const expected = { };
  
  
    assert.deepEqual(letterPositions(input), expected);
  });
  it(`should return an empty object for an empty string`, () => {
    const input = "";
    const expected = {};
  
  
    assert.deepEqual(letterPositions(input), expected);
  });
  it(`should distinguish between upper and lower case`, () => {
    const input = "aAaaAa";
    const expected = {
      a: [0, 2, 3, 5],
      A: [1, 4]
    };
  
    assert.deepEqual(letterPositions(input), expected);
  });
  it(`should return an empty object for no input`, () => {
    const expected = {};
  
  
    assert.deepEqual(letterPositions(), expected);
  });
});

