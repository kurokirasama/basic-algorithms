const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

describe('Landing Page', () => {
  let $;

  beforeEach(() => {
    $ = cheerio.load(html);
  });

  it('should have the correct title', () => {
    expect($('title').text()).toBe('Ejemplos de Algoritmos');
  });

  it('should have the correct heading', () => {
    const h1 = $('h1');
    expect(h1.length).toBeGreaterThan(0);
    expect(h1.text()).toBe('Ejemplos de Algoritmos');
  });

  it('should have navigation links to all algorithms', () => {
    const expectedLinks = [
      'WEB/mean/index.html',
      'WEB/median/index.html',
      'WEB/mode/index.html',
      'WEB/standard_deviation/index.html',
      'WEB/maximun/index.html',
      'WEB/all_digits/index.html',
      'WEB/sort_ascend/index.html',
    ];

    const links = [];
    $('a').each((i, link) => {
      links.push($(link).attr('href'));
    });
    
    expectedLinks.forEach(link => {
      expect(links).toContain(link);
    });
  });
});
