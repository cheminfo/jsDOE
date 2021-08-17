export function arrayProduct(array){
    let product = 1;
    let i = 0;
    for (; i<array.length; i++){
        product *= array[i];
    }
    return (i===0)?i:product;
}

export function build2dMatrix(lines, columns){
    const matrix = [];
    for (let i = 0; i<lines; i++){
        matrix.push(new Float64Array(columns));
    }
    return matrix;
}
