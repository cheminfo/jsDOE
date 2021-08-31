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
describe('trimmed hadamard', () => {
  it('should create another type of plackett-burnam design', () => {
    expect(pb.pbDesign(3)).toStrictEqual([
      new Float64Array([-1, -1, 1]),
      new Float64Array([1, -1, -1]),
      new Float64Array([-1, 1, -1]),
      new Float64Array([1, 1, 1]),
    ]);
    expect(pb.pbDesign(4)).toStrictEqual([
      [1, 1, 1],
      [1, -1, -1],
      [-1, 1, -1],
      [-1, -1, 1],
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
    expect(pb.pbDesign(7)).toStrictEqual([
      new Float64Array([-1, -1, 1, -1, 1, 1, -1]),
      new Float64Array([1, -1, -1, -1, -1, 1, 1]),
      new Float64Array([-1, 1, -1, -1, 1, -1, 1]),
      new Float64Array([1, 1, 1, -1, -1, -1, -1]),
      new Float64Array([-1, -1, 1, 1, -1, -1, 1]),
      new Float64Array([1, -1, -1, 1, 1, -1, -1]),
      new Float64Array([-1, 1, -1, 1, -1, 1, -1]),
      new Float64Array([1, 1, 1, 1, 1, 1, 1]),
    ]);
    expect(pb.pbDesign(16)).toStrictEqual([
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 1, 1, 1],
      [1, 1, -1, 1, -1, -1, -1, -1, 1, 1, 1, -1, -1, -1, 1],
      [1, 1, -1, -1, 1, 1, 1, 1, -1, -1, -1, -1, -1, -1, 1],
      [1, -1, 1, 1, 1, -1, -1, 1, 1, -1, -1, 1, -1, -1, -1],
      [1, -1, 1, -1, -1, 1, 1, -1, -1, 1, 1, 1, -1, -1, -1],
      [1, -1, -1, 1, -1, 1, 1, -1, 1, -1, -1, -1, 1, 1, -1],
      [1, -1, -1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1, -1],
      [-1, 1, 1, 1, -1, 1, -1, 1, -1, 1, -1, -1, 1, -1, -1],
      [-1, 1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, -1],
      [-1, 1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, -1, 1, -1],
      [-1, 1, -1, -1, -1, 1, -1, 1, 1, -1, 1, 1, -1, 1, -1],
      [-1, -1, 1, 1, -1, -1, 1, 1, -1, -1, 1, -1, -1, 1, 1],
      [-1, -1, 1, -1, 1, 1, -1, -1, 1, 1, -1, -1, -1, 1, 1],
      [-1, -1, -1, 1, 1, 1, -1, -1, -1, -1, 1, 1, 1, -1, 1],
      [-1, -1, -1, -1, -1, -1, 1, 1, 1, 1, -1, 1, 1, -1, 1],
    ]);
  });
});
