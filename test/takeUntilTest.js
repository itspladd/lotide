const assert = require('chai').assert;
const takeUntil = require('../takeUntil');


describe('#takeUntil', () => {
  it(`should take values from the array until it reaches a value that returns true for the callback`, () => {
    const input = [1, 2, 3, 1000, 4, 5];
    const callback = x => x >= 1000;
    const expected = [1, 2, 3];
  
    assert.deepEqual(takeUntil(input, callback), expected);
  });
  it(`should handle arrays of objects`, () => {
    const input = [{ name: "Hades", type: "dad" }, { name: "Kratos", type: "dad" }, { name: "Zagreus", type: "boy" }, { name: "Joel", type: "dad" }];
    const callback = x => x.type === "boy";
    const expected = [{ name: "Hades", type: "dad" }, { name: "Kratos", type: "dad" }];
  
  
    assert.deepEqual(takeUntil(input, callback), expected);
  });
  it(`should return the full array if the condition is never met`, () => {
    const input = [0, 1, 2];
    const callback = x => x > 2;
    const expected = [0, 1, 2];
  
  
    assert.deepEqual(takeUntil(input, callback), expected);
  });
  it(`should return an empty array if the first element matches the condition`, () => {
    const input = [1, 2, 3];
    const callback = x => x === 1;
    const expected = [];
  
  
    assert.deepEqual(takeUntil(input, callback), expected);
  })
  it(`should return an empty array if no parameters are given`, () => {
    const expected = [];
  
  
    assert.deepEqual(takeUntil(), expected);
  });
});