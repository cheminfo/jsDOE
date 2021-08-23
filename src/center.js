import { build2dMatrix } from './utils';
/** Create the center-point portion of a design matrix
 *
 * @param {number} factors Number of factors in the original design
 * @param {number} nbPoints Number of center points to repeat;
 */
export function centerRepeat(factors, nbPoints) {
  return build2dMatrix(nbPoints, factors);
}
