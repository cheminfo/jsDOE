/**
 * Folds a matrix, can set which columns are folded
 *
 * @export
 * @param {Array.<Array>} matrix to fold
 * @param {Arrays} columns Column indexes to fold; Nothing if all columns
 * @return {*
 */
export function fold(matrix, columns) {
  const numCols = columns ? columns.length : matrix[0].length;
  const oldLength = matrix.length;
  for (let i = 0; i < oldLength; i++) {
    matrix.push(new Float64Array(numCols));
  }
  let colIndex = 0;
  for (let j = 0; j < numCols; j++) {
    let factor = 1;
    if (columns === undefined || j === columns[colIndex]) {
      factor = -1;
      colIndex++;
    }
    for (let i = 0; i < oldLength; i++) {
      matrix[i + oldLength][j] = matrix[i][j] * factor;
    }
  }
  return matrix;
}
