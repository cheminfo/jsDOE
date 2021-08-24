const utils = require('../utils');

describe('arrayTotalProduct', () => {
  it('should return the product of each element in an array', () => {
    expect(utils.arrayTotalProduct([1, 2, 3, 4, 5, 6, 7, 8, 9])).toStrictEqual(
      362880,
    );
    expect(utils.arrayTotalProduct([])).toStrictEqual(0);
    expect(utils.arrayTotalProduct([64])).toStrictEqual(64);
  });
});
describe('build2dMatrix', () => {
  it('should build a 2D matrix', () => {
    expect(utils.build2dMatrix(2, 3)).toStrictEqual([
      new Float64Array(3),
      new Float64Array(3),
    ]);
    expect(utils.build2dMatrix(2, [3, 2])).toStrictEqual([
      new Float64Array([3, 2]),
      new Float64Array([3, 2]),
    ]);
    expect(utils.build2dMatrix(1, [3, 2])).toStrictEqual(
      new Float64Array([3, 2]),
    );
  });
});
describe('scale2dMatrix', () => {
  it('should multiply each element of a 2D matrix by a scalar', () => {
    expect(
      utils.applyToMatrix(
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
      utils.concatenate(
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
      utils.transpose([
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
