export function arrayProduct(array) {
  let product = 1;
  let i = 0;
  for (; i < array.length; i++) {
    product *= array[i];
  }
  return i === 0 ? i : product;
}

export function build2dMatrix(lines, columns) {
  const matrix = [];
  for (let i = 0; i < lines; i++) {
    matrix.push(new Float64Array(columns));
  }
  return lines > 1 ? matrix : matrix[0];
}

export function applyToMatrix(matrix, lambda) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      matrix[i][j] = lambda(matrix[i][j]);
    }
  }
  return matrix;
}

// export function buildMultiplicativeArray(array){
//     const cumulArray = new Float64Array(array.length);
//     cumulArray[0] = 1;
//     for (let i = 1; i<array.length; i++){
//         cumulArray[i] = cumulArray[i-1] * array[i-1]
//     }
//     return cumulArray;
// }
