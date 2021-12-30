//import core node modules
const http = require('http');
const path = require('path');
const fs = require('fs');

// Create server
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, {'Content-Type': 'text/htmlsdfh'});
    res.end('<h1>Cheese</h1>');
  }
});

// create port var
const port = process.env.PORT || 8000;

// Listen
server.listen(port, () => console.log(`Listening on port ${port}`));