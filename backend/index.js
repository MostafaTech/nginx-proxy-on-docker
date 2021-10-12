var http = require('http'); // Import Node.js core module

var server = http.createServer(function (req, res) {   //create web server
  if (req.url == '/') { //check the URL of the current request
    var data = { message: 'hello from root /' }
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify(data));
    res.end();
  }
  else if (req.url == "/api") {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify({ message: 'hello from /api' }));
    res.end();
  }
  else {
    res.writeHead(404);
    res.end('Invalid Request to api server!');
  }
});

server.listen(3000); //6 - listen for any incoming requests

console.log('Node.js web server at port 3000 is running..')
