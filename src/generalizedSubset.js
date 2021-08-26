import { equidistantArray } from './utils';

export function latinSquare(factors) {
  const numbers = equidistantArray(1, factors, factors);
  const latinSquare = [numbers];
  for (let i = 1; i <= factors; i++) {
    const array = new Float64Array(factors);
    for (let j = 0; j < factors; j++) {
      array[j] = numbers[(j + i) % factors];
    }
    latinSquare.push(array);
  }
  return latinSquare;
}
