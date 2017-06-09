var express = require('express');
var app = express();
app.set('view engine', 'ejs');
app.listen(3000);


app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/name/:name', function(req, res){
  res.render('profile', {name: req.params.name});
});