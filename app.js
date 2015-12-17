var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

app.use('/', express.static('public')); 

app.get('/', function(req, res) {
  res.sendFile(path.join('/indexOne.html'));
  console.log('You have entered the index one');
});

app.post('/signup', bodyParser.json(), function (req, res) {
  console.log(JSON.stringify(req.body, null, 2));
});

app.listen(1337);
console.log('This server is now live!');