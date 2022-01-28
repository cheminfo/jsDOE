import { xSampling } from './xSampling.js';

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
      // presumably values is an array
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
