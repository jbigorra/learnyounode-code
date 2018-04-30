const 
  http = require('http'),
  cs = require('concat-stream'),
  URL = require('url'),
  port = process.argv[2] || 3000;

const server = http.createServer();
server.listen(port);

server.on('request', (req, res) => {
  if (req.method !== 'GET') {
    res.statusCode = 404;
    res.statusMessage = 'Bad request';
    res.end();
  }
  req.on('error', err => console.error(err));
  res.on('error', err => console.error(err));
  router(req, res);
});

const router = (req, res) => {
  const { url } = req;
  const urlPath = url.split('?')[0];

  switch (urlPath) {
    case '/api/parsetime':
      parseTime(req, res);
      break;
    case '/api/unixtime':
      unixTime(req, res);
      break;
    default:
      res.writeHead(404, 'Route not found', { 'Content-Type': 'application/json' });
      break;
  }
};

const parseTime = (req, res) => {
  const { url } = req;
  const urlParsed = URL.parse(url, true);
  const { iso } = urlParsed.query;

  if (!iso) {
    res.writeHead(400);
    return res.end('Bad request');
  }

  const date = new Date(iso);
  const body = {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds()
  };
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(body));
};

const unixTime = (req, res) => {
  const { url } = req;
  const urlParsed = URL.parse(url, true);
  const { iso } = urlParsed.query;

  if (!iso) {
    res.writeHead(400);
    return res.end('Bad request');
  }

  const unixDate = new Date(iso);
  const body = { unixtime: +unixDate };
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(body));
};