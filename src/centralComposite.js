import { centerRepeat } from './center';
import { ff2n } from './factorial';
import { star } from './star';
import { union } from './union';
import { applyToMatrix } from './utils';

/**
 * Generates a central composite design
 *
 * @export
 * @param {number} factors
 * @param {Object} options **alpha**: *orthogonal'* or *'rotatable'*, **face**: *'circumscribed'* or *'inscribed'* or *'faced'*, **center**: *[a,b]* number of center points in each block
 * @return {Array.<Float64Array>}
 */
export function ccDesign(factors, options) {
  const defaultOptions = {
    center: new Float64Array([4, 4]),
    alpha: 'orthogonal',
    face: 'circumscribed',
  };
  const option = { ...defaultOptions, ...options };
  let stars;
  let fracMatrix;
  switch (option.alpha) {
    case 'o':
    case 'orthogonal':
      stars = star(factors, option);
      break;
    case 'r':
    case 'rotatable':
      stars = star(factors, { alpha: 'rotatable' });
      break;
    default:
      throw new Error(`Invalid option alpha: ${option.alpha}`);
  }
  switch (option.face) {
    case 'cci':
    case 'inscribed':
      fracMatrix = ff2n(factors);
      fracMatrix = applyToMatrix(fracMatrix, (x) => {
        return x / stars.scale;
      });
      stars = star(factors);
      break;
    case 'ccf':
    case 'faced':
      stars = star(factors);
    //falls through
    case 'ccc':
    case 'circumscribed':
      fracMatrix = ff2n(factors);
      break;
    default:
      throw new Error(`Invalid option face: ${option.face}`);
  }

  const center1 = centerRepeat(factors, option.center[0]);
  const center2 = centerRepeat(factors, option.center[1]);

  fracMatrix = union(fracMatrix, center1);
  stars.matrix = union(stars.matrix, center2);
  const matrix = union(fracMatrix, stars.matrix);
  return matrix;
}
