const 
  http = require('http'),
  port = process.argv[2] || 3000;

const server = http.createServer((req, res) => {
  if (req.method !== 'POST') {
    res.statusCode = 400;
    res.statusMessage = 'Route not found';
    res.end();
  }
  handlePost(req, res);
});

const handlePost = (req, res) => {
  let body = '';
  req.setEncoding('utf8');
  req.on('data', (data) => { body += data; })
  req.on("end", () => res.end(body.toUpperCase()));
};

server.listen(port);