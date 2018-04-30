const fs = require('fs');

const filePath = process.argv[2] || 'eol.txt';
const file = fs.readFile(filePath, 'utf-8', (err, data) => {
  if (err) {
    console.error(err);
    throw err;
  }
  const eolNumber = data.split('\n').length - 1;
  console.log(eolNumber);
});