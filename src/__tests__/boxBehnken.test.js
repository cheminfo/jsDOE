import { bbDesign } from '../boxBehnken';

describe('bbDesign', () => {
  it('should return a box-behnken design', () => {
    expect(bbDesign(3)).toStrictEqual([
      new Float64Array([-1, -1, 0]),
      new Float64Array([1, -1, 0]),
      new Float64Array([-1, 1, 0]),
      new Float64Array([1, 1, 0]),
      new Float64Array([-1, 0, -1]),
      new Float64Array([1, 0, -1]),
      new Float64Array([-1, 0, 1]),
      new Float64Array([1, 0, 1]),
      new Float64Array([0, -1, -1]),
      new Float64Array([0, 1, -1]),
      new Float64Array([0, -1, 1]),
      new Float64Array([0, 1, 1]),
      new Float64Array([0, 0, 0]),
      new Float64Array([0, 0, 0]),
      new Float64Array([0, 0, 0]),
    ]);
  });
});
