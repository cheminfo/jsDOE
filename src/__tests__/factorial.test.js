const factorial = require('../factorial');

describe('fullFactorial', () => {
    it('should return a design matrix with coded levels 0 to k-1 for a k-level factor', () => {
      expect(factorial.fullFactorial([2,4,3])).toStrictEqual(
        [new Float64Array([ 0.0, 0.0, 0.0]),
        new Float64Array([ 1.0, 0.0, 0.0]),
        new Float64Array([ 0.0, 1.0, 0.0]),
        new Float64Array([ 1.0, 1.0, 0.0]),
        new Float64Array([ 0.0, 2.0, 0.0]),
        new Float64Array( [ 1.0, 2.0, 0.0]),
        new Float64Array([ 0.0, 3.0, 0.0]),
        new Float64Array([ 1.0, 3.0, 0.0]),
        new Float64Array([ 0.0, 0.0, 1.0]),
        new Float64Array( [ 1.0, 0.0, 1.0]),
        new Float64Array([ 0.0, 1.0, 1.0]),
        new Float64Array( [ 1.0, 1.0, 1.0]),
        new Float64Array( [ 0.0, 2.0, 1.0]),
        new Float64Array( [ 1.0, 2.0, 1.0]),
        new Float64Array( [ 0.0, 3.0, 1.0]),
        new Float64Array( [ 1.0, 3.0, 1.0]),
        new Float64Array( [ 0.0, 0.0, 2.0]),
        new Float64Array( [ 1.0, 0.0, 2.0]),
        new Float64Array([ 0.0, 1.0, 2.0]),
        new Float64Array( [ 1.0, 1.0, 2.0]),
        new Float64Array( [ 0.0, 2.0, 2.0]),
        new Float64Array( [ 1.0, 2.0, 2.0]),
        new Float64Array( [ 0.0, 3.0, 2.0]),
        new Float64Array( [ 1.0, 3.0, 2.0])]);
    });
  });