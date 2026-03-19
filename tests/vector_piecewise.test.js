const { vector_piecewise } = require('../src/algorithms');

describe('vector_piecewise algorithm', () => {
  it('should apply piece-wise logic to all elements of a vector', () => {
    // f(x) = x^2 if x <= -1, x if -1 < x < 1, x^3 if x >= 1
    const input = [-2, 0, 2]; // [-2 <= -1 -> 4, 0 -> 0, 2 >= 1 -> 8]
    const expected = [4, 0, 8];
    expect(vector_piecewise(input, 3)).toEqual(expected);
  });

  it('should handle single element vectors', () => {
    expect(vector_piecewise([-1], 1)).toEqual([1]);
  });
});
