var express = require('express');
var app = express();

app.use('/', express.static('public')); 

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
  console.log('I am here')
});

app.post('/signup', function(req, res) {
  console.log('POST request to /signup');
});

app.listen(1337);
console.log('Server live on port 1337');