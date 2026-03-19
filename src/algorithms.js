/**
 * @fileoverview Logic for algorithm simulations.
 */

/**
 * Finds the minimum value in an array.
 * @param {number[]} x The input array.
 * @returns {number} The minimum value.
 */
function minimo(x) {
  if (x.length === 0) return undefined;
  let min = x[0];
  for (let i = 1; i < x.length; i++) {
    if (min > x[i]) {
      min = x[i];
    }
  }
  return min;
}

/**
 * Sorts an array in descending order using selection sort.
 * @param {number[]} x The input array.
 * @returns {number[]} The sorted array.
 */
function sort_desc(x) {
  const n = x.length;
  for (let i = 0; i < n - 1; i++) {
    let max_i = i;
    for (let j = i + 1; j < n; j++) {
      if (x[max_i] < x[j]) {
        max_i = j;
      }
    }
    const temp = x[i];
    x[i] = x[max_i];
    x[max_i] = temp;
  }
  return x;
}

/**
 * Extracts and reverses the digits of a number.
 * @param {number} n The input number.
 * @returns {{digits: number[], count: number}} The reversed digits and count.
 */
function reverse_digits(n) {
  if (n === 0) return { digits: [0], count: 1 };
  
  let x = [];
  let num = n;
  let i = 0;
  
  while (num > 0) {
    x[i] = num % 10;
    num = Math.floor(num / 10);
    i++;
  }
  
  return { digits: x, count: i };
}

/**
 * Determines if a number is a palindrome.
 * @param {number} n The input number.
 * @returns {boolean} True if palindrome, false otherwise.
 */
function palindrome(n) {
  const { digits } = reverse_digits(n);
  let m = 0;
  let i = digits.length;
  for (let j = 0; j < i; j++) {
    m = m + digits[j] * Math.pow(10, i - 1 - j);
  }
  return n === m;
}

/**
 * Evaluates a piece-wise function.
 * @param {number} x The input value.
 * @returns {number} The evaluated result.
 */
function piecewise(x) {
  if (x <= -1) {
    return Math.pow(x, 2);
  } else if (x < 1) {
    return x;
  } else {
    return Math.pow(x, 3);
  }
}

/**
 * Evaluates a piece-wise function for each element of a vector.
 * @param {number[]} x The input array.
 * @param {number} n The length of the array.
 * @returns {number[]} The transformed array.
 */
function vector_piecewise(x, n) {
  let y = [];
  for (let i = 0; i < n; i++) {
    y[i] = piecewise(x[i]);
  }
  return y;
}

/**
 * Generates an n x n tridiagonal matrix.
 * @param {number} a The diagonal value.
 * @param {number} b The upper diagonal value.
 * @param {number} c The lower diagonal value.
 * @param {number} n The size of the matrix.
 * @returns {number[][]} The tridiagonal matrix.
 */
function tridiagonal(a, b, c, n) {
  let A = Array.from({ length: n }, () => Array(n).fill(0));
  
  for (let i = 0; i < n; i++) {
    A[i][i] = a;
  }

  for (let i = 0; i < n - 1; i++) {
    A[i][i + 1] = b;
  }
  
  for (let i = 1; i < n; i++) {
    A[i][i - 1] = c;
  }
  
  return A;
}

module.exports = {
  minimo,
  sort_desc,
  reverse_digits,
  palindrome,
  piecewise,
  vector_piecewise,
  tridiagonal,
};
