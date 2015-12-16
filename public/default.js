function createHeader(text) {
  var header = document.createElement('h' + text);
  header.setAttribute('class', 'main');
  var oneHeader = document.createTextNode('The World of Orthia');
  header.appendChild(oneHeader);

  document.body.appendChild(header);
}

function createImage() {
  var image = document.createElement('img');
  image.setAttribute('src', 'images/home.jpg');
  image.setAttribute('class', 'home-image')
  var oneImage = document.createTextNode('Orthia');
  image.appendChild(oneImage);

  document.body.appendChild(image);
}

function createTabs(text) {
  var tabs = document.createElement('li' + text);
  tabs.setAttribute('class', 'tabs')
  var oneTab = document.createTextNode('Overview');
  var twoTab = document.createTextNode('Story');
  var threeTab = document.createTextNode('Characters');
  var fourTab = document.createTextNode('Login');
  tabs.appendChild(oneTab);
  tabs.appendChild(twoTab);
  tabs.appendChild(threeTab);
  tabs.appendChild(fourTab);

  document.body.appendChild(tabs);
}

createTabs()
createHeader()
createImage()