import { star } from '../star.js';

describe('star', () => {
  it('should return a star matrix', () => {
    expect(star(3)).toStrictEqual({
      matrix: [
        new Float64Array([-1, 0, 0]),
        new Float64Array([1, 0, 0]),
        new Float64Array([0, -1, 0]),
        new Float64Array([0, 1, 0]),
        new Float64Array([0, 0, -1]),
        new Float64Array([0, 0, 1]),
      ],
      scale: 1,
    });
    expect(star(8, { alpha: 'orthogonal' })).toStrictEqual({
      matrix: [
        new Float64Array([-2.9097982868300183, 0, 0, 0, 0, 0, 0, 0]),
        new Float64Array([2.9097982868300183, 0, 0, 0, 0, 0, 0, 0]),
        new Float64Array([0, -2.9097982868300183, 0, 0, 0, 0, 0, 0]),
        new Float64Array([0, 2.9097982868300183, 0, 0, 0, 0, 0, 0]),
        new Float64Array([0, 0, -2.9097982868300183, 0, 0, 0, 0, 0]),
        new Float64Array([0, 0, 2.9097982868300183, 0, 0, 0, 0, 0]),
        new Float64Array([0, 0, 0, -2.9097982868300183, 0, 0, 0, 0]),
        new Float64Array([0, 0, 0, 2.9097982868300183, 0, 0, 0, 0]),
        new Float64Array([0, 0, 0, 0, -2.9097982868300183, 0, 0, 0]),
        new Float64Array([0, 0, 0, 0, 2.9097982868300183, 0, 0, 0]),
        new Float64Array([0, 0, 0, 0, 0, -2.9097982868300183, 0, 0]),
        new Float64Array([0, 0, 0, 0, 0, 2.9097982868300183, 0, 0]),
        new Float64Array([0, 0, 0, 0, 0, 0, -2.9097982868300183, 0]),
        new Float64Array([0, 0, 0, 0, 0, 0, 2.9097982868300183, 0]),
        new Float64Array([0, 0, 0, 0, 0, 0, 0, -2.9097982868300183]),
        new Float64Array([0, 0, 0, 0, 0, 0, 0, 2.9097982868300183]),
      ],
      scale: 2.9097982868300183,
    });
  });
});
