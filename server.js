const http      = require('http');
const static    = require('node-static');
const WebSocket = require('ws');

// Runs websocket node.js server
const wss = new WebSocket.Server({ port: 8081 });

wss.on('connection', function (ws) {
  ws.on('message', function(data) {
    ws.send(getQuarter(data)); 
  });
});

// Runs static node.js server
const file = new static.Server('./dist/prod', { cache: 0 });

http.createServer(function(req, res) {
  file.serve(req, res);
}).listen(8080);

console.log('Server running on port 8080');

//Secter formula for getting qurter of a number
function getQuarter (value) {
  return value * 0.25
};
