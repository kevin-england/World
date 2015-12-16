function createHeader(text) {
  var div = document.createElement('div')
  div.setAttribute('class', '')
  var header = document.createElement('h' + text);
  header.setAttribute('class', 'main')
  var oneHeader = document.createTextNode('The World of Orthia');
  header.appendChild(oneHeader);

  document.body.appendChild(header);
}

createHeader()
