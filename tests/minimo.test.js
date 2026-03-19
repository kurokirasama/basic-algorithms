const { minimo } = require('../src/algorithms');

describe('minimo algorithm', () => {
  it('should find the minimum value in an array', () => {
    expect(minimo([5, 3, 8, 1, 4])).toBe(1);
  });

  it('should work with negative numbers', () => {
    expect(minimo([-5, -3, -8, -1, -4])).toBe(-8);
  });

  it('should work with a single element array', () => {
    expect(minimo([42])).toBe(42);
  });
});
