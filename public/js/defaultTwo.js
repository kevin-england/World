var stories = { stories: [
  { 
    header: 'An egg named Elvie begins to roll. Elvie rolls down a hillside shaped like a woman in a dress, here on the spanning Orthian planes. Swerving from right to left, he comes to a split in his path.', 
    content: 'Which way will Elvie go?',
    image: 'images/egg.jpg',
    button: 'Continue down the hill',
    buttonOne: 'Go towards an unexpected alleyway'
  },
  { 
    header: 'Elvie decides to roll towards the unexpected alleyway. As he enters the small village from the alley, he feels a very cold breeze. There is a local inn nearby that looks to be quite comfortable, but he also sees a big heat lamp that the locals are standing near. Decisions, decisions.', 
    content: 'Where will Elvie go?',
    image: 'images/eggFour.jpg',
    button: 'Enter the inn',
    buttonOne: 'Keep warm under the heat lamp'
  },
  { 
    header: 'Elvie continues on down the hill. Elvie rolls down the hill and sees two Orthian unicorns parting ways. One is a big white steed and the other was a black horn with a brown nose. He decides he wants to follow one!', 
    content: 'Which unicorn will Elvie follow?',
    image: 'images/eggOne.jpg',
    button: 'White Unicorn',
    buttonOne: 'Black Unicorn'
  },
  { 
    header: 'Elvie follows the white unicorn. Elvie has rolled into an odd opening near a big raging fire. Elvie watches as the unicorn nods towards a big black metal item sitting atop the flames, telling Elvie this is where he must go.', 
    content: 'Should Elvie enter the flames and listen to this crazy unicorn?',
    image: 'images/eggTwo.jpg',
    button: 'Maybe not',
    buttonOne: 'Follow Blindly'
  },
  { 
    header: 'Elvie follows the black unicorn. Elvie rolls into a giant cavern where he meets a gnome guarding the path. The gnome tells Elvie that he must make a choice between a carrot and a piece of lettuce before he lets him pass. If he chooses correctly, he may continue.', 
    content: 'Which will Elvie choose?',
    image: 'images/eggThree.jpg',
    button: 'Carrot!',
    buttonOne: 'Lettuce!'
  },
  { 
    header: 'A hare named Gervis has started a race. Though the race has just begun, his opponent is now far behind. The young hare has already gained a substantial lead and must decide his next move.', 
    content: 'What is Gervis going to do?',
    image: 'images/hare.jpg',
    button: 'Take a quick break',
    buttonOne: 'Use shortcut through random rabbit hole'
  },
  { 
    header: 'Gervis decides to take a quick break. As he dozes off for a nap, he is suddenly awakened by the scent of two different pastries. He can smell a delicious carrot cake wafting from the window of a nearby house and the smell of amazing pies coming from a local bakery named Pieoneers. Gervis cannot resist.', 
    content: 'Which pastry should Gervis pursue?',
    image: 'images/hareTwo.jpg',
    button: 'Take the carrot cake',
    buttonOne: 'Go to Pieoneers'
  },
  { 
    header: 'Gervis goes through the rabbit hole. As Gervis enters the hole, he can see the light from the other side of his shortcut. The problem is the owner has just come out with an Orthian pistol shouting at him to get off his property!', 
    content: 'Uh oh, what will Gervis do now?',
    image: 'images/hareOne.jpg',
    button: 'Run for the light!',
    buttonOne: 'Run back!'
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
  photo.setAttribute('class', 'col-md-4 col-md-offset-1 img-responsive story-image')

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