var reader = {};
reader.choices = [];

var button = document.getElementById('button');
button.addEventListner('click', function(theEvent) {
  var choice = document.getElementById('choice');
  reader.choices.push(choice.input);

  choice.input = {
    1: 'Left'
    2: 'Right'
  }

  xhr.open('POST', '/story');
  xhr.send(reader);

  xhr.addEventListner('load', function(theEvent) { 
    var response = JSON.parse(xhr.responseText);
    document.getElementById('passage').textContent = response.text;
  })
});

reader = {
  name: "Elvie the Egg",
  choices: [
  1,
  2,
  4
  ]
}

reader = {
  name: "Gervis the Hare",
  choices: [
  1,
  3,
  7
  ]
}