var nameField = document.getElementById('name');
nameField.addEventListener('blur', function() {
  if (nameField.value.length < 5) {
    console.log('Your username must be at least 5 characters long.');
    var newText = document.createTextNode('Your username must be at least 5 characters long');
    var element = document.createElement('span');
    var error = element.appendChild(newText);
    document.getElementsByTagName('alert')[0].appendChild(error);
  }
}, false);

var emailField = document.getElementById('email');
emailField.addEventListener('blur', function() {
  if (emailField.value.length < 5) {
    console.log('Your email address must be at least 5 characters long.');
    var newText = document.createTextNode('Your email address must be at least 5 characters long');
    var element = document.createElement('span');
    var error = element.appendChild(newText);
    document.getElementsByTagName('alert')[1].appendChild(error);
  }
}, false);

var passwordField = document.getElementById('password');
passwordField.addEventListener('blur', function() {
  if (passwordField.value.length < 5) {
    console.log('Your password must be at least 5 characters long.');
    var newText = document.createTextNode('Your password must be at least 5 characters long');
    var element = document.createElement('span');
    var error = element.appendChild(newText);
    document.getElementsByTagName('alert')[2].appendChild(error);
  }
}, false);

var signup = document.getElementById('signup');
signup.addEventListener('submit', function(e) {
  e.preventDefault();
  var user = {
    'name': document.getElementById('name').value,
    'email': document.getElementById('email').value,
    'password': document.getElementById('password').value,
  }
  var newString = JSON.stringify(user);
  var xhr = new XMLHttpRequest();
  xhr.open('POST', '/signup');
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhr.send(newString);
}, false);