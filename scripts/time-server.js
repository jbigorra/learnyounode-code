const net = require('net');
const port = process.argv[2] || 3000;
  
server = net.createServer( socket => {
  console.log("The time is " +  serverTime());
  socket.end(serverTime());
});

server.listen(port);
console.log('Server listening on port ' + port);

// ================================================ //

const serverTime = () => {
  const 
    date = new Date(),
    YY = date.getFullYear(),
    MM = date.getMonth() + 1,
    DD = date.getDate(),
    hh = date.getHours(),
    mm = date.getMinutes();

  return  `${YY}-` +
          `${MM < 10 ? "0" + MM : MM}-` + 
          `${DD < 10 ? "0" + DD : DD} ` +
          `${hh < 10 ? "0" + hh : hh}:` + 
          `${mm < 10 ? "0" + mm : mm}\n`;
};