const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const html = fs.readFileSync(path.resolve(__dirname, '../WEB/palindrome/index.html'), 'utf8');

describe('Palindrome Simulation Page', () => {
  let $;

  beforeEach(() => {
    $ = cheerio.load(html);
  });

  it('should have the correct title', () => {
    expect($('title').text()).toBe('Simulador: Palíndromo');
  });

  it('should have a "Volver" button linking to root', () => {
    const volverBtn = $('a:contains("Volver")');
    expect(volverBtn.length).toBeGreaterThan(0);
    expect(volverBtn.attr('href')).toBe('../../index.html');
  });

  it('should have status displays', () => {
    expect($('#display-n').length).toBeGreaterThan(0);
    expect($('#display-m').length).toBeGreaterThan(0);
  });

  it('should have simulation controls', () => {
    expect($('#input-n').length).toBeGreaterThan(0);
  });
});
