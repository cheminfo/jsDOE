const utils = require('./utils');

export function fullFactorial(levels) {
  const factors = levels.length;
  const lines = utils.arrayProduct(levels);
  const matrix = utils.build2dMatrix(lines, factors);
  for (let i = 0; i < lines; i++) {
    let last = 1;
    for (let j = 0; j < factors; j++) {
      const lvl = levels[j];
      matrix[i][j] = ((i / last) << 0) % lvl;
      last *= lvl;
    }
  }
  return matrix;
}

export function ff2n(n) {
  return utils.applyToMatrix(
    fullFactorial(utils.build2dMatrix(1, n).fill(2)),
    (x) => {
      return 2 * x - 1;
    },
  );
}
