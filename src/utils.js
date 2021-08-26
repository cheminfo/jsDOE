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

/**
 * Checks if the given number is a power of two
 *
 * @param {number} n
 * @return {boolean} true if the number is a power of two
 */
export function isPowerOf2(n) {
  return n && !(n & (n - 1));
}

/**
 * Returns the transpose of a matrix
 *
 * @param {Array.<Float64Array>} matrix
 * @return {Array.<Float64Array>} transposed matrix
 */
export function transpose(matrix) {
  const output = build2dMatrix(matrix[0].length, matrix.length);
  for (let i = 0; i < output.length; i++) {
    for (let j = 0; j < output[i].length; j++) {
      output[i][j] = matrix[j][i];
    }
  }
  return output;
}

/**
 * Concatenates two matrices horizontally
 *
 * @param {Array.<Float64Array>} mat1
 * @param {Array.<Float64Array>} mat2
 * @return {Array.<Float64Array>} concatenated array
 */
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

/**
 * Generates an array of evenly spaced numbers
 * @param {number} minimum Lower bound
 * @param {number} maximum Upper bound
 * @param {number} numberPoints Number of points
 * @return {array} Evenly spaced numbers
 */
export function equidistantArray(minimum, maximum, numberPoints) {
  const equidistantArray = new Float64Array(numberPoints);
  const step = (maximum - minimum) / (numberPoints - 1);
  for (let i = 0; i < numberPoints; i++) {
    equidistantArray[i] = minimum + i * step;
  }
  return equidistantArray;
}

/**
 * Finds the greatest absolute value in a given array
 *
 * @param {array} array
 * @return {number} greatest number
 */
export function absoluteMax(array) {
  let max = 0;
  for (let i = 0; i < array.length; i++) {
    if (Math.abs(array[i]) > max) {
      max = Math.abs(array[i]);
    }
  }
  return max;
}

/**
 * Calculates the pair-wise euclidean point distances of a matrix
 *
 * @param {Array.<Float64Array>} matrix
 * @return {Float64Array} distances
 */
export function pDistance(matrix) {
  const mLength = matrix.length;
  const mCols = matrix[0].length;
  if (mLength < 2) {
    return new Float64Array();
  }
  const distances = new Float64Array((mLength * (mLength - 1)) >> 1);
  let index = 0;
  for (let i = 0; i < mLength - 1; i++) {
    for (let j = i + 1; j < mLength; j++) {
      let sqDistance = 0;
      for (let k = 0; k < mCols; k++) {
        sqDistance += (matrix[j][k] - matrix[i][k]) ** 2;
      }
      distances[index] = sqDistance ** 0.5;
      index++;
    }
  }
  return distances;
}

//todo do this function
export function maxCorrelationCoefficient(matrix, transpose = false) {
  return matrix & transpose;
}
