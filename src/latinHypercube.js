import { matrix } from 'ml-matrix';
import { seedrandom } from 'seedrandom';

import { equidistantArray, build2dMatrix } from './utils';

export function randomMatrix(lines, columns, rng) {
  const matrix = build2dMatrix(lines, columns);
  for (let i = 0; i < lines; i++) {
    for (let j = 0; j < columns; j++) {
      matrix[i][j] = rng.quick();
    }
  }
  return matrix;
}

export function permuation(elements, rng) {
  if (elements.length === undefined) {
    elements = new Float64Array(elements);
    for (let i = 0; i < elements.length; i++) elements[i] = i;
  }
  //Durstenfeld shuffle
  for (let i = elements.length - 1; i > 0; i--) {
    const j = Math.floor(rng.quick() * (i + 1));
    [elements[i], elements[j]] = [elements[j], [elements[i]]];
  }
  return elements;
}

export function classicHypercube(factors, samples, seed) {
  const cut = equidistantArray(0, 1, samples + 1);
  const rng = new Math.seedrandom(seed);
  const randomized = randomMatrix(samples, factors, rng);
  for (let i = 0; i <= samples; i++) {
    for (let j = 0; j < factors; j++) {
      randomized[i][j] = randomized[i][j] * (cut[i] - cut[i + 1]) + cut[i + 1];
    }
  }
  return permuation(randomized, rng);
}
