const assert = require('chai').assert;
const eqArrays = require('../eqArrays');


describe('#eqArrays', () => {
  it(`should return true for two equal arrays of primitives`, () => {
    const input = [8, 6, 7, '5', 3, 0, '9'];
    const comparison = [8, 6, 7, '5', 3, 0, '9'];
  
    assert.isTrue(eqArrays(input, comparison));
  });
  it(`should return false for arrays of different lengths`, () => {
    const input = [1, 2, 3];
    const comparison = [1, 2, 3, 4];
  
    assert.isFalse(eqArrays(input, comparison));
  });
  it(`should return undefined for non-array inputs or missing inputs`, () => {
    const input = [1, 2];
    const comparison = '1, 2';
    const comparison2 = { '1': '2'};
  
  
    assert.isUndefined(eqArrays(input, comparison));
    assert.isUndefined(eqArrays(input, comparison2));
    assert.isUndefined(eqArrays(input));
    assert.isUndefined(eqArrays());
  });
  it(`should return true for nested arrays`, () => {
    const input = [1, [[[[[[2, [3]]]], 4]]]];
    const comparison = [1, [[[[[[2, [3]]]], 4]]]];
  
  
    assert.isTrue(eqArrays(input, comparison));
  });
  it(`should return true for arrays with nested objects and/or arrays of arbitrary depth`, () => {
    const input = [{beans : ["magical", "fruit", {the: "more", you: [[["eat"]]]}]}];
    const comparison = [{beans : ["magical", "fruit", {the: "more", you: [[["eat"]]]}]}];
  
  
    assert.isTrue(eqArrays(input, comparison));
  });
});