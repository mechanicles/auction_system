faye = require('faye');

var server = new faye.NodeAdapter({
  mount: '/auctions',
  timeout: 45
});

server.listen(12854);
console.log('Server has started...');
