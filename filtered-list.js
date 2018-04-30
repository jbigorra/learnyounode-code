const path = require('path');
const fs = require('fs');

const dirPath = process.argv[2] || __dirname;
const ext = process.argv[3] || 'txt';

fs.readdir(dirPath, 'utf8', (err, files) => {
  if (err) {
    console.error(err);
    throw err;
  }
  files.forEach(file => {
    if (path.extname(file) === '.' + ext) {
      console.log(file);
    }
  })
});
