var http = require('http');
var static = require('node-static');
var file = new static.Server('./dist', { cache: 0 });

  http.createServer(function(req, res) {
    file.serve(req, res);
  }).listen(8080);

  console.log('Server running on port 8080');