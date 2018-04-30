const path = require('path');
const fs = require('fs');

module.exports = function (dir, ext, callback) {
  fs.readdir(dir, 'utf8', (err, files) => {
    if (err) {
      return callback(err);
    }
    callback(
      null, 
      files.filter(file => path.extname(file) === '.' + ext)
    );
  });
}