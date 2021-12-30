//This was practice with node.js. Initially I had used some elements of express, but the goal of this project was to gain
//a better understanding of node.js first before moving on to other tools.

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
    case '.pdf':
      contentType = "application/pdf";
      break;
  }

  // Read target file
  fs.readFile(filePath, (err, content) => {
    // If an error occurs
    if (err) {
      if (err.code == 'ENOENT') {
        // Page not found
        fs.readFile(path.join(__dirname, 'public', '404.html'), (error, content) => {
          res.writeHead(200, {"Content-Type": "text/html"});
          res.end(content, 'utf-8');
        });

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