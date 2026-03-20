const { rut_dv } = require('../src/algorithms');

describe('rut_dv algorithm', () => {
  it('should calculate the verification digit (DV) for a given RUT number', () => {
    // 12345678 -> 5
    expect(rut_dv(12345678)).toBe(5);
    // 87654321 -> 4
    expect(rut_dv(87654321)).toBe(4);
  });

  it('should return 0 for specific cases', () => {
    // 11111111 -> 1
    expect(rut_dv(11111111)).toBe(1);
  });

  it('should return K for specific cases', () => {
    // 12345670 -> K
    expect(rut_dv(12345670)).toBe('K');
  });
});
