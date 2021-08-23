/**
 * Calculates the product of every elements in an array
 * @param {Array} array
 * @returns {number} Total product
 */
export function arrayTotalProduct(array) {
  let product = 1;
  let i = 0;
  for (; i < array.length; i++) {
    product *= array[i];
  }
  return i === 0 ? i : product;
}

/**
 * Builds a 2-dimensional matrix,
 * 1-Dimensional if lines === 1
 * @param {number} lines
 * @param {number|Float64Array} columns
 * @returns The matrix
 */
export function build2dMatrix(lines, columns) {
  const matrix = [];
  for (let i = 0; i < lines; i++) {
    matrix.push(new Float64Array(columns));
  }
  return lines > 1 ? matrix : matrix[0];
}

/**
 * Applies a function to every element in a matrix
 * @param {Array.<Float64Array>} matrix
 * @param {function} lambda Lambda expression (x) => {return ...}
 * @returns {Array.<Float64Array>}
 */
export function applyToMatrix(matrix, lambda) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      matrix[i][j] = lambda(matrix[i][j]);
    }
  }
  return matrix;
}

export function isPowerOf2(n) {
  return n && !(n & (n - 1));
}
