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
