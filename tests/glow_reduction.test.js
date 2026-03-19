const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

describe('Landing Page Glow Adjustment', () => {
  let $;

  beforeEach(() => {
    $ = cheerio.load(html);
  });

  it('should have reduced glow intensity', () => {
    const style = $('style').text();
    // Verify reduced glow values
    expect(style).toContain('text-shadow: 0 0 2px #fff, 0 0 5px #fff, 0 0 10px #a855f7, 0 0 15px #a855f7, 0 0 20px #a855f7;');
    expect(style).toContain('box-shadow: 0 0 2px #fff, 0 0 5px #a855f7, inset 0 0 2px #a855f7;');
  });
});
