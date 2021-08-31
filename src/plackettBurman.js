const fs = require('fs');

const utils = require('./utils');

/**
 * Builds a hadamard matrix
 *
 * @param {number} factors
 * @return {Array.<Float64Array>} hadamard matrix
 */
export function hadamard(factors) {
  if (!(factors % 4 === 0 || factors === 1)) {
    return [];
  }
  const matrix = utils.build2dMatrix(factors, factors);
  matrix[0][0] = 1;
  for (let n = 2; n <= factors; n <<= 1) {
    const limit = n / 2;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        const ilimit = i >= limit;
        const jlimit = j >= limit;
        if (ilimit && jlimit) {
          matrix[i][j] = -matrix[i - limit][j - limit];
        } else if (ilimit) {
          matrix[i][j] = matrix[i - limit][j];
        } else if (jlimit) {
          matrix[i][j] = matrix[i][j - limit];
        }
      }
    }
  }
  return matrix;
}

/**
 * Builds a Plackett-Burman design
 *
 * @param {number} factors multiple of 4 and lower than or equal to 48 for pregenerated else alternate design
 * @return {Array.<Array>} Plackett-Burman design
 */
export function pbDesign(factors) {
  if (factors % 4 !== 0 || factors > 48) {
    return trimmedHadamard(factors);
  }
  const read = fs.readFileSync(
    `${__dirname}/generated/plackettBurman/${factors}.json`,
  );
  return JSON.parse(read).data;
}

/**
 * Plackett-Burman generation using a hadamard matrix
 *
 * Used only when factors is not a multiple of 4
 *
 * Matches pyDOE2 but not other sources
 *
 * @param {number} factors must be a multiple of 4
 * @return {Array.<Float64Array>}
 */
export function trimmedHadamard(factors) {
  let factorsCopy = factors << 1;
  let powerOfTwo = -1;
  for (; factorsCopy !== 0 && powerOfTwo < 35; powerOfTwo++) {
    factorsCopy >>= 1;
  }
  const lines = 1 << powerOfTwo;
  const hdMatrix = hadamard(lines);
  const matrix = utils.build2dMatrix(lines, factors);
  for (let i = 0; i < lines; i++) {
    for (let j = 0; j < factors; j++) {
      matrix[i][j] = hdMatrix[lines - i - 1][j + 1];
    }
  }
  return matrix;
}
