const utils = require('./utils');

export function fullFactorial(levels){
    const factors = levels.length;
    const lines = utils.arrayProduct(levels);
    const matrix = utils.build2dMatrix(lines,factors);
    for (let i = 0; i<lines; i++){
        for (let j = 0; j<factors; j++){
            matrix[i][j] = ((i/(1<<((j*j+j)/2)))<<0)%levels[j];
        }
    }
    return matrix;
}