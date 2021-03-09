const assert = require('chai').assert;
const flatten = require('../flatten');


describe('#flatten', () => {
  it(`should return a flattened array for a single nested array`, () => {
    const input = [[1, 2], 3];
    const expected = [1, 2, 3];
  
    assert.deepEqual(flatten(input), expected);
  });
  it(`should not introduce empty spaces for empty arrays`, () => {
    const input = [[1, 2], [], [3, 4]];
    const expected = [1, 2, 3, 4];
  
  
    assert.deepEqual(flatten(input), expected);
  });
  it(`should not modify the original array`, () => {
    const input = [1, 2, 3, [4, 5]];
    const expected = [1, 2, 3, [4, 5]];
    flatten(input);
  
    assert.deepEqual(input, expected);
  });
  it(`should return an empty array for an array of empty arrays`, () => {
    const input = [[], [], [], []];
    const expected = [];
  
  
    assert.deepEqual(flatten(input), expected);
  });
  it(`should return an empty array for no input`, () => {
    const expected = [];
  
    assert.deepEqual(flatten(), expected);
  });
});