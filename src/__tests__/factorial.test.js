import { fullFactorial, fractionalFactorial, ff2n } from '../factorial';

describe('fullFactorial', () => {
  it('should return a design matrix with coded levels 0 to k-1 for a k-level factor', () => {
    expect(fullFactorial([2, 4, 3])).toStrictEqual([
      new Float64Array([0.0, 0.0, 0.0]),
      new Float64Array([1.0, 0.0, 0.0]),
      new Float64Array([0.0, 1.0, 0.0]),
      new Float64Array([1.0, 1.0, 0.0]),
      new Float64Array([0.0, 2.0, 0.0]),
      new Float64Array([1.0, 2.0, 0.0]),
      new Float64Array([0.0, 3.0, 0.0]),
      new Float64Array([1.0, 3.0, 0.0]),
      new Float64Array([0.0, 0.0, 1.0]),
      new Float64Array([1.0, 0.0, 1.0]),
      new Float64Array([0.0, 1.0, 1.0]),
      new Float64Array([1.0, 1.0, 1.0]),
      new Float64Array([0.0, 2.0, 1.0]),
      new Float64Array([1.0, 2.0, 1.0]),
      new Float64Array([0.0, 3.0, 1.0]),
      new Float64Array([1.0, 3.0, 1.0]),
      new Float64Array([0.0, 0.0, 2.0]),
      new Float64Array([1.0, 0.0, 2.0]),
      new Float64Array([0.0, 1.0, 2.0]),
      new Float64Array([1.0, 1.0, 2.0]),
      new Float64Array([0.0, 2.0, 2.0]),
      new Float64Array([1.0, 2.0, 2.0]),
      new Float64Array([0.0, 3.0, 2.0]),
      new Float64Array([1.0, 3.0, 2.0]),
    ]);

    expect(fullFactorial([2, 3, 3])).toStrictEqual([
      new Float64Array([0.0, 0.0, 0.0]),
      new Float64Array([1.0, 0.0, 0.0]),
      new Float64Array([0.0, 1.0, 0.0]),
      new Float64Array([1.0, 1.0, 0.0]),
      new Float64Array([0.0, 2.0, 0.0]),
      new Float64Array([1.0, 2.0, 0.0]),
      new Float64Array([0.0, 0.0, 1.0]),
      new Float64Array([1.0, 0.0, 1.0]),
      new Float64Array([0.0, 1.0, 1.0]),
      new Float64Array([1.0, 1.0, 1.0]),
      new Float64Array([0.0, 2.0, 1.0]),
      new Float64Array([1.0, 2.0, 1.0]),
      new Float64Array([0.0, 0.0, 2.0]),
      new Float64Array([1.0, 0.0, 2.0]),
      new Float64Array([0.0, 1.0, 2.0]),
      new Float64Array([1.0, 1.0, 2.0]),
      new Float64Array([0.0, 2.0, 2.0]),
      new Float64Array([1.0, 2.0, 2.0]),
    ]);
  });
});
describe('ff2n', () => {
  it('should return a 2-level full-factorial design', () => {
    expect(ff2n(3)).toStrictEqual([
      new Float64Array([-1.0, -1.0, -1.0]),
      new Float64Array([1.0, -1.0, -1.0]),
      new Float64Array([-1.0, 1.0, -1.0]),
      new Float64Array([1.0, 1.0, -1.0]),
      new Float64Array([-1.0, -1.0, 1.0]),
      new Float64Array([1.0, -1.0, 1.0]),
      new Float64Array([-1.0, 1.0, 1.0]),
      new Float64Array([1.0, 1.0, 1.0]),
    ]);
  });
});

describe('fractionalFactorial', () => {
  it('should return a something', () => {
    expect(fractionalFactorial('a b ab')).toStrictEqual([
      new Float64Array([-1.0, -1.0, 1.0]),
      new Float64Array([1.0, -1.0, -1.0]),
      new Float64Array([-1.0, 1.0, -1.0]),
      new Float64Array([1.0, 1.0, 1.0]),
    ]);
    expect(fractionalFactorial('A B AB')).toStrictEqual([
      new Float64Array([-1.0, -1.0, 1.0]),
      new Float64Array([1.0, -1.0, -1.0]),
      new Float64Array([-1.0, 1.0, -1.0]),
      new Float64Array([1.0, 1.0, 1.0]),
    ]);
    expect(fractionalFactorial('a b -ab c +abc')).toStrictEqual([
      new Float64Array([-1.0, -1.0, -1.0, -1.0, -1.0]),
      new Float64Array([1.0, -1.0, 1.0, -1.0, 1.0]),
      new Float64Array([-1.0, 1.0, 1.0, -1.0, 1.0]),
      new Float64Array([1.0, 1.0, -1.0, -1.0, -1.0]),
      new Float64Array([-1.0, -1.0, -1.0, 1.0, 1.0]),
      new Float64Array([1.0, -1.0, 1.0, 1.0, -1.0]),
      new Float64Array([-1.0, 1.0, 1.0, 1.0, -1.0]),
      new Float64Array([1.0, 1.0, -1.0, 1.0, 1.0]),
    ]);
  });
});
