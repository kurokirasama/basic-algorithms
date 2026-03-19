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

module.exports = {
  minimo,
  sort_desc,
};
