var express = require('express');
var app = express();
app.set('view engine', 'ejs');

var server_port = process.env.PORT || process.env.port || process.env.OPENSHIFT_NODEJS_PORT || 8080;
var server_ip_adress = process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

app.use('/fonts', express.static('fonts'));
app.use('/images', express.static('images'));
app.use('/javascript', express.static('javascript'));
app.use('/stylesheets', express.static('stylesheets'));
app.use('/toggle', express.static('toggle'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index-normal.html');
});

app.get('/name/:name', function(req, res){
  res.render('profile', {name: req.params.name});
});

app.listen(server_port, server_ip_adress, function(){
  console.log("Ok, Pinik,  Listening on " + server_ip_adress + ", on port " + server_port);
});