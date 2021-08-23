/**
 * Stacks the first matrix on top of the second matrix
 * @param {Array.<Array>} matrix1 Top matrix
 * @param {Array.<Array>} matrix2 Bottom matrix
 * @returns
 */
export function union(matrix1, matrix2) {
  for (let i = 0; i < matrix2.length; i++) matrix1.push(matrix2[i]);
  return matrix1;
}
