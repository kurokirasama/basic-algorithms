const { tridiagonal } = require('../src/algorithms');

describe('tridiagonal algorithm', () => {
  it('should generate a 3x3 tridiagonal matrix', () => {
    // Input: a=2, b=1, c=3, n=3
    // A(i,i)=a, A(i,i+1)=b, A(i,i-1)=c
    const expected = [
      [2, 1, 0],
      [3, 2, 1],
      [0, 3, 2]
    ];
    expect(tridiagonal(2, 1, 3, 3)).toEqual(expected);
  });

  it('should work with a 1x1 matrix', () => {
    expect(tridiagonal(5, 1, 2, 1)).toEqual([[5]]);
  });
});
