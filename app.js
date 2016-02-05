var express = require('express');
var app = express();
var story = require('./story.json')
var request = require('request');

app.use('/', express.static('public')); 

//get character choices on the page and on click ask the server for the story
//clear out holders
//create new elements
//append to holders

var http = function() {
  http.createServer(function (req, resp) {
    if (req.url === './story.json') {
      var firstChapter = request(story[0]);
      req.pipe(firstChapter);
      firstChapter.pipe(resp);
      firstChapter.style.display = 'block';
    }
  })
};


app.listen(1337);
console.log('This server is now live!');