const assert = require('chai').assert;
const eqObjects = require('../eqObjects');


describe('#eqObjects', () => {
  it(`should return true for identical objects, regardless of key order`, () => {
    const input = { a: "1", b: "2", c: 500 };
    const comparison = { b: "2", c: 500, a: "1" };
  
    assert.isTrue(eqObjects(input, comparison));
  });
  it(`should return true for objects with nested objects`, () => {
    const input = { a : 1, b: { c : { d: { e: { f : { g: "2" }}}}}};
    const comparison = { b: { c : { d: { e: { f : { g: "2" }}}}}, a : 1 };
  
    assert.isTrue(eqObjects(input, comparison));
  });
  it(`should return true for objects with nested objects and/or arrays`, () => {
    const input = { a: [{ b: ['c', 'd'], e: { f: 'g'}}, 'h'], i: 'jkl'};
    const comparison = { i: 'jkl', a: [{ b: ['c', 'd'], e: { f: 'g'}}, 'h'] };
  
    assert.isTrue(eqObjects(input, comparison));
  });
  it(`should return undefined for non-object input or no input`, () => {
    const input = [1, { a: 1 }];
    const comparison = [1, { a: 1 }];
    const comparison2 = "1, 2, 3";
  
    assert.isUndefined(eqObjects(input, comparison));
    assert.isUndefined(eqObjects(input, comparison2));
    assert.isUndefined(eqObjects(input));
    assert.isUndefined(eqObjects());
  });
});