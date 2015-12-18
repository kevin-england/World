function createHeader(text) {
  var header = document.createElement('h' + text);
  header.setAttribute('class', 'main');
  var oneHeader = document.createTextNode('The Adventures in Orthia');
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

var characters = { characters: [
  { 
    name: 'Vlax Madero', 
    location: 'Grand Misal',
    image: 'images/vlax.jpg',
    description: 'lorem ipsum'
  },
  { 
    name: 'Octurnus', 
    location: 'Artesian Jungle',
    image: 'images/octurnus.jpg',
    description: 'lorem ipsum'
  }
]};

function createCharacter(info) {
  var container = document.createElement('div');
  container.setAttribute('class', 'col-md-6');

  var header = document.createElement('h1');
  header.textContent = info.name;

  var location = document.createElement('p');
  location.textContent = info.location;

  var photo = document.createElement('img');
  photo.setAttribute('src', info.image)

  var description = document.createElement('p');
  description.textContent = info.description;

  container.appendChild(header);
  container.appendChild(location);
  container.appendChild(photo);
  container.appendChild(description);
  console.log(container)
  return container;
}

var holder = document.getElementById('holder');
console.log(holder)

for (var i = 0; i < characters.characters.length - 1; i++) {
  var theCharacter = createCharacter(characters.characters[i]);
  console.log(theCharacter)
  holder.appendChild(theCharacter);
}