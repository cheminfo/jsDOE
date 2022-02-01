import { createXArray } from 'ml-spectra-processing';

export function encodeExperiment(array) {
  let experiments = [];
  let dict = {};
  let rowNumber = 0;

  for (let i = 0; i < array.length; i++) {
    let returnRow;

    if (array[i].min !== undefined) {
      let label = array[i].label;
      let min = array[i].min;
      let max = array[i].max;
      let nbSamples = array[i].nbSamples;
      let sampling = array[i].sampling;

      returnRow = Array.from(
        createXArray({
          from: min,
          to: max,
          length: nbSamples,
          distribution: sampling,
        }),
      );

      dict[rowNumber] = { label: label, values: returnRow };
      experiments.push(returnRow);
    } else if (array[i].values !== undefined) {
      let label = array[i].label;
      let values = array[i].values;
      returnRow = [];
      for (let i = 0; i < values.length; i++) {
        returnRow.push(i);
      }
      dict[rowNumber] = { label: label, values: values };
      experiments.push(returnRow);
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

  return { experiments, decodeExperiment };
}
