const { sort_desc } = require('../src/algorithms');

describe('sort_desc algorithm', () => {
  it('should sort an array in descending order', () => {
    const input = [12, 43, 86, 53, 79, 47, 91];
    const expected = [91, 86, 79, 53, 47, 43, 12];
    expect(sort_desc(input)).toEqual(expected);
  });

  it('should work with an already sorted descending array', () => {
    const input = [5, 4, 3, 2, 1];
    expect(sort_desc(input)).toEqual([5, 4, 3, 2, 1]);
  });

  it('should work with an ascending array', () => {
    const input = [1, 2, 3, 4, 5];
    expect(sort_desc(input)).toEqual([5, 4, 3, 2, 1]);
  });

  it('should work with a single element array', () => {
    expect(sort_desc([42])).toEqual([42]);
  });
});
