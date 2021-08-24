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

export function transpose(matrix) {
  const output = build2dMatrix(matrix[0].length, matrix.length);
  for (let i = 0; i < output.length; i++) {
    for (let j = 0; j < output[i].length; j++) {
      output[i][j] = matrix[j][i];
    }
  }
  return output;
}

export function concatenate(mat1, mat2) {
  if (mat1.length !== mat2.length) {
    throw new Error(
      'concatenate: both matrices should have the same number of rows',
    );
  }
  const matrix = build2dMatrix(mat1.length, mat1[0].length + mat2[0].length);
  for (let i = 0; i < mat1.length; i++) {
    let j = 0;
    for (; j < mat1[0].length; j++) {
      matrix[i][j] = mat1[i][j];
    }
    for (let k = 0; k < mat2[0].length; k++) {
      matrix[i][j + k] = mat2[i][k];
    }
  }
  return matrix;
}
