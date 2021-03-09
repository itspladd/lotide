const assert = require('chai').assert;
const findKey = require('../findKey');


describe('#findKey', () => {
  it(`should return the key for which the callback function is truthy for that key's value`, () => {
    const input = { a: "1", b: "c", c: "3"};
    const callback = x => x === "3";
    const expected = "c";
  
    assert.strictEqual(findKey(input, callback), expected);
  });
  it(`should handle nested objects`, () => {
    const input = { "c2here": { c: 2 }, "a3here": { a: 3 }, "d6here": { d: 6 } };
    const callback = x => x.a === 3;
    const expected = "a3here";
  
    assert.strictEqual(findKey(input, callback), expected);
  });
  it(`should return undefined if no match is found`, () => {
    const input = { a: 1, b: 2, c: 4};
    const callback = x => x >= 5;
    const expected = undefined;
  
    assert.strictEqual(findKey(input, callback), expected);
  });
  it(`should return undefined for an empty input object or callback`, () => {
    const expected = undefined;
  
    assert.strictEqual(findKey(), expected);
  });
});