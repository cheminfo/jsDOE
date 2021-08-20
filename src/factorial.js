const utils = require('./utils');

export function fullFactorial(levels) {
  const factors = levels.length;
  const lines = utils.arrayTotalProduct(levels);
  const matrix = utils.build2dMatrix(lines, factors);
  for (let i = 0; i < lines; i++) {
    let last = 1;
    for (let j = 0; j < factors; j++) {
      const lvl = levels[j];
      matrix[i][j] = ((i / last) << 0) % lvl;
      last *= lvl;
    }
  }
  return matrix;
}

export function ff2n(n) {
  return utils.applyToMatrix(
    fullFactorial(utils.build2dMatrix(1, n).fill(2)),
    (x) => {
      return 2 * x - 1;
    },
  );
}

export function fractionalFactorial(gen) {
  const index = {};
  let count = 0;
  let singleCount = 0;
  let word = '';
  const single = [];
  const multiple = [];
  //Map each element in the input expression
  for (let i = 0; i <= gen.length; i++) {
    if (i === gen.length || gen[i] === ' ') {
      if (word) {
        index[word] = count++;
        if (word.length <= 1) {
          if (word >= 'A') {
            singleCount++;
            single.push(word);
          }
        } else {
          multiple.push(word);
        }
        word = '';
      }
    } else {
      word += gen[i];
    }
  }
  const singleMatrix = ff2n(singleCount);
  const lines = singleMatrix.length;
  const finalMatrix = utils.applyToMatrix(
    utils.build2dMatrix(lines, count),
    () => {
      return 1;
    },
  );
  //final matrix filling - single values
  for (let i = 0; i < singleCount; i++) {
    const currentIndex = index[single[i]];
    for (let j = 0; j < lines; j++) {
      finalMatrix[j][currentIndex] = singleMatrix[j][i];
    }
  }
  //final matrix filling - product values
  for (let i = 0; i < multiple.length; i++) {
    const str = multiple[i];
    const currentIndex = index[str];
    for (let k = 0; k < str.length; k++) {
      const char = str[k];
      if (char === '-') {
        for (let j = 0; j < lines; j++) {
          finalMatrix[j][currentIndex] *= -1;
        }
      } else {
        const multIndex = index[char];
        if (multIndex !== undefined) {
          for (let j = 0; j < lines; j++) {
            finalMatrix[j][currentIndex] *= finalMatrix[j][multIndex];
          }
        }
      }
    }
  }
  return finalMatrix;
}
