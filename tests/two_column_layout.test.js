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

      it('should NOT have visual markers (borders, shadows, card-like backgrounds)', () => {
        const layoutWrapper = $('.layout-wrapper');
        const main = layoutWrapper.find('main');
        const aside = layoutWrapper.find('aside');

        // Check that main and aside don't have the card-like classes
        const forbiddenClasses = ['bg-slate-900', 'rounded-2xl', 'shadow-xl', 'border'];
        forbiddenClasses.forEach(cls => {
          expect(main.hasClass(cls)).toBe(false);
          expect(aside.hasClass(cls)).toBe(false);
        });
      });
    });
  });
});
