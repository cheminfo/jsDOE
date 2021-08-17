const utils = require('../utils');

describe('arrayProduct', () => {
    it('should return the product of each element in an array', () => {
      expect(utils.arrayProduct([1,2,3,4,5,6,7,8,9])).toStrictEqual(362880);
      expect(utils.arrayProduct([])).toStrictEqual(0);
      expect(utils.arrayProduct([64])).toStrictEqual(64);
    });
  });
  describe('build2dMatrix', () => {
    it('should build a 2D matrix', () => {
        expect(utils.build2dMatrix(2,3)).toStrictEqual([new Float64Array(3),new Float64Array(3)]);
    });
});