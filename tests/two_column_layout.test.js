const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const algorithmPages = [
  'all_digits',
  'maximun',
  'mean',
  'median',
  'minimo',
  'mode',
  'palindrome',
  'piecewise',
  'reverse_digits',
  'rut_dv',
  'sort_ascend',
  'sort_desc',
  'standard_deviation',
  'tridiagonal',
  'vector_piecewise'
];

describe('Two-Column Layout Verification (All Pages)', () => {
  algorithmPages.forEach(page => {
    describe(`${page} page`, () => {
      let $;
      const filePath = path.resolve(__dirname, `../WEB/${page}/index.html`);

      beforeAll(() => {
        if (fs.existsSync(filePath)) {
          const html = fs.readFileSync(filePath, 'utf8');
          $ = cheerio.load(html);
        }
      });

      it('should exist', () => {
        expect(fs.existsSync(filePath)).toBe(true);
      });

      it('should have a main container with grid or flex for two columns', () => {
        const layoutWrapper = $('.layout-wrapper');
        expect(layoutWrapper.length).toBeGreaterThan(0);
        expect(layoutWrapper.hasClass('grid') || layoutWrapper.hasClass('flex')).toBe(true);
      });

      it('should have a pseudocode container on the right side', () => {
        const pseudocodeContainer = $('#pseudocode-container');
        expect(pseudocodeContainer.length).toBeGreaterThan(0);
        expect(pseudocodeContainer.find('pre').length).toBeGreaterThan(0);
      });

      it('should have a mobile toggle button for pseudocode', () => {
        const toggleBtn = $('#toggle-pseudocode');
        expect(toggleBtn.length).toBeGreaterThan(0);
      });
    });
  });
});
