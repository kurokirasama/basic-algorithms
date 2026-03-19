const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const html = fs.readFileSync(path.resolve(__dirname, '../WEB/reverse_digits/index.html'), 'utf8');

describe('Reverse Digits Simulation Page', () => {
  let $;

  beforeEach(() => {
    $ = cheerio.load(html);
  });

  it('should have the correct title', () => {
    expect($('title').text()).toBe('Simulador: Inversión de Dígitos');
  });

  it('should have a "Volver" button linking to root', () => {
    const volverBtn = $('a:contains("Volver")');
    expect(volverBtn.length).toBeGreaterThan(0);
    expect(volverBtn.attr('href')).toBe('../../index.html');
  });

  it('should have extraction and reversal containers', () => {
    expect($('#container-x').length).toBeGreaterThan(0);
    expect($('#container-y').length).toBeGreaterThan(0);
  });

  it('should have simulation controls', () => {
    expect($('#input-n').length).toBeGreaterThan(0);
    expect($('#next-btn').length).toBeGreaterThan(0);
  });
});
