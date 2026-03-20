const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const html = fs.readFileSync(path.resolve(__dirname, '../WEB/rut_dv/index.html'), 'utf8');

describe('RUT Verification Digit Simulation Page', () => {
  let $;

  beforeEach(() => {
    $ = cheerio.load(html);
  });

  it('should have the correct title', () => {
    expect($('title').text()).toBe('Simulador: Dígito Verificador RUT');
  });

  it('should have a "Volver" button linking to root', () => {
    const volverBtn = $('a:contains("Volver")');
    expect(volverBtn.length).toBeGreaterThan(0);
    expect(volverBtn.attr('href')).toBe('../../index.html');
  });

  it('should have simulation controls', () => {
    expect($('#input-rut').length).toBeGreaterThan(0);
    expect($('#result').length).toBeGreaterThan(0);
  });
});
