const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const html = fs.readFileSync(path.resolve(__dirname, '../WEB/minimo/index.html'), 'utf8');

describe('Minimo Simulation Page', () => {
  let $;

  beforeEach(() => {
    $ = cheerio.load(html);
  });

  it('should have the correct title', () => {
    expect($('title').text()).toBe('Simulador: Valor Mínimo');
  });

  it('should have a "Volver" button linking to root', () => {
    const volverBtn = $('a:contains("Volver")');
    expect(volverBtn.length).toBeGreaterThan(0);
    expect(volverBtn.attr('href')).toBe('../../index.html');
  });

  it('should have the simulation container', () => {
    expect($('#array-container').length).toBeGreaterThan(0);
  });

  it('should have status display for index and min', () => {
    expect($('#display-i').length).toBeGreaterThan(0);
    expect($('#display-min').length).toBeGreaterThan(0);
  });
});
