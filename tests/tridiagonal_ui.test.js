const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const html = fs.readFileSync(path.resolve(__dirname, '../WEB/tridiagonal/index.html'), 'utf8');

describe('Tridiagonal Simulation Page', () => {
  let $;

  beforeEach(() => {
    $ = cheerio.load(html);
  });

  it('should have the correct title', () => {
    expect($('title').text()).toBe('Simulador: Matriz Tridiagonal');
  });

  it('should have a "Volver" button linking to root', () => {
    const volverBtn = $('a:contains("Volver")');
    expect(volverBtn.length).toBeGreaterThan(0);
    expect(volverBtn.attr('href')).toBe('../../index.html');
  });

  it('should have simulation inputs', () => {
    expect($('#input-a').length).toBeGreaterThan(0);
    expect($('#input-b').length).toBeGreaterThan(0);
    expect($('#input-c').length).toBeGreaterThan(0);
    expect($('#input-n').length).toBeGreaterThan(0);
  });
});
