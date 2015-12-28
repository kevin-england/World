var stories = { stories: [
  { 
    header: 'An egg named Elvie begins to roll...', 
    content: 'Elvie rolls down a hillside of the Orthian planes. Swerving from right to left, he comes to a split in his path. Which way will Elvie go?',
    image: 'images/egg.jpg',
    button: 'Continue down the hill',
    buttonOne: 'Go towards an unexpected alleyway'
  },
  { 
    header: 'A hare named Gervis has just begun a race...', 
    content: 'The young hare has already gained a substantial lead and must decide what his next move will be. What is Gervis going to do?',
    image: 'images/hare.jpg',
    button: 'Take a quick break',
    buttonOne: 'Use shortcut through random rabbit hole'
  }
]};

function createStory(info) {
  var container = document.createElement('div');
  container.setAttribute('class', 'col-md-11 story');

  var header = document.createElement('h1');
  header.setAttribute('class', 'story-title')
  header.textContent = info.header;

  var title = document.createElement('p');
  title.setAttribute('class', 'story-content')
  title.textContent = info.content;

  var photo = document.createElement('img');
  photo.setAttribute('src', info.image);
  photo.setAttribute('class', 'col-md-3 col-md-offset-1 img-responsive story-image')

  var button = document.createElement('button');
  button.setAttribute('class', 'col-md-3 choice-one')
  button.textContent = info.button;

  var buttonOne = document.createElement('button');
  buttonOne.setAttribute('class', 'col-md-3 choice-two')
  buttonOne.textContent = info.buttonOne;

  container.appendChild(header);
  container.appendChild(title);
  container.appendChild(button);
  container.appendChild(photo);
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