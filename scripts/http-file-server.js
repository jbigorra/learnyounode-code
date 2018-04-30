const 
  http = require('http'),
  fs = require('fs'),
  port = process.argv[2] || 3000;
  fileUrl = process.argv[3];


const server = http.createServer((req, res) => {
  const file = '';
  const stream = fs
    .createReadStream(fileUrl)
    .on('close', () => res.end());
  
  stream.pipe(res);
});

server.listen(port);