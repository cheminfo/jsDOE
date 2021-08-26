import { latinSquare } from '../generalizedSubset';

describe('latinSquare', () => {
  it('should latin a square', () => {
    expect(latinSquare(5)).toStrictEqual([
      new Float64Array([1, 2, 3, 4, 5]),
      new Float64Array([2, 3, 4, 5, 1]),
      new Float64Array([3, 4, 5, 1, 2]),
      new Float64Array([4, 5, 1, 2, 3]),
      new Float64Array([5, 1, 2, 3, 4]),
      new Float64Array([1, 2, 3, 4, 5]),
    ]);
  });
});
