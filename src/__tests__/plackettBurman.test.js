const pb = require('../plackettBurman.js');

describe('buildOffset', () => {
  it('should create a matrix composed of diagonals of the first column', () => {
    expect(
      pb.buildOffset([
        [0.0, 0.0, 0.0],
        [1.0, 0.0, 0.0],
        [0.0, 0.0, 0.0],
        [1.0, 0.0, 0.0],
      ]),
    ).toStrictEqual([
      [0.0, 0.0, 0.0],
      [1.0, 1.0, 0.0],
      [0.0, 1.0, 1.0],
      [1.0, 0.0, 1.0],
    ]);
  });
});

describe('hadamard', () => {
  it('should create a hadamard matrix', () => {
    expect(pb.hadamard(4)).toStrictEqual([
      new Float64Array([1, 1, 1, 1]),
      new Float64Array([1, -1, 1, -1]),
      new Float64Array([1, 1, -1, -1]),
      new Float64Array([1, -1, -1, 1]),
    ]);
  });
});
