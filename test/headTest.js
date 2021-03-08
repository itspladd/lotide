const assert = require('chai').assert;
const head = require('../head');

describe("#head", () => {
  it("returns 5 for [5, 6, 7]", () => {
    assert.strictEqual(head([5, 6, 7]), 5);
  });
  it(`returns "Negative for ["Negative", "I", "am", "a", "meat", "popsicle"]`, () => {
    assert.strictEqual(head(["Negative", "I", "am", "a", "meat", "popsicle"]), "Negative");
  });
  it("returns undefined for []", () => {
    assert.strictEqual(head([]), undefined);
  });
  it(`returns "beans" for ["beans"]`, () => {
    assert.strictEqual(head(["beans"]),"beans");
  });
})