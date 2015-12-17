function createHeader(text) {
  var header = document.createElement('h' + text);
  header.setAttribute('class', 'main');
  var oneHeader = document.createTextNode('The World of Orthia');
  header.appendChild(oneHeader);

  document.body.appendChild(header);
}

function createTabs(text) {
  var tabs = document.createElement('li' + text);
  tabs.setAttribute('class', 'tabs')
  var oneTab = document.createTextNode('Overview ');
  var twoTab = document.createTextNode('Adventures ');
  var threeTab = document.createTextNode('Characters');

  tabs.appendChild(oneTab);
  tabs.appendChild(twoTab);
  tabs.appendChild(threeTab);

  document.body.appendChild(tabs);
}

function createParagraph(text) {
  var paragraph = document.createElement('p' + text);
  paragraph.setAttribute('class', 'access');
  var oneParagraph = document.createTextNode('The World of Orthia');
  paragraph.appendChild(oneParagraph);

  document.body.appendChild(paragraph);
}


createHeader()
createTabs()
createParagraph()