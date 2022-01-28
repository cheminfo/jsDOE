import { encodeExperiment } from '../encodeExperiment';

let array = [
  { label: 'temperature', min: 0, max: 100, nbSamples: 5, sampling: 'uniform' },
  { label: 'solvant', min: 0.1, max: 1, nbSamples: 3, sampling: 'log' },
  { label: 'product 1', values: ['A', 'B', 'C', 'D'] },
  { label: 'product 2', values: ['E', 'F', 'G'] },
];

describe('test encodeExperiment function', () => {
  it('verifying matrix returned is correct', () => {
    let result = encodeExperiment(array);
    expect(result.returnArray).toStrictEqual([
      [0, 25, 50, 75, 100],
      [1.2589254117941673, 3.548133892335755, 10],
      [0, 1, 2, 3],
      [0, 1, 2],
    ]);
  });

  it('verifying the callback works well', () => {
    let result = encodeExperiment(array);
    let decodeExperiment = result.decodeExperiment;
    let experiments = decodeExperiment([
      [0, 2, 1, 2],
      [1, 2, 2, 2],
    ]);
    expect(experiments).toStrictEqual([
      { temperature: 0, solvant: 10, 'product 1': 'B', 'product 2': 'G' },
      { temperature: 25, solvant: 10, 'product 1': 'C', 'product 2': 'G' },
    ]);
  });
});
