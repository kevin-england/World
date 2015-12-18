var reader = {};
reader.choices = [];
​
var button = document.getElementById('button');
button.addEventListner('click', function(theEvent) {
  var choice = document.getElementById('choice');
  reader.choice.push(choice.input);
​
  xhr.open('POST', '/story');
  xhr.send(reader);
​
  xhr.addEventListner('load', function(theEvent) { 
    var response = JSON.parse(xhr.responseText);
    document.getElementById('passage').textContent = response.text;
  })
});

reader = {
  name: "First Character",
  choices: [
  1,
  2,
  4
  ]
}

reader = {
  name: "Second Character",
  choices: [
  1,
  3,
  7
  ]
}