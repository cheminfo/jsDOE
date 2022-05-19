import { build2dMatrix } from './utils';
/**
 * Generates star points of various design matrices
 *
 * @export
 * @param {number} factors
 * @param {Object} options {**alpha**: *'faced'* (default) or *'orthogonal'* or *'rotatable'*, **centers**:*[1,1]* (default) number of center points in each block}
 * @return {Object} {star point, scale}
 */
export function star(factors, options) {
  const defaultOptions = { alpha: 'faced', center: new Float64Array([1, 1]) };
  const option = { ...defaultOptions, ...options };
  let scale;
  const factPoints = 1 << factors;
  const axialPoints = 2 * factors;
  switch (option.alpha) {
    case 'faced':
      scale = 1;
      break;
    case 'orthogonal':
      scale =
        ((factors * (1 + option.center[1] / axialPoints)) /
          (1 + option.center[0] / factPoints)) **
        0.5;
      break;
    case 'rotatable':
      scale = factPoints ** 0.5;
      break;
    default:
      throw new Error(`Invalid value for 'alpha': ${option.alpha}`);
  }
  const matrix = build2dMatrix(axialPoints, factors);
  for (let i = 0; i < factors; i++) {
    matrix[2 * i][i] = -scale;
    matrix[2 * i + 1][i] = scale;
  }
  return { matrix, scale };
}
