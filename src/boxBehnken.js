import { centerRepeat } from './center';
import { ff2n } from './factorial';
import { concatenate, transpose } from './utils';

export function bbDesign(factors, centers) {
  const fracMat = ff2n(factors);
  const fracLen = fracMat.length;
  const lines = ((0.5 * factors * (factors - 1)) << 0) * fracLen;
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
    if (factors <= 16) {
      const points = new Uint8Array([
        0, 0, 0, 3, 3, 6, 6, 6, 8, 9, 10, 12, 12, 13, 14, 15, 16,
      ]);
      centers = points[factors];
    } else {
      centers = factors;
    }
  }
  return transpose(
    concatenate(transpose(matrix), transpose(centerRepeat(factors, centers))),
  );
}
