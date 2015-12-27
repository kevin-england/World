var stories = { stories: [
  { 
    header: 'An egg on the Planet Orthia...', 
    content: 'This will be the starting point for each of the characters',
    image: 'images/vlax.jpg',
    button: 'Go Left',
    buttonOne: 'Go Right'
  },
  { 
    header: 'A hare named Gervis is about to begin a race...', 
    content: 'This will be the starting point for each of the characters',
    image: 'images/octurnus.jpg',
    button: 'Go Left',
    buttonOne: 'Go Right'
  }
]};

function createStory(info) {
  var container = document.createElement('div');
  container.setAttribute('class', 'col-md-12 story');

  var header = document.createElement('h1');
  header.setAttribute('class', 'story-title')
  header.textContent = info.header;

  var title = document.createElement('p');
  title.setAttribute('class', 'story-content')
  title.textContent = info.content;

  var photo = document.createElement('img');
  photo.setAttribute('src', info.image);
  photo.setAttribute('class', 'story-image')

  var button = document.createElement('button');
  button.setAttribute('class', 'choice-one')
  button.textContent = info.button;

  var buttonOne = document.createElement('button');
  buttonOne.setAttribute('class', 'choice-two')
  buttonOne.textContent = info.buttonOne;

  container.appendChild(header);
  container.appendChild(title);
  container.appendChild(photo);
  container.appendChild(button);
  container.appendChild(buttonOne)
  console.log(container)
  return container;
}

var hold = document.getElementById('hold');

for (var i = 0; i < stories.stories.length; i++) {
  var theStory = createStory(stories.stories[i]);
  console.log(theStory)
  hold.appendChild(theStory);
}