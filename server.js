faye = require('faye');

var server = new faye.NodeAdapter({
  mount: '/auctions',
  timeout: 45
});

server.listen(8000);


