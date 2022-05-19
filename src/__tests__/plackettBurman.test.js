import { hadamard, pbDesign } from '../plackettBurman';

describe('hadamard', () => {
  it('should create a hadamard matrix', () => {
    expect(hadamard(4)).toStrictEqual([
      new Float64Array([1, 1, 1, 1]),
      new Float64Array([1, -1, 1, -1]),
      new Float64Array([1, 1, -1, -1]),
      new Float64Array([1, -1, -1, 1]),
    ]);
    expect(hadamard(8)).toStrictEqual([
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
    expect(pbDesign(3)).toStrictEqual([
      new Float64Array([-1, -1, 1]),
      new Float64Array([1, -1, -1]),
      new Float64Array([-1, 1, -1]),
      new Float64Array([1, 1, 1]),
    ]);
    expect(pbDesign(4)).toStrictEqual([
      [1, 1, 1],
      [1, -1, -1],
      [-1, 1, -1],
      [-1, -1, 1],
    ]);
    expect(pbDesign(5)).toStrictEqual([
      new Float64Array([-1, -1, 1, -1, 1]),
      new Float64Array([1, -1, -1, -1, -1]),
      new Float64Array([-1, 1, -1, -1, 1]),
      new Float64Array([1, 1, 1, -1, -1]),
      new Float64Array([-1, -1, 1, 1, -1]),
      new Float64Array([1, -1, -1, 1, 1]),
      new Float64Array([-1, 1, -1, 1, -1]),
      new Float64Array([1, 1, 1, 1, 1]),
    ]);
    expect(pbDesign(7)).toStrictEqual([
      new Float64Array([-1, -1, 1, -1, 1, 1, -1]),
      new Float64Array([1, -1, -1, -1, -1, 1, 1]),
      new Float64Array([-1, 1, -1, -1, 1, -1, 1]),
      new Float64Array([1, 1, 1, -1, -1, -1, -1]),
      new Float64Array([-1, -1, 1, 1, -1, -1, 1]),
      new Float64Array([1, -1, -1, 1, 1, -1, -1]),
      new Float64Array([-1, 1, -1, 1, -1, 1, -1]),
      new Float64Array([1, 1, 1, 1, 1, 1, 1]),
    ]);
    expect(pbDesign(16)).toStrictEqual([
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
