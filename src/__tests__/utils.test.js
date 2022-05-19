import {
  arrayTotalProduct,
  build2dMatrix,
  applyToMatrix,
  concatenate,
  transpose,
  maxCorrelationCoefficient,
  pDistance,
} from '../utils';

describe('arrayTotalProduct', () => {
  it('should return the product of each element in an array', () => {
    expect(arrayTotalProduct([1, 2, 3, 4, 5, 6, 7, 8, 9])).toBe(362880);
    expect(arrayTotalProduct([])).toBe(0);
    expect(arrayTotalProduct([64])).toBe(64);
  });
});
describe('build2dMatrix', () => {
  it('should build a 2D matrix', () => {
    expect(build2dMatrix(2, 3)).toStrictEqual([
      new Float64Array(3),
      new Float64Array(3),
    ]);
    expect(build2dMatrix(2, [3, 2])).toStrictEqual([
      new Float64Array([3, 2]),
      new Float64Array([3, 2]),
    ]);
    expect(build2dMatrix(1, [3, 2])).toStrictEqual(new Float64Array([3, 2]));
  });
});
describe('scale2dMatrix', () => {
  it('should multiply each element of a 2D matrix by a scalar', () => {
    expect(
      applyToMatrix(
        [
          [0.0, 0.0, 0.0],
          [1.0, 0.0, 0.0],
          [0.0, 1.0, 0.0],
          [1.0, 1.0, 0.0],
          [0.0, 0.0, 1.0],
          [1.0, 0.0, 1.0],
          [0.0, 1.0, 1.0],
          [1.0, 1.0, 1.0],
        ],
        (x) => {
          return 2 * x - 1;
        },
      ),
    ).toStrictEqual([
      [-1.0, -1.0, -1.0],
      [1.0, -1.0, -1.0],
      [-1.0, 1.0, -1.0],
      [1.0, 1.0, -1.0],
      [-1.0, -1.0, 1.0],
      [1.0, -1.0, 1.0],
      [-1.0, 1.0, 1.0],
      [1.0, 1.0, 1.0],
    ]);
  });
});

describe('concatenate', () => {
  it('should concatenate two matrices', () => {
    expect(
      concatenate(
        [new Float64Array([1, 2, 3]), new Float64Array([7, 8, 9])],
        [new Float64Array([4, 5, 6]), new Float64Array([10, 11, 12])],
      ),
    ).toStrictEqual([
      new Float64Array([1, 2, 3, 4, 5, 6]),
      new Float64Array([7, 8, 9, 10, 11, 12]),
    ]);
  });
});
describe('transpose', () => {
  it('should transpose a matrix', () => {
    expect(
      transpose([
        [1, 2, 3, 4],
        [5, 6, 7, 8],
      ]),
    ).toStrictEqual([
      new Float64Array([1, 5]),
      new Float64Array([2, 6]),
      new Float64Array([3, 7]),
      new Float64Array([4, 8]),
    ]);
  });
});

describe('pDistance', () => {
  it('should calculate the distances array of a matrix', () => {
    expect(
      pDistance([
        [0.1629447, 0.8616334],
        [0.5811584, 0.3826752],
        [0.2270954, 0.4442068],
        [0.7670017, 0.7264718],
        [0.8253975, 0.1937736],
      ]),
    ).toStrictEqual(
      new Float64Array([
        0.6358487683521373, 0.4223272175671963, 0.6189939558376641,
        0.9406808304009815, 0.359369928858217, 0.39081176329078177,
        0.3087661776350674, 0.609239150912587, 0.6486001777109299,
        0.5358893931968425,
      ]),
    );
  });
});

describe('maxCorrelationCoefficient', () => {
  it('should calculate the max coefficient between columns of a matrix', () => {
    expect(
      maxCorrelationCoefficient([
        new Float64Array([43, 99]),
        new Float64Array([21, 65]),
        new Float64Array([25, 79]),
        new Float64Array([42, 75]),
        new Float64Array([57, 87]),
        new Float64Array([59, 81]),
      ]),
    ).toBeCloseTo(0.529809);
    expect(
      maxCorrelationCoefficient([
        new Float64Array([15, 25]),
        new Float64Array([18, 25]),
        new Float64Array([21, 27]),
        new Float64Array([24, 31]),
        new Float64Array([27, 32]),
      ]),
    ).toBeCloseTo(0.953463);
  });
});
