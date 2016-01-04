var characters = { characters: [
  { 
    name: 'Elvie the Egg', 
    description: 'Select and watch Elvie roll!',
    image: 'images/vlax.jpg',
    title: 'The Rolling Egg',
    button: 'Get Started'
  },
  { 
    name: 'Gervis the Hare', 
    description: 'Select and get Gervis racing!',
    image: 'images/octurnus.jpg',
    title: 'A Race Through Planet Orthia',
    button: 'Get Started'
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
  description.setAttribute('class', 'description')
  description.textContent = info.description;

  var button = document.createElement('button');
  button.setAttribute('class', 'select')
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