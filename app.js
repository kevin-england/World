var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

app.use('/', express.static('public')); 

app.get('/story', bodyParser.json(), function(req, res) {
  if(match(req.body.reader.choices, [1, 2, 4])) {
    part = {
      text: "One path continues the path along the plains of Orthia"
    };
    res.send(part);
  } else if (match(req.body.reader.choices, [1, 3, 7])) {
    part = {
      text: "Another path takes a turn into a nearby alleyway leading directly into a small village"
    };
    res.send(part);
  };
});

app.listen(1337);
console.log('This server is now live!');