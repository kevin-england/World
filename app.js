var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

app.use('/', express.static('public')); 


app.listen(1337);
console.log('This server is now live!');