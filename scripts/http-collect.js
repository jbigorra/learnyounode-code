const 
  http = require('http'),
  cs = require('concat-stream')
  url = process.argv[2];


http.get(url, (res) => {
  res.pipe(
    cs((data) => {
      const string = data.toString();
      console.log(string.length);
      console.log(string);
    })
  ).on('error', console.error);
}).on('error', console.error);