const fs = require('fs');

const filePath = process.argv[2] || 'eol.txt';
const file = fs.readFileSync(filePath);
const eolNumber = file.toString().split('\n').length;
console.log(eolNumber - 1);