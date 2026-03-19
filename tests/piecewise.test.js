const { piecewise } = require('../src/algorithms');

describe('piecewise algorithm', () => {
  it('should return x^2 for x <= -1', () => {
    expect(piecewise(-2)).toBe(4);
    expect(piecewise(-1)).toBe(1);
  });

  it('should return x for -1 < x < 1', () => {
    expect(piecewise(0)).toBe(0);
    expect(piecewise(0.5)).toBe(0.5);
  });

  it('should return x^3 for x >= 1', () => {
    expect(piecewise(1)).toBe(1);
    expect(piecewise(2)).toBe(8);
  });
});
