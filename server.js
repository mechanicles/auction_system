var faye = require('faye');
var express = require('express')
var app = express.createServer();

var server = new faye.NodeAdapter({
  mount: '/auctions',
  timeout: 45
});

app.configure(function(){
  app.set('views', __dirname + '/views') 
  app.set('view options', {layout:false}) 
  app.use("/public", express.static(__dirname + '/public'));
  app.register('.html', {
    compile: function(str, options){
      return function(locals){
        return str;
      };
    }
  });
});

app.get('/', function(req, res){
  res.render('auctions.html');
});


server.attach(app);
app.listen(12854)
