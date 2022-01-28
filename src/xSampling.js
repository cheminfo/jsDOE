'use strict';
exports.__esModule = true;
exports.xSampling = void 0;
/**
 * If array exists, evenly sample within the array. Otherwise if startPoint and endPoint are defined, evenly sample within this range according to the distribution
 * @param {number} startPoint - start point of the range if range constructed, no default value
 * @param {number} endPoint - end point of the range if range constructed, no default value
 * @param {number} nbPoints - number of points to sample within the array or the range, default is 100
 * @param {number} includeEnd - boolean value which specifies if one should include the end, only to be used if range is constructed, default value is true
 * @param {number} distribution - in the case when range is constructed, specified whether to use a uniform or log distribution, default is uniform
 * @param {number} base - in the case when range is constructed and log distribution is used, specifies which base to use, default is 10
 * @param {number} array - the array from which to sample from, if sampling from array, default is null
 * @return {array} array with evenly spaced elements
 */
function xSampling(options, array) {
  if (options === void 0) {
    options = {};
  }
  var _a = options.startPoint,
    startPoint = _a === void 0 ? null : _a,
    _b = options.endPoint,
    endPoint = _b === void 0 ? null : _b,
    _c = options.nbPoints,
    nbPoints = _c === void 0 ? 100 : _c,
    _d = options.includeStart,
    includeStart = _d === void 0 ? true : _d,
    _e = options.includeEnd,
    includeEnd = _e === void 0 ? true : _e,
    _f = options.distribution,
    distribution = _f === void 0 ? 'uniform' : _f,
    _g = options.base,
    base = _g === void 0 ? 10 : _g;
  var returnArray = [];

  if (array) {
    if (nbPoints > array.length) {
      throw new Error(
        'Choose sample number smaller than the number of elements in the array',
      );
    }
    var clonedArray = array.slice();
    // first element in array included anyway
    returnArray.push(clonedArray[0]);
    clonedArray.shift();
    var delta = Math.floor(clonedArray.length / (nbPoints - 1));
    for (
      var i = delta - 1, j = 0;
      i < clonedArray.length && j < nbPoints - 1;
      i = i + delta, j++
    ) {
      returnArray.push(clonedArray[i]);
    }
    return returnArray;
  } else if (
    typeof startPoint !== 'undefined' &&
    typeof endPoint !== 'undefined'
  ) {
    var div = nbPoints;
    if (includeEnd === true && includeStart === true) {
      div = nbPoints - 1;
    } else if (
      (includeEnd === false && includeStart === true) ||
      (includeEnd === true && includeStart === false)
    ) {
      div = nbPoints;
    } else if (includeEnd === false && includeStart === false) {
      div = nbPoints + 1;
    }
    var delta = (endPoint - startPoint) / div;
    if (distribution === 'uniform') {
      if (includeStart === true) {
        for (
          var i = 0, j = 0;
          i <= endPoint && j < nbPoints;
          i = i + delta, j++
        ) {
          returnArray.push(startPoint + i);
        }
      } else {
        for (
          var i = 0, j = 0;
          i < endPoint && j < nbPoints;
          i = i + delta, j++
        ) {
          returnArray.push(startPoint + delta + i);
        }
      }
    } else if (distribution === 'log') {
      if (includeStart === true) {
        for (
          var i = 0, j = 0;
          i < endPoint && j < nbPoints;
          i = i + delta, j++
        ) {
          returnArray.push(Math.pow(base, startPoint + i));
        }
      } else {
        for (
          var i = 0, j = 0;
          i < endPoint && j < nbPoints;
          i = i + delta, j++
        ) {
          returnArray.push(Math.pow(base, startPoint + delta + i));
        }
      }
    } else {
      throw new Error(
        'Please choose for the distribution either uniform or log. By default the distribution chosen is uniform.',
      );
    }
    return returnArray;
  } else {
    throw new Error('Specify either an array, or a starting and ending points');
  }
}
exports.xSampling = xSampling;
