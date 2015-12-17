function createHeader(text) {
  var header = document.createElement('h' + text);
  header.setAttribute('class', 'main');
  var oneHeader = document.createTextNode('The World of Orthia');
  header.appendChild(oneHeader);

  document.body.appendChild(header);
}

function createParagraph(text) {
  var paragraph = document.createElement('p' + text);
  paragraph.setAttribute('class', 'selection');
  var oneParagraph = document.createTextNode('Choose Your Character');
  paragraph.appendChild(oneParagraph);

  document.body.appendChild(paragraph);
}

createHeader()
createParagraph()