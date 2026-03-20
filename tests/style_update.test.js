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

describe('Algorithm Pages Style Update', () => {
  algorithmPages.forEach(file => {
    it(`should have correct background and text color for ${file}`, () => {
      const html = fs.readFileSync(file, 'utf8');
      const $ = cheerio.load(html);
      const body = $('body');
      
      // Verify bg-slate-950 and text-slate-100 classes
      expect(body.hasClass('bg-slate-950')).toBe(true);
      expect(body.hasClass('text-slate-100')).toBe(true);
    });
  });
});
