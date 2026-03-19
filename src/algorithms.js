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

module.exports = {
  minimo,
};
