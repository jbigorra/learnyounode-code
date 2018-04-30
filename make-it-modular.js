const filterDir = require('./filter-dir-files-by-ext');

filterDir(
  process.argv[2] || __dirname, 
  process.argv[3] || 'txt', 
  (err, data) => {
    if (err) {
      console.error(err);
      return err;
    }

    data.forEach(file => console.log(file));
  }
);