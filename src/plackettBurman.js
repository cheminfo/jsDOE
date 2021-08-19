export function buildOffset(matrix) {
  if (!matrix) return matrix;
  const lines = matrix.length - 1;
  const columns = matrix[0].length;
  for (let i = 1; i <= lines; i++) {
    const current = matrix[i][0];
    let index = i;
    for (let j = 1; j < columns; j++) {
      matrix[1 + (index++ % lines)][j] = current;
    }
  }
  return matrix;
}
