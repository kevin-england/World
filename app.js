var express = require('express');
var app = express();
var story = require('./story.json')

app.use('/', express.static('public')); 

app.listen(1337);
console.log('This server is now live!');