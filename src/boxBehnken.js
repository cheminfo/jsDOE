import { centerRepeat } from './center';
import { ff2n } from './factorial';
import { union } from './union';

export function bbDesign(factors, centers) {
  if (factors < 3) {
    throw new Error('bbDesign: factors must be greater than 3');
  }
  const fracMat = ff2n(2);
  const fracLen = fracMat.length;
  const lines = (0.5 * factors * (factors - 1) * fracLen) << 0;
  const matrix = centerRepeat(factors, lines);
  let index = 0;
  for (let i = 0; i < factors - 1; i++) {
    for (let j = i + 1; j < factors; j++) {
      index++;
      for (let k = (index - 1) * fracLen; k < index * fracLen; k++) {
        const smolIndex = k - (index - 1) * fracLen;
        matrix[k][i] = fracMat[smolIndex][0];
        matrix[k][j] = fracMat[smolIndex][1];
      }
    }
  }
  if (centers === undefined) {
    if (factors <= 11) {
      if (factors <= 2) {
        centers = 0;
      } else if (factors <= 4) {
        centers = 3;
      } else if (factors <= 7) {
        centers = 6;
      } else if (factors <= 10) {
        centers = factors;
      } else {
        centers = 12;
      }
    } else {
      centers = factors;
    }
  }
  return union(matrix, centerRepeat(factors, centers));
}
