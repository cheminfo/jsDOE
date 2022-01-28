export function encodeExperiment(array) {
  let returnArray = [];
  let dict = {};
  let rowNumber = 0;

  for (let i = 0; i < array.length; i++) {
    let returnRow;

    if ('min' in array[i]) {
      let label = array[i]['label'];
      let min = array[i]['min'];
      let max = array[i]['max'];
      let nbSamples = array[i]['nbSamples'];
      let sampling = array[i]['sampling'];

      returnRow = xSampling({
        startPoint: min,
        endPoint: max,
        nbPoints: nbSamples,
        distribution: sampling,
      });
      dict[rowNumber] = { label: label, values: returnRow };
      returnArray.push(returnRow);
    } else if ('values' in array[i]) {
      let label = array[i]['label'];
      let values = array[i]['values'];
      returnRow = [];
      for (let i = 0; i < values.length; i++) {
        returnRow.push(i);
      }
      dict[rowNumber] = { label: label, values: values };
      returnArray.push(returnRow);
    }
    rowNumber++;
  }

  function decodeExperiment(arrayOfExperiments) {
    let returnArrayOfExperiments = [];
    for (let i = 0; i < arrayOfExperiments.length; i++) {
      let index = 0;
      let experiment = {};
      for (let j = 0; j < arrayOfExperiments[i].length; j++) {
        experiment[dict[index]['label']] =
          dict[index]['values'][arrayOfExperiments[i][j]];
        index++;
      }
      returnArrayOfExperiments.push(experiment);
    }
    return returnArrayOfExperiments;
  }

  return { returnArray, decodeExperiment };
}

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
