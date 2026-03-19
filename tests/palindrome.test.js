const { palindrome } = require('../src/algorithms');

describe('palindrome algorithm', () => {
  it('should identify a palindrome number', () => {
    expect(palindrome(1221)).toBe(true);
  });

  it('should identify a non-palindrome number', () => {
    expect(palindrome(1234)).toBe(false);
  });

  it('should treat single digit as a palindrome', () => {
    expect(palindrome(5)).toBe(true);
  });
});
