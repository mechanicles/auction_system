var http = require('http'),
    faye = require('faye');

var bayeux = new faye.NodeAdapter({
  mount: '/auctions',
  timeout: 45
});

// Handle non-Bayeux requests
var server = http.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write('Hello, non-Bayeux request');
  response.end();
});

bayeux.attach(server);
server.listen(8000);


