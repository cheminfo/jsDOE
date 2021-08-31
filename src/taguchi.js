const fs = require('fs');

/**
 * Returns a Taguchi design
 *
 * @export
 * @param {Array} parameters [rows, levels, factors, levels, factors,  ...]
 * @return {Array.<Array>} Taguchi design matrix
 */
export function taguchi(parameters) {
  let fileName = `L${parameters[0]}`;
  for (let i = 1; i < parameters.length; i++) {
    fileName += `_${parameters[i]}`;
  }
  const read = fs.readFileSync(
    `${__dirname}/generated/taguchi/${fileName}.json`,
  );
  return JSON.parse(read).data;
}
