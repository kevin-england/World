var images = document.getElementById('test')
images = function createImage() {
  var image = document.createElement('img');
  image.setAttribute('src', 'images/vlax.jpg');
  image.setAttribute('class', 'img-responsive character-image');

  var image1 = document.createElement('img');
  image1.setAttribute('src', 'images/octurnus.jpg');
  image1.setAttribute('class', 'img-responsive character-image');

  document.body.appendChild(image);
  document.body.appendChild(image1);
}

images()
images1()
