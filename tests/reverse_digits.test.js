const { reverse_digits } = require('../src/algorithms');

describe('reverse_digits algorithm', () => {
  it('should reverse the digits of a positive integer', () => {
    const input = 1234;
    const { digits, count } = reverse_digits(input);
    expect(digits).toEqual([4, 3, 2, 1]);
    expect(count).toBe(4);
  });

  it('should handle a single digit number', () => {
    const { digits, count } = reverse_digits(5);
    expect(digits).toEqual([5]);
    expect(count).toBe(1);
  });

  it('should handle zero', () => {
    const { digits, count } = reverse_digits(0);
    // Pseudocode says while n > 0. Let's see how it behaves for 0.
    // Based on pseudocode, it might return empty or handle 0 specifically.
    // Let's expect it to return [0] as a single digit for now.
    expect(digits).toEqual([0]);
    expect(count).toBe(1);
  });
});
