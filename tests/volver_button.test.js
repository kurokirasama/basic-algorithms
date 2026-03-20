const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const webDir = path.resolve(__dirname, '../WEB');

const getFiles = (dir) => {
  return fs.readdirSync(dir).reduce((files, file) => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      return files.concat(getFiles(filePath));
    } else if (file === 'index.html') {
      return files.concat(filePath);
    }
    return files;
  }, []);
};

const algorithmPages = getFiles(webDir);

describe('Algorithm Pages Navigation Update', () => {
  algorithmPages.forEach(file => {
    it(`should have a red "Volver" button for ${file}`, () => {
      const html = fs.readFileSync(file, 'utf8');
      const $ = cheerio.load(html);
      const volverBtn = $('a:contains("Volver")');
      
      expect(volverBtn.length).toBeGreaterThan(0);
      expect(volverBtn.attr('href')).toBe('../../index.html');
      // Verify style classes (red, neon-border)
      expect(volverBtn.hasClass('border-red-500')).toBe(true);
      expect(volverBtn.hasClass('neon-border')).toBe(true);
    });
  });
});
