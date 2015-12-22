var characters = { characters: [
  { 
    name: 'The Egg', 
    description: 'lorem ipsum',
    image: 'images/vlax.png',
    title: 'The Story of the Rolling Egg',
    button: 'Select'
  },
  { 
    name: 'Octurnus', 
    description: 'lorem ipsum for now',
    image: 'images/octurnus.jpg',
    title: 'Title 2',
    button: 'Select'
  }
]};

function createCharacter(info) {
  var container = document.createElement('div');
  container.setAttribute('class', 'col-md-5 options');

  var header = document.createElement('h1');
  header.setAttribute('class', 'character-name')
  header.textContent = info.name;

  var title = document.createElement('p');
  title.setAttribute('class', 'title')
  title.textContent = info.title;

  var photo = document.createElement('img');
  photo.setAttribute('src', info.image);
  photo.setAttribute('class', 'character-image')

  var description = document.createElement('p');
  description.textContent = info.description;

  var button = document.createElement('button');
  button.textContent = info.button;

  container.appendChild(header);
  container.appendChild(description);
  container.appendChild(photo);
  container.appendChild(title);
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