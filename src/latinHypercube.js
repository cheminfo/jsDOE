//import { matrix } from 'ml-matrix';
import { alea } from 'seedrandom';

import {
  equidistantArray,
  build2dMatrix,
  pDistance,
  maxCorrelationCoefficient,
} from './utils';

/**
 * Generates a seeded randomized matrix
 *
 * @param {number} lines
 * @param {number} columns
 * @param {seedrandom.alea} rng alea object from seedrandom
 * @return {Array.<Float64Array>} randomized matrix
 */
export function randomMatrix(lines, columns, rng) {
  const matrix = build2dMatrix(lines, columns);
  for (let i = 0; i < lines; i++) {
    for (let j = 0; j < columns; j++) {
      matrix[i][j] = rng.quick();
    }
  }
  return matrix;
}

/**
 * Returns a random permutation of either a given array or the range from 0 to the given number
 *
 * @param {Array|number} elements
 * @param {seedrandom.alea} rng alea object from seedrandom
 * @return {Float64Array}
 */
export function permutation(elements, rng) {
  if (elements.length === undefined) {
    elements = new Float64Array(elements);
    for (let i = 0; i < elements.length; i++) elements[i] = i;
  }
  //Durstenfeld shuffle
  for (let i = elements.length - 1; i > 0; i--) {
    const j = Math.floor(rng.quick() * (i + 1));
    [elements[i], elements[j]] = [elements[j], elements[i]];
  }
  return elements;
}

/**
 * Classic generation of Latin Hypercube
 *
 * @param {number} factors
 * @param {number} samples
 * @param {string} seed
 * @return {Array.<Float64Array>}
 */
export function classicHypercube(factors, samples, seed) {
  const cut = equidistantArray(0, 1, samples + 1);
  const rng = new alea(seed);
  const randomized = randomMatrix(samples, factors, rng);
  for (let i = 0; i < samples; i++) {
    for (let j = 0; j < factors; j++) {
      randomized[i][j] = randomized[i][j] * (cut[i] - cut[i + 1]) + cut[i + 1];
    }
  }
  return permutation(randomized, rng);
}

/**
 * Centered generation of Latin Hypercube
 *
 * @param {number} factors
 * @param {number} samples
 * @param {string} seed
 * @return {Array.<Float64Array>} hypercube
 */
export function centeredHypercube(factors, samples, seed) {
  const cut = equidistantArray(0, 1, samples + 1);
  const rng = new alea(seed);
  const center = new Float64Array(samples);
  for (let i = 0; i < samples; i++) {
    center[i] = (cut[i] + cut[i + 1]) / 2;
  }
  const matrix = build2dMatrix(samples, factors);
  for (let j = 0; j < factors; j++) {
    const perm = permutation(center, rng);
    for (let i = 0; i < samples; i++) {
      matrix[i][j] = perm[i];
    }
  }
  return matrix;
}

/**
 * Generates Latin Hypercube whose elements are maximally distanced from each other
 *
 * @param {number} factors
 * @param {number} samples
 * @param {number} iterations
 * @param {string} cubeType
 * @param {string} seed
 * @return {Array.<Float64Array>} hypercube
 */
export function maximizedHypercube(
  factors,
  samples,
  iterations,
  cubeType,
  seed,
) {
  let maxDistance = 0;
  let matrix;
  const func = cubeType === 'maximin' ? classicHypercube : centeredHypercube;
  for (let i = 0; i < iterations; i++) {
    const candidate = func(factors, samples, seed);
    const minDistance = Math.min(pDistance(candidate));
    if (maxDistance < minDistance) {
      maxDistance = minDistance;
      matrix = candidate;
    }
  }
  return matrix;
}

/**
 * Generates a Latin Hypercube whose elements have
 * as low a correlation coefficient as possible
 *
 * @param {number} factors
 * @param {number} samples
 * @param {number} iterations
 * @param {string} seed
 * @return {Array.<Float64Array>} hypercube
 */
export function correlatedCoefficientsHypercube(
  factors,
  samples,
  iterations,
  seed,
) {
  let minCorrelation;
  let matrix;
  for (let i = 0; i < iterations; i++) {
    const candidate = classicHypercube(factors, samples, seed);
    const maxCoef = maxCorrelationCoefficient(candidate, true);
    if (!(maxCoef >= minCorrelation)) {
      minCorrelation = maxCoef;
      matrix = candidate;
    }
  }
  return matrix;
}

//todo lhsmu
