const pb = require('../plackettBurman.js');

describe('hadamard', () => {
  it('should create a hadamard matrix', () => {
    expect(pb.hadamard(4)).toStrictEqual([
      new Float64Array([1, 1, 1, 1]),
      new Float64Array([1, -1, 1, -1]),
      new Float64Array([1, 1, -1, -1]),
      new Float64Array([1, -1, -1, 1]),
    ]);
    expect(pb.hadamard(8)).toStrictEqual([
      new Float64Array([1, 1, 1, 1, 1, 1, 1, 1]),
      new Float64Array([1, -1, 1, -1, 1, -1, 1, -1]),
      new Float64Array([1, 1, -1, -1, 1, 1, -1, -1]),
      new Float64Array([1, -1, -1, 1, 1, -1, -1, 1]),
      new Float64Array([1, 1, 1, 1, -1, -1, -1, -1]),
      new Float64Array([1, -1, 1, -1, -1, 1, -1, 1]),
      new Float64Array([1, 1, -1, -1, -1, -1, 1, 1]),
      new Float64Array([1, -1, -1, 1, -1, 1, 1, -1]),
    ]);
  });
});
describe('pbDesign', () => {
  it('should create a plackett-burnam design', () => {
    expect(pb.pbDesign(3)).toStrictEqual([
      new Float64Array([-1, -1, 1]),
      new Float64Array([1, -1, -1]),
      new Float64Array([-1, 1, -1]),
      new Float64Array([1, 1, 1]),
    ]);
    expect(pb.pbDesign(5)).toStrictEqual([
      new Float64Array([-1, -1, 1, -1, 1]),
      new Float64Array([1, -1, -1, -1, -1]),
      new Float64Array([-1, 1, -1, -1, 1]),
      new Float64Array([1, 1, 1, -1, -1]),
      new Float64Array([-1, -1, 1, 1, -1]),
      new Float64Array([1, -1, -1, 1, 1]),
      new Float64Array([-1, 1, -1, 1, -1]),
      new Float64Array([1, 1, 1, 1, 1]),
    ]);
  });
});
