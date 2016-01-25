var express = require('express');
var app = express();
var story = require('./story.json')

app.use('/', express.static('public')); 


//get character choices on the page and on click ask the server for the story
//clear out holders
//create new elements
//append to holders

var xhr = new XMLHttpRequest();
xhr.onload = function () {
  xhr.addEventListener('click', function(req, res) {
    if (e.target == 'BUTTON') { 
      var responseObject = JSON.parse(xhr.responseText);
      xhr.open('GET', './story.json', true);
      xhr.send(story.id[0]);
      console.log(story.id[0]);
    }
    else {
      var responseObject = JSON.parse(xhr.responseText);
      xhr.open('GET', './story.json', true);
      xhr.send(story.id[5]);
      console.log(story.id[5]);
    };
  },false);
}

app.listen(1337);
console.log('This server is now live!');