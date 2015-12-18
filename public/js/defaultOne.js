var characters = { characters: [
  { 
    name: 'Vlax Madero', 
    location: 'Grand Misal',
    image: 'images/vlax.jpg',
    description: 'lorem ipsum',
    button: 'Select'
  },
  { 
    name: 'Octurnus', 
    location: 'Artesian Jungle',
    image: 'images/octurnus.jpg',
    description: 'lorem ipsum',
    button: 'Select'
  }
]};

function createCharacter(info) {
  var container = document.createElement('div');
  container.setAttribute('class', 'col-md-3 col-md-offset-2');

  var header = document.createElement('h1');
  header.textContent = info.name;

  var location = document.createElement('p');
  location.textContent = info.location;

  var photo = document.createElement('img');
  photo.setAttribute('src', info.image);
  photo.setAttribute('class', 'character-image')

  var description = document.createElement('p');
  description.textContent = info.description;

  var button = document.createElement('button');
  button.textContent = info.button;

  container.appendChild(header);
  container.appendChild(location);
  container.appendChild(photo);
  container.appendChild(description);
  container.appendChild(button)
  console.log(container)
  return container;
}

var holder = document.getElementById('holder');

for (var i = 0; i < characters.characters.length; i++) {
  var theCharacter = createCharacter(characters.characters[i]);
  console.log(theCharacter)
  holder.appendChild(theCharacter);
}