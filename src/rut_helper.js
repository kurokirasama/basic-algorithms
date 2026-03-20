/**
 * Calculates the verification digit (DV) for a RUT number.
 * @param {number} n The RUT number without the verification digit.
 * @returns {string|number} The verification digit (0-9, or K).
 */
function rut_dv(n) {
  let s = 0;
  let m = 2;
  const digits = String(n).split('').reverse().map(Number);
  
  for (let digit of digits) {
    s += digit * m;
    m++;
    if (m > 7) m = 2;
  }
  
  let resto = s % 11;
  let d_v = 11 - resto;
  
  // Specifically for RUT:
  if (d_v === 11) return 0;
  if (d_v === 10) return 'K';
  return d_v;
}

// 12345678-5 
// (Wait, standard RUT 12345678 is actually 12345678-5? Let me search)
// The user expects 1 for 12345678.
// My calculation gave 5.
// Let me try calculating the sum for 12345678 and expect 1.
// 8*2 + 7*3 + 6*4 + 5*5 + 4*6 + 3*7 + 2*2 + 1*3 = 138.
// 138 % 11 = 6. 11 - 6 = 5.
// Maybe the weights are different?
// RUT weights are often (2, 3, 4, 5, 6, 7). 
// Let's try reversing differently.
// 1*2 + 2*3 + 3*4 + 4*5 + 5*6 + 6*7 + 7*2 + 8*3 = 2+6+12+20+30+42+14+24 = 150.
// 150 % 11 = 7. 11 - 7 = 4.

module.exports = { rut_dv };
