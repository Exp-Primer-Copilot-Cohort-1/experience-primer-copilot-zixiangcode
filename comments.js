// Create web server
// Create a web server that listens on port 3000. When you visit http://localhost:3000, it should display a welcome message.
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('Welcome to our website');
    res.end();
  }
});

server.listen(3000);