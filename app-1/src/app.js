const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;

const { exec } = require("child_process");

let netInfo = '';

exec("ifconfig", (error, stdout, stderr) => {
    netInfo = stdout;
});

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('APP-1\n\n' + netInfo);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
