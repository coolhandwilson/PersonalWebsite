//import core node modules
const http = require('http');
const path = require('path');
const fs = require('fs');

// Create server
const server = http.createServer((req, res) => {
  // Dynamic File Path
  let filePath = path.join(__dirname, 'public', req.url === "/" ? 'index.html' : req.url);

  // Get the extension of file
  let extensionName = path.extname(filePath);

  // Set content type
  let contentType = 'text/html';

  // Check extension and change content type accordingly
  switch(extensionName) {
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.css':
      contentType = 'text/css';
      break;
    case '.json':
      contentType = 'application/json';
      break;
    case '.png':
      contentType = 'image/png';
      break;
    case '.jpg':
      contentType = 'image/jpg';
      break;
  }

  // Read target file
  fs.readFile(filePath, (err, content) => {
    // If an error occurs
    if (err) {
      if (err.code == 'ENOENT') {
        // Page not found
        console.log("404 Page Not Found");

      } else {
        // Server Error
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    // Success
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf8');
    }
  });
});

// create port var
const port = process.env.PORT || 8000;

// Listen
server.listen(port, () => console.log(`Listening on port ${port}`));