var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

app.use('/', express.static('public')); 

app.get('/story', bodyParser.json(), function(req, res) {
  if(match(req.body.reader.choices, [1, 2, 4])) {
    part = {
      text: "In the beginning..."
    };
    res.send(part);
  } else if (match(req.body.reader.choices, [1, 3, 7])) {
    part = {
      text: "A light flickered in the darkness..."
    };
    res.send(part);
  };
});

app.post('/signup', bodyParser.json(), function (req, res) {
  console.log(JSON.stringify(req.body, null, 2));
});

app.listen(1337);
console.log('This server is now live!');