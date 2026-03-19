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

module.exports = {
  minimo,
  sort_desc,
  reverse_digits,
  palindrome,
};
