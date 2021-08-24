import { fold } from '../folding';

describe('fold', () => {
  it('should fold a matrix', () => {
    expect(
      fold([
        new Float64Array([-1.0, -1.0, -1.0]),
        new Float64Array([1.0, -1.0, -1.0]),
        new Float64Array([-1.0, 1.0, -1.0]),
        new Float64Array([1.0, 1.0, -1.0]),
        new Float64Array([-1.0, -1.0, 1.0]),
        new Float64Array([1.0, -1.0, 1.0]),
        new Float64Array([-1.0, 1.0, 1.0]),
        new Float64Array([1.0, 1.0, 1.0]),
      ]),
    ).toStrictEqual([
      new Float64Array([-1.0, -1.0, -1.0]),
      new Float64Array([1.0, -1.0, -1.0]),
      new Float64Array([-1.0, 1.0, -1.0]),
      new Float64Array([1.0, 1.0, -1.0]),
      new Float64Array([-1.0, -1.0, 1.0]),
      new Float64Array([1.0, -1.0, 1.0]),
      new Float64Array([-1.0, 1.0, 1.0]),
      new Float64Array([1.0, 1.0, 1.0]),
      new Float64Array([1.0, 1.0, 1.0]),
      new Float64Array([-1.0, 1.0, 1.0]),
      new Float64Array([1.0, -1.0, 1.0]),
      new Float64Array([-1.0, -1.0, 1.0]),
      new Float64Array([1.0, 1.0, -1.0]),
      new Float64Array([-1.0, 1.0, -1.0]),
      new Float64Array([1.0, -1.0, -1.0]),
      new Float64Array([-1.0, -1.0, -1.0]),
    ]);
  });
});
