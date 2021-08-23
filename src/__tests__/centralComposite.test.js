import { ccDesign } from '../centralComposite';

describe('ccDesign', () => {
  it('should generate a Central Composite Design', () => {
    expect(ccDesign(3)).toStrictEqual([
      new Float64Array([-1, -1, -1]),
      new Float64Array([1, -1, -1]),
      new Float64Array([-1, 1, -1]),
      new Float64Array([1, 1, -1]),
      new Float64Array([-1, -1, 1]),
      new Float64Array([1, -1, 1]),
      new Float64Array([-1, 1, 1]),
      new Float64Array([1, 1, 1]),
      new Float64Array([0, 0, 0]),
      new Float64Array([0, 0, 0]),
      new Float64Array([0, 0, 0]),
      new Float64Array([0, 0, 0]),
      new Float64Array([-1.8257418583505538, 0, 0]),
      new Float64Array([1.8257418583505538, 0, 0]),
      new Float64Array([0, -1.8257418583505538, 0]),
      new Float64Array([0, 1.8257418583505538, 0]),
      new Float64Array([0, 0, -1.8257418583505538]),
      new Float64Array([0, 0, 1.8257418583505538]),
      new Float64Array([0, 0, 0]),
      new Float64Array([0, 0, 0]),
      new Float64Array([0, 0, 0]),
      new Float64Array([0, 0, 0]),
    ]);
  });
});
