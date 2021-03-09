const assert = require("chai").assert;
const tail = require("../tail");

describe("#tail", () => {
  it("should return [2, 3, 4] for [1, 2, 3, 4]", () => {
    const input = [1, 2, 3, 4];
    const expected = [2, 3, 4];

    assert.deepEqual(tail(input), expected);
  });
  it("should not modify the original array", () => {
    const input = [1, 2, 3, 4];
    const expected = [1, 2, 3, 4];
    tail(input);
    assert.deepEqual(input, expected);
  });
  it(`should return ["I", "am", "a", "meat", "popsicle"] for ["Negative", "I", "am", "a", "meat", "popsicle"]`, () => {
    const input = ["Negative", "I", "am", "a", "meat", "popsicle"];
    const expected = ["I", "am", "a", "meat", "popsicle"];
    
    assert.deepEqual(tail(input), expected);
  });
  it("should return an empty array when given a single-value array", () => {
    const input = [1];
    const expected = [];
    
    assert.deepEqual(tail(input), expected);
  });
  it("should return undefined when given no array", () => {
    const expected = undefined;
    
    assert.equal(tail(), expected);
  });
});