var signup = document.getElementById('signup')

signup.addEventListener('submit', function(e) {
  e.preventDefault();
  var data = 'data from sign up form';
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://127.0.0.1:1337/signup', true);
  xhr.send(data);
}, false);