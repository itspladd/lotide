const assert = require('chai').assert;
const middle = require("../middle");

describe("#middle", () => {
  it("should return the middle two integers of an integer array with even length", () => {
    const input = [0,1,2,3,4,5];
    const expected = [2,3];

    assert.deepEqual(middle(input), expected);
  });
  it("should return the middle two strings of a string array with even length", () => {
    const input = ['0','1','2','3','4','5'];
    const expected = ['2','3'];
    
    assert.deepEqual(middle(input), expected);
  });
  it("should return the middle value of an array with odd length", () => {
    const input = [0,1,3,4,5];
    const expected = [3];

    assert.deepEqual(middle(input), expected);
  });
  it("should return an empty array for an array with one value", () => {
    const input = [0];
    const expected = [];

    assert.deepEqual(middle(input), expected);
  });
  it("should return an empty array for an empty array", () => {
    const input = [];
    const expected = [];

    assert.deepEqual(middle(input), expected);
  });
  it("should return an empty array for no input", () => {
    const expected = [];

    assert.deepEqual(middle(), expected);
  });
});