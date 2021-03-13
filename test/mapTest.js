const assert = require('chai').assert;
const map = require('../map');


describe('#map', () => {
  it(`should return a new array as a result of calling the callback function on each element of the input array`, () => {
    const input = ["ground", "control", "to", "major", "tom"];
    const callback = x => x[1];
    const expected = ["r", "o", "o", "a", "o"];
  
    assert.deepEqual(map(input, callback), expected);
  });
  it(`should function on arrays of objects`, () => {
    const input = [{ name: "bob" }, { name: "martha" }, { name: "erin" }, { name: "taylor" }];
    const callback = x => x.name;
    const expected = ["bob", "martha", "erin", "taylor"];
  
  
    assert.deepEqual(map(input, callback), expected);
  });
  it(`should return an empty array for empty input`, () => {
    const input = [];
    const callback = x => x > 500;
    const expected = [];
  
  
    assert.deepEqual(map(input, callback), expected);
  });
  it(`should not modify the original array`, () => {
    const input = [1, 2, 3, 4, 5];
    const callback = x => x * 2;
    const expected = [1, 2, 3, 4, 5];
    map(input, callback);
  
    assert.deepEqual(input, expected);
  });
  it(`should return an empty array for no input`, () => {
    const expected = [];
  
    assert.deepEqual(map(), expected);
  });
});