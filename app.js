var express = require('express');
var app = express();
app.set('view engine', 'ejs');

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var server_ip_adress = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';


app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/name/:name', function(req, res){
  res.render('profile', {name: req.params.name});
});

app.listen(server_port, server_ip_adress, function(){
  console.log("Listening on " + server_ip_adress + ", on port " + server_port);
});