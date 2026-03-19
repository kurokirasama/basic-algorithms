const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const html = fs.readFileSync(path.resolve(__dirname, '../WEB/sort_desc/index.html'), 'utf8');

describe('Sort Descend Simulation Page', () => {
  let $;

  beforeEach(() => {
    $ = cheerio.load(html);
  });

  it('should have the correct title', () => {
    expect($('title').text()).toBe('Simulador: Ordenar Ascendente');
  });

  it('should have a "Volver" button linking to root', () => {
    const volverBtn = $('a:contains("Volver")');
    expect(volverBtn.length).toBeGreaterThan(0);
    expect(volverBtn.attr('href')).toBe('../../index.html');
  });

  it('should have the simulation container', () => {
    expect($('#array-container').length).toBeGreaterThan(0);
  });

  it('should have status displays', () => {
    expect($('#display-i').length).toBeGreaterThan(0);
    expect($('#display-j').length).toBeGreaterThan(0);
  });
});
