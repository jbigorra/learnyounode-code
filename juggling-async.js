const 
  http = require('http'),
  cs = require('concat-stream'),
  urls = [
    process.argv[2],
    process.argv[3],
    process.argv[4],
  ],
  responses = ['','',''];
  
let countRequests = 3;

const concatStream = (i) => {
  return (res) => {
    res
    .setEncoding('utf8')
    .on("data", chunk => responses[i] += chunk.toString())
    .on("end", () => {
      if (--countRequests === 0) {
        console.log(responses[0]);
        console.log(responses[1]);
        console.log(responses[2]);
      }
    })
    .on('error', console.error);
  };
};


urls.forEach((url, i) => {
  http
  .get(url, concatStream(i))
  .on('error', console.error);  
});

