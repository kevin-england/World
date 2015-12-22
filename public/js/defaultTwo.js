function createHeader(text) {
  var header = document.createElement('h' + text);
  header.setAttribute('class', 'main');
  var oneHeader = document.createTextNode('The Adventures in Orthia');
  header.appendChild(oneHeader);

  document.body.appendChild(header);
}

function createImage() {
  var image = document.createElement('img');
  image.setAttribute('src', 'images/home.jpg');
  image.setAttribute('class', 'img-responsive home-image');

  document.body.appendChild(image);
}

function createTabs(text) {
  var tabs = document.createElement('li' + text);
  tabs.setAttribute('class', 'tabs')
  var oneTab = document.createTextNode('Overview ');
  var twoTab = document.createTextNode('Story ');
  var threeTab = document.createTextNode('Login');
  tabs.appendChild(oneTab);
  tabs.appendChild(twoTab);
  tabs.appendChild(threeTab);

  document.body.appendChild(tabs);
}

createHeader()
createTabs()
createImage()