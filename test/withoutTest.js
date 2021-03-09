const assert = require("chai").assert;
const without = require("../without");

describe("#without", () => {
  it("should return an array without the items specified", () => {
    const input = [1, 2, 3, 3, 4, 5, 5];
    const toRemove = [3, 5];
    const expected = [1, 2, 4];

    assert.deepEqual(without(input, toRemove), expected);
  });
  it("should not modify the original array", () => {
    const input = [1, 1, 0, 2, 2];
    const toRemove = [1];
    const expected = [1, 1, 0, 2, 2];
    without(input, toRemove);
    assert.deepEqual(input, expected);
  });
  it("should distinguish between integers and strings", () => {
    const input = [1, "1", 1, 1, "1"];
    const toRemove = [1];
    const expected = ["1", "1"];
  
    assert.deepEqual(without(input, toRemove), expected);
  });
  it("should remove values whether they are truthy or falsy", () => {
    const input = [0, false, 1, 2, 0];
    const toRemove = [0, false, 1];
    const expected = [2];
  
    assert.deepEqual(without(input, toRemove), expected);
  });
  it("should return an the same array if no elements are removed", () => {
    const input = ['a', 'b', 'c'];
    const toRemove = ['d'];
    const expected = ['a', 'b', 'c'];
  
    assert.deepEqual(without(input, toRemove), expected);
  });
  it("should return an empty array if all elements are removed", () => {
    const input = [1, 1, 2];
    const toRemove = [1, 2];
    const expected = [];
  
    assert.deepEqual(without(input, toRemove), expected);
  });
  it("should return an empty array for an empty array", () => {
    const input = [];
    const toRemove = [2];
    const expected = [];
  
    assert.deepEqual(without(input, toRemove), expected);
  });
  it("should return an empty array for no input", () => {
    const expected = [];
  
    assert.deepEqual(without(), expected);
  });
})