import { classicHypercube } from '../latinHypercube';

describe('classicHypercube', () => {
  it('should be deterministic', () => {
    const test1 = classicHypercube(3, 4, '42');
    const test2 = classicHypercube(3, 4, '42');
    expect(test1).toStrictEqual(test2);
    expect(test1).toStrictEqual([
      new Float64Array([
        0.07878412591526285, 0.11341888306196779, 0.038601670356001705,
      ]),
      new Float64Array([
        0.7387624834664166, 0.5895959589397535, 0.5464281430467963,
      ]),
      new Float64Array([
        0.9220379018806852, 0.901955314388033, 0.9146161416429095,
      ]),
      new Float64Array([
        0.450228619214613, 0.3590654695290141, 0.2591152423992753,
      ]),
    ]);
  });
});
