const assert = require('chai').assert;
const countOnly = require('../countOnly');


describe('#countOnly', () => {
  it(`should return an object containing key/value pairs of array elements specified and the number of times that element was found`, () => {
    const input = [1, 2, 3, 3, 2];
    const toFind = { 1: true, 2: false, 3: true };
    const expected = { "1": 1, "3": 2};
  
    assert.deepEqual(countOnly(input, toFind), expected);
  });
  it(`should return an empty object if no matches exist`, () => {
    const input = ["1", "2", "3"];
    const toFind = { 1: false, 4: true};
    const expected = { };
  
    assert.deepEqual(countOnly(input, toFind), expected);
  });
  it(`should return an empty object if an empty array is given`, () => {
    const input = [];
    const toFind = {1: true};
    const expected = {};

    assert.deepEqual(countOnly(input, toFind), expected);
  });
  it(`should return an empty object if an empty toFind is given`, () => {
    const input = [1, 2, 3];
    const toFind = { };
    const expected = { };
  
    assert.deepEqual(countOnly(input, toFind), expected);
  });
  it(`should return an empty object if no parameters are given`, () => {
    const expected = { };
  
    assert.deepEqual(countOnly(), expected);
  });
});